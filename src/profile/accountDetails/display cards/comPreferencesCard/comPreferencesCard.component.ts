import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { ResponseErrorService, ToasterService } from 'common/services';
import { ComPreferences, GetComPreferenceResponse, WebApisService } from 'profile/services/webApis.service';
import { from, Observable, Subscription } from 'rxjs';
import { TranslationService } from 'translation/services';


@Component({
    selector: 'com-preferences-card',
    templateUrl: './comPreferencesCard.html',
    styleUrls: ['../profileCards.less', './comPreferencesCard.less']
})
export class ComPreferencesCardComponent implements OnInit, AfterViewInit {
    @Input() comPrefTitle: string;
    @Input() comPrefMonthlyStatementsContext: string;
    @Input() comPrefImportantUpdatesContext: string;
    @Input() comPrefUpdateToasterContext: string;
    @Input() comPrefNoMailingAddress: string;
    @Input() isAccountClosed: boolean;
    @Input() isHideByMail: boolean;

    public initialPrefernces$: Observable<GetComPreferenceResponse>;
    public preferences: ComPreferences;
    public longText = false;

    constructor(
        private webApi: WebApisService,
        private responseErrorService: ResponseErrorService,
        private translationService: TranslationService,
        private toasterService: ToasterService
    ) { }

    public async updatePreferences(id: string) {
        switch (id) {
            case 'monthlyStatementsEmail':
                this.preferences.monthlyStatementsAreByEmail = !this.preferences.monthlyStatementsAreByEmail;
                break;
            case 'monthlyStatementsMail':
                this.preferences.monthlyStatementsAreByMail = !this.preferences.monthlyStatementsAreByMail;
                break;
            case 'importantUpdatesEmail':
                this.preferences.importantUpdatesAreByEmail = !this.preferences.importantUpdatesAreByEmail;
                break;
            case 'importantUpdatesMail':
                this.preferences.importantUpdatesAreByMail = !this.preferences.importantUpdatesAreByMail;
                break;
        }

        await this.webApi.setComPreferences(this.preferences).then((response) => {
            this.responseErrorService.displayAlertsFromResponse(response);

            if (this.responseErrorService.isErrorFree(response)) {
                this.toasterService.show('Success', this.comPrefUpdateToasterContext);
            }
        });
    }

    ngOnInit() {
        this.initialPrefernces$ = from(this.webApi.getComPreferences());

        this.initialPrefernces$.subscribe(p => this.preferences = p as ComPreferences);
    };

    ngAfterViewInit(): void {

        this.translationService
            .realTimeTranslationsEvent
            .subscribe(evt => {
                if (evt.status === 'starting') {
                    if (this.translationService.languagePreference === 'Filipino') {
                        this.longText = true;
                    }
                }
                else {
                    this.longText = false;
                }
            });
    }
}
