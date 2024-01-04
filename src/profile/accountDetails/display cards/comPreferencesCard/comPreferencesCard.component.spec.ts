import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResponseErrorService, ToasterService } from 'common/services';
import { } from 'jasmine';
import { ComPreferences, GetComPreferenceResponse, WebApisService } from 'profile/services/webApis.service';
import { ComPreferencesCardComponent } from './comPreferencesCard.component';
import { TranslationService } from 'translation/services';


describe('component: com-preferences-card', () => {

    let fixture: ComponentFixture<ComPreferencesCardComponent>;
    let component: ComPreferencesCardComponent;
    let webApiService: jasmine.SpyObj<WebApisService>;
    let responseErrorService: jasmine.SpyObj<ResponseErrorService>;
    let toasterService: jasmine.SpyObj<ToasterService>;
    let translationService: jasmine.SpyObj<TranslationService>;

    beforeEach(async () => {
        webApiService = jasmine.createSpyObj('WebApisService', ['getComPreferences', 'setComPreferences']);
        webApiService.getComPreferences.and.returnValue(Promise.resolve() as any);
        webApiService.setComPreferences.and.returnValue(Promise.resolve() as any);

        responseErrorService = jasmine.createSpyObj('responseErrorService', ['isErrorFree', 'displayAlertsFromResponse']);

        toasterService = jasmine.createSpyObj('toasterService', ['show']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    ComPreferencesCardComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [],
                providers: [
                    { provide: WebApisService, useFactory: () => webApiService },
                    { provide: ResponseErrorService, useFactory: () => responseErrorService },
                    { provide: ToasterService, useFactory: () => toasterService },
                    { provide: TranslationService, useFactory: () => translationService }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(ComPreferencesCardComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

    describe('ngOnInit', () => {

        it('should use getComPreferences to set preferences to correct values', async () => {
            webApiService.getComPreferences.and.returnValue(Promise.resolve({
                monthlyStatementsAreByEmail: true,
                monthlyStatementsAreByMail: false,
                importantUpdatesAreByEmail: true,
                importantUpdatesAreByMail: false
            } as GetComPreferenceResponse));

            await component.ngOnInit();

            expect(component.preferences).toEqual({
                monthlyStatementsAreByEmail: true,
                monthlyStatementsAreByMail: false,
                importantUpdatesAreByEmail: true,
                importantUpdatesAreByMail: false
            } as ComPreferences
            );
        });
    });

    describe('updatePreferences', () => {

        [
            ['monthlyStatementsEmail', false, 'monthlyStatementsAreByEmail', true],
            ['monthlyStatementsEmail', true, 'monthlyStatementsAreByEmail', false],
            ['monthlyStatementsMail', false, 'monthlyStatementsAreByMail', true],
            ['monthlyStatementsMail', true, 'monthlyStatementsAreByMail', false],
            ['importantUpdatesEmail', false, 'importantUpdatesAreByEmail', true],
            ['importantUpdatesEmail', true, 'importantUpdatesAreByEmail', false],
            ['importantUpdatesMail', false, 'importantUpdatesAreByMail', true],
            ['importantUpdatesMail', true, 'importantUpdatesAreByMail', false]
        ].forEach(([id, startingValue, preference, newValue]) => {
            it(`should set ${preference} to ${newValue} from ${startingValue} using ${id}`, async () => {
                component.preferences = {
                    monthlyStatementsAreByEmail: false,
                    monthlyStatementsAreByMail: false,
                    importantUpdatesAreByEmail: false,
                    importantUpdatesAreByMail: false
                } as ComPreferences;

                component.preferences[preference as string] = startingValue;

                await component.updatePreferences(id as string);

                expect(component.preferences[preference as string]).toBe(newValue);
            });
        });

        it('should successfully call setPreferences', async () => {
            component.preferences = {
                monthlyStatementsAreByEmail: false,
                monthlyStatementsAreByMail: false,
                importantUpdatesAreByEmail: false,
                importantUpdatesAreByMail: false
            } as ComPreferences;

            const fakeResponse = {
                alerts: [],
                errors: []
            };

            webApiService.setComPreferences.and.returnValue(Promise.resolve(fakeResponse) as any);
            responseErrorService.isErrorFree.and.returnValue(true);

            await component.updatePreferences('default');

            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledTimes(1);
            expect(toasterService.show).toHaveBeenCalledTimes(1);
            expect(responseErrorService.isErrorFree).toHaveBeenCalledTimes(1);
        });

        it('should call displayErrorsFromResponse when setPreferences returns error', async () => {
            component.preferences = {
                monthlyStatementsAreByEmail: false,
                monthlyStatementsAreByMail: false,
                importantUpdatesAreByEmail: false,
                importantUpdatesAreByMail: false
            } as ComPreferences;

            const fakeResponse = {
                alerts: [],
                errors: ['There is a problem here!']
            };

            webApiService.setComPreferences.and.returnValue(Promise.resolve(fakeResponse) as any);

            await component.updatePreferences('default');

            expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalledTimes(1);
            expect(toasterService.show).toHaveBeenCalledTimes(0);
            expect(responseErrorService.isErrorFree).toHaveBeenCalledTimes(1);
        });
    });
});
