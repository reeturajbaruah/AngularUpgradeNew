import { ElementRef, Inject, Injectable, NgZone } from '@angular/core';
import { BaseResponse, ErrorMessage } from 'common/interfaces';
import { WindowRef } from 'common/providers';
import { ResponseErrorService } from 'common/services';
import { wait } from 'common/utilities/promisify';
import { WebStorageConst } from 'constants/module';
import { LoggingService } from 'logging/module';
import { fromEvent, Observable, ReplaySubject } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { WebStorageService, OperatingSystemSnifferService, HttpService } from 'common/services';
import { LoggingFunc, TranslationSession, TranslationSessionImplemented, TranslatorFunc } from './translation.session';


type SessionStarter = (elementRef: ElementRef) => void;
type grouping = { payload: string[]; size: number; maxOut?: boolean };

interface TranslationEvent {
    status: 'starting' | 'stopping';
    hasErrored: boolean;
    startNewSession: SessionStarter;
}

export interface Language {
    isRtl: boolean;
    code: string;
    label: string;
    nativeLabel: string;
    nativeGeneralExceptionMessage: string;
}

interface Settings {
    supportedLanguages: Language[];
    isAvailable: boolean;
    loggingEnabled: boolean;
}

interface SettingsApiResponse extends BaseResponse {
    webMobileViewEnabled?: boolean;
    webLoggingEnabled?: boolean;
    translationEnabled?: boolean;
    encodedCharactersRegex?: string;
    supportedLanguages?: Language[];
    specialCharacterEncoding?: string;
    errors: any[];
}

interface TranslatedApiResponse {
    translatedContent: string[];
    errors: any[];
}

//actual exposed interface
export abstract class TranslationService {

    abstract set languagePreference(language: string);
    abstract get languagePreference(): string;

    abstract startRealtimeTranslations(language: string);
    abstract stopRealtimeTranslations();

    abstract get isReadyEvent(): Observable<Settings>;
    abstract get isReadyEventPromise(): Promise<void>;
    abstract get realTimeTranslationsEvent(): Observable<TranslationEvent>;
}

//fully implmented version of class, allowing more methods to be exposed
//for testing
@Injectable()
export class TranslationServiceImplemented implements TranslationService {

    constructor(
        protected webStorage: WebStorageService,
        protected httpService: HttpService,
        private responseErrorService: ResponseErrorService,
        private loggingService: LoggingService,
        protected webStorageConst: WebStorageConst,
        private ngZone: NgZone,
        @Inject(WindowRef) private window: Window,
        private operatingSystemSnifferService: OperatingSystemSnifferService,
    ) {
        this.replayEvent = new ReplaySubject<TranslationEvent>(1);
        this.readyEvent = new ReplaySubject<Settings>(1);
        this.sessions = [];
        this.settings = {} as Settings;
        this.setFeatureToggleValues();
    }

    private readonly defaultLanguage = 'English';
    private specialCharacterRegex: RegExp;
    public isRunning = false;
    private replayEvent: ReplaySubject<TranslationEvent>;
    private readyEvent: ReplaySubject<Settings>;
    public settings: Settings;
    public sessions: TranslationSession[];
    public readonly maxRequestSize = 30000;
    public readonly maxContentSize = 1024;
    private alternativeStorage = {};
    private nativeExceptionMessages: { [language: string]: string } = {};

    get realTimeTranslationsEvent(): Observable<TranslationEvent> {
        return this.replayEvent;
    }

    get isReadyEvent(): Observable<Settings> {
        return this.readyEvent;
    }

    get isReadyEventPromise(): Promise<void> {

        //TODO: Use firstValueFrom(this.isReadyEvent) when upgraded to RXJS 7
        return this.isReadyEvent
            .pipe(take(1), map(() => null))
            .toPromise();
    }

    isAvailable({ webMobileViewEnabled, translationEnabled }: SettingsApiResponse): boolean {
        return !!(translationEnabled && (this.operatingSystemSnifferService.isDesktopOs() || webMobileViewEnabled));
    }

    async setFeatureToggleValues() {
        const response = await this.httpService.get('/api/translation/supportedLanguages') as SettingsApiResponse;
        if (this.responseErrorService.isErrorFree(response)) {
            this.settings.supportedLanguages = response.supportedLanguages;
            this.settings.isAvailable = this.isAvailable(response);
            this.settings.loggingEnabled = response.webLoggingEnabled;
            this.specialCharacterRegex = new RegExp(response.specialCharacterEncoding || '[%]', 'ig');
            this.nativeExceptionMessages = response.supportedLanguages.reduce((acc, item) => (
                { ...acc, [item.label]: item.nativeGeneralExceptionMessage }
            ), {});

            //TODO: consider moving the hardcoded param key 'Lang' into the settings (feature toggle) for translation services
            const queryStringLanguage = this.getLanguagePreferenceFromQuerystring('Lang');

            if (queryStringLanguage) {
                this.languagePreference = queryStringLanguage;
            }

            this.languagePreference = response.supportedLanguages
                .map(x => x.label)
                .includes(this.languagePreference)
                ? this.languagePreference
                : this.defaultLanguage;

        } else {
            this.settings.supportedLanguages = [];
            this.settings.isAvailable = false;
        }

        if (this.settings.isAvailable) {
            fromEvent(this.window, 'blur').subscribe(() => this.lookForLanguageChange());
        }

        if (this.settings.isAvailable && (this.languagePreference || '').toLowerCase() !== this.defaultLanguage.toLowerCase()) {
            await wait(500);
            this.readyEvent.next(this.settings);
            this.startRealtimeTranslations(this.languagePreference);

        } else {
            this.readyEvent.next(this.settings);
        }
    }

    lookForLanguageChange() {

        const originalLanguage = this.languagePreference;

        //ie does not sync localstorage without this
        //uncomment line below and storageSubscription.unsubscribe() in focusSubscribtion if this working in ie is desirable
        //const storageSubscription = fromEvent(this.window, 'storage').subscribe((e: StorageEvent) => storageSubscription.unsubscribe());

        const focusSubscribtion = fromEvent(this.window, 'focus').subscribe(() => {

            if (originalLanguage !== this.languagePreference) {
                this.readyEvent.next(this.settings);
                this.stopRealtimeTranslations();
                this.startRealtimeTranslations(this.languagePreference);
            }
            focusSubscribtion.unsubscribe();
            //storageSubscription.unsubscribe();
        });
    }

    private get localStorage() {
        return this.window.localStorage || this.alternativeStorage;
    }

    set languagePreference(language: string) {
        this.localStorage[this.webStorageConst.selectedLanguage] = language;
    }

    get languagePreference(): string {
        return this.localStorage[this.webStorageConst.selectedLanguage];
    }

    private getLanguagePreferenceFromQuerystring(key: string) {
        const params = new URLSearchParams(this.window.location.search);
        return params.get(key);
    }

    startRealtimeTranslations(targetLanguage: string) {
        if (this.settings.isAvailable && !this.isRunning) {
            this.isRunning = true;
            this.replayEvent.next({
                status: 'starting',
                hasErrored: false,
                startNewSession: (elm) => {

                    const isRtl = this.settings.supportedLanguages
                        .filter(language => language.label.toLowerCase() === targetLanguage.toLowerCase())
                        .some(language => language.isRtl);

                    this.startNewTranslationSession(elm, targetLanguage, isRtl);
                }
            });
        }
    }

    stopRealtimeTranslations(errors?: ErrorMessage[]) {
        if (this.isRunning) {
            this.isRunning = false;
            const currentSetLanguage = this.languagePreference;
            this.languagePreference = this.defaultLanguage;

            this.replayEvent.next({
                status: 'stopping',
                hasErrored: !!errors,
                startNewSession: null
            });
            this.sessions.forEach(session => session.end());
            this.sessions = [];

            if (errors) {
                const errorMessageAvailable = currentSetLanguage && this.nativeExceptionMessages[currentSetLanguage];
                const translatedErrors = errors.map(error => {
                    const key = (error.key || '').toLowerCase();

                    if (key === 'general-exception' && errorMessageAvailable) {
                        const translatedMessage = this.nativeExceptionMessages[currentSetLanguage];
                        return { key: error.key, message: translatedMessage };
                    } else {
                        return error;
                    }
                });

                this.responseErrorService.displayErrorsFromResponse({ errors: translatedErrors } as BaseResponse);
            }
        }
    }

    //keep arrow function to allow 'this' not to be mangled.
    public groupRequests = (accumulator: grouping[], text: string): grouping[] => {

        let group: grouping;

        if (accumulator.length) {
            group = accumulator[accumulator.length - 1];
        } else {
            group = { payload: [], size: 0 };
            accumulator.push(group);
        }

        const canAddTextToGroup = group.size + text.length < this.maxRequestSize && group.payload.length < this.maxContentSize;
        const canAddToNewGroup = text.length < this.maxRequestSize;

        if (canAddTextToGroup) {
            group.payload.push(text);
            group.size += text.length;
        } else if (canAddToNewGroup) {
            accumulator.push({ payload: [text], size: text.length });
        } else {
            accumulator.push({ payload: [text], size: text.length, maxOut: true });
            accumulator.push({ payload: [], size: 0 });
        }

        return accumulator;
    };

    public async log(language: string, msg: string) {

        if (this.settings.loggingEnabled) {
            return wait(0).then(() => this.loggingService.logMessage(`Translation Log\nLanguage: ${language}\n${msg}`));
        }
    }

    public async translator(languageCode: string, content: string[]): Promise<string[]> {

        //group requests into buckets smaller than the max size allowed,
        //and break up into separate calls
        const promises = content
            .reduce(this.groupRequests, [] as grouping[])
            .filter(group => group.size > 0)
            .map(group => {
                if (group.maxOut) {
                    this.log(languageCode, `content maxout during translation: size - ${group.size}`);
                    return Promise.resolve(group.payload);
                } else {
                    return this.sendRequest(languageCode, group.payload);
                }
            });

        const responses = await Promise.all(promises);
        return responses.reduce((acc, response) => ([...acc, ...response]), [] as string[]);
    }

    public encodeContent(htmlContent: string): string {
        return (htmlContent || '').replace(this.specialCharacterRegex, subString => `&#x${subString.charCodeAt(0).toString(16)};`);
    }

    public sendRequest(languageCode: string, content: string[]): Promise<string[]> {

        const url = '/api/translation/' + languageCode;

        const encodedContent = content.map(htmlContent => this.encodeContent(htmlContent));

        return this.httpService
            .post(url, { englishContent: encodedContent }, false)
            .then((response: TranslatedApiResponse) => {
                if (Array.isArray(response.errors) && response.errors.length) {
                    this.log(languageCode, `Aborting Translation: ${JSON.stringify(response.errors)}`);
                    throw response.errors;
                } else {
                    return response.translatedContent;
                }
            });
    }

    public createSession(
        translatorFunc: TranslatorFunc, loggingFunc: LoggingFunc, elementRef: ElementRef<any>, ngZone: NgZone, window: Window) {

        return new TranslationSessionImplemented(translatorFunc, loggingFunc, elementRef, ngZone, window);
    }

    public startNewTranslationSession(elementRef: ElementRef, language: string, isRtl = false): void {
        const session = this.createSession(
            (languageCode: string, content: string[]) => this.translator(languageCode, content).catch((errors: ErrorMessage[]) => {
                this.stopRealtimeTranslations(errors);
                return content;
            }),
            (msg: string) => this.log(language, msg),
            elementRef, this.ngZone, this.window);

        this.sessions.push(session);
        session.start(language, isRtl);
    }
}
