import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, } from '@angular/core';
import { StateDeclaration, StateService, UIRouterGlobals } from '@uirouter/angular';
import { DialogService } from 'common/services';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { PipesModule } from 'pipes/module';

import { UpdateAuthorizedContactsComponent } from './updateAuthorizedContacts.component';
import { AuthorizedContactDetails, WebApisService } from 'profile/services';
import { FormsModule, NgForm } from '@angular/forms';
import { SiteCoreItem } from 'cms/cms.module';
import { stateNames } from 'profile/constants';
import { GenericCmsModalComponent, WizardComponent } from 'common/ui';
import { AuthorizedContactModalComponent } from './authorizedContactModal/authorizedContactModal.component';
import { ResponseErrorService } from 'common/services';
import { StorefrontUtilityService } from '../../storefront/services/storefrontUtility.service';

describe('UpdateAuthorizedContacts tests', () => {

    let fixture: ComponentFixture<UpdateAuthorizedContactsComponent>;
    let component: UpdateAuthorizedContactsComponent;
    let webApi: WebApisService;
    let dialogService: DialogService;
    let stateService: StateService;
    let uiRouterGlobals: UIRouterGlobals;
    let storeFrontUtilityService;
    let wizard: WizardComponent;
    let responseErrorService: ResponseErrorService;

    beforeEach(async () => {
        webApi = jasmine.createSpyObj('webApi', ['setAuthContacts', 'getAuthContacts']);
        dialogService = jasmine.createSpyObj('dialogService', ['openSliderCentered', 'openGenericModal']);
        stateService = jasmine.createSpyObj('stateService', ['go']);
        wizard = jasmine.createSpyObj('wizard', ['gotoNextState', 'gotoCancelState']);
        responseErrorService = jasmine.createSpyObj('responseErrorService', ['displayToast']);
        (responseErrorService.displayToast as jasmine.Spy).and.returnValue(true);
        storeFrontUtilityService = {
            webStoreData: {
                fullSiteMode: false,
            },
            isRunningAsKiosk: false
        };
        const data = {
            authContactLimit: 5,
            authContacts: [{
                firstName: 'first',
                lastName: 'last',
                contactId: '12345',
                accessCode: '12345'
            }]
        };
        uiRouterGlobals = {
            params: data
        } as any;
        await TestBed
            .configureTestingModule({
                declarations: [
                    UpdateAuthorizedContactsComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule, FormsModule],
                providers: [
                    { provide: WebApisService, useFactory: () => webApi },
                    { provide: DialogService, useFactory: () => dialogService },
                    { provide: StateService, useFactory: () => stateService },
                    { provide: UIRouterGlobals, useFactory: () => uiRouterGlobals },
                    { provide: StorefrontUtilityService, useFactory: () => storeFrontUtilityService },
                    { provide: ResponseErrorService, useFactory: () => responseErrorService }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(UpdateAuthorizedContactsComponent);
        component = fixture.debugElement.componentInstance;
        component.cmsContent = {
            ADD_BUTTON: 'Add Button',
            ADD_CONTACT_TITLE: 'Add Contact Title',
            EDIT_CONTACT_TITLE: 'Edit Contact Title',
            MAIN_HEADER: 'Main Header',
            MAIN_INFO: null,
            MODAL_HEADER: 'Modal Header',
            PASSWORD_INFO: 'Password Info',
            LongDescription: 'Long Description',
            ShortDescription: 'Short Description',
            TOOL_TIP_INFO: null,
            MAX_LIMIT: 'Max Limit',
            Children: [{
                ShortDescription: 'Child Short Description',
                LongDescription: 'Child Long Description'
            } as SiteCoreItem]
        };

    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

    describe('ngOnInit', () => {
        it('should set cmsItems', () => {
            component.ngOnInit();

            expect(component.cmsContent.MAIN_INFO).toBe('Short Description');
            expect(component.cmsContent.TOOL_TIP_INFO).toBe('Long Description');
        });

        it('should set authorizedContactDetails', async () => {

            await component.ngOnInit();

            expect(component.authContactLimit).toBe(5);
            expect(component.authorizedContactDetails.authorizedContacts).toEqual([{
                firstName: 'first',
                lastName: 'last',
                contactId: '12345',
                accessCode: '12345'
            }]);
            expect(component.tentativeAuthorizedContacts).toEqual([{
                firstName: 'first',
                lastName: 'last',
                contactId: '12345',
                accessCode: '12345',
                remove: false
            }]);
        });

        it('should fall back to getAuthContacts if state params does not exist', async () => {
            uiRouterGlobals.params = {
                authContacts: null,
                authContactLimit: null
            } as any;
            (webApi.getAuthContacts as jasmine.Spy).and.resolveTo({
                authContactLimit: 20,
                authorizedContactList: [{
                    firstName: 'john',
                    lastName: 'smith',
                    contactId: '12345',
                    accessCode: '12345'
                }]
            });

            await component.ngOnInit();

            expect(component.authContactLimit).toBe(20);
            expect(component.authorizedContactDetails.authorizedContacts).toEqual([{
                firstName: 'john',
                lastName: 'smith',
                contactId: '12345',
                accessCode: '12345'
            }]);

            expect(component.tentativeAuthorizedContacts).toEqual([{
                firstName: 'john',
                lastName: 'smith',
                contactId: '12345',
                accessCode: '12345',
                remove: false
            }]);
        });

    });

    describe('cancel', () => {
        it('should call stateService.go', () => {
            component.cancel(wizard);

            expect(stateService.go).toHaveBeenCalledOnceWith(stateNames.AccountDetails);
        });

        it('should call gotoCancelState 1 time', async () => {
            component.isKiosk = true;
            await component.cancel(wizard);

            expect(wizard.gotoCancelState).toHaveBeenCalledTimes(1);
        });
    });

    describe('submit', () => {
        let nextState: StateDeclaration;
        beforeEach(() => {
            component.authorizedContactDetails = {
                currentPassword: 'random',
                authorizedContacts: []
            };
            component.tentativeAuthorizedContacts = [
                {
                    firstName: 'john',
                    lastName: 'smith',
                    accessCode: '12345',
                    contactId: '123456',
                    remove: false
                },
                {
                    firstName: 'jane',
                    lastName: 'doe',
                    accessCode: '12345',
                    contactId: '123456',
                    remove: true
                }
            ];

            nextState = { name: 'AccountInformation' } as StateDeclaration;
        });
        it('should not call setAuthContact if invalid form', async () => {
            await component.submit({ valid: false } as NgForm, wizard);

            expect(webApi.setAuthContacts).not.toHaveBeenCalled();
        });

        it('should call setAuthContacts with removed auth contacts', async () => {

            await component.submit({ valid: true } as NgForm, wizard);

            expect(webApi.setAuthContacts).toHaveBeenCalledOnceWith({
                currentPassword: 'random',
                authorizedContacts: [{
                    firstName: 'john',
                    lastName: 'smith',
                    accessCode: '12345',
                    contactId: '123456'
                }]
            });
        });

        it('should call openGenericModal if response has no errors', async () => {

            (webApi.setAuthContacts as jasmine.Spy).and.resolveTo({});
            (dialogService.openGenericModal as jasmine.Spy).and.resolveTo();

            await component.submit({ valid: true } as NgForm, wizard);

            expect(dialogService.openGenericModal).toHaveBeenCalledOnceWith(GenericCmsModalComponent, {
                cmsContent: {
                    Title: 'Child Long Description',
                    AcceptBtn: 'OKAY',
                    PrimaryContent: 'Child Short Description'
                }
            });

            expect(stateService.go).toHaveBeenCalledOnceWith('AccountInformation');
        });

        it('should not call openGenericModal if response has errors', async () => {

            (webApi.setAuthContacts as jasmine.Spy).and.throwError({} as Error);
            (dialogService.openGenericModal as jasmine.Spy).and.resolveTo();

            await component.submit({ valid: true } as NgForm, wizard);

            expect(dialogService.openGenericModal).not.toHaveBeenCalled();

            expect(stateService.go).not.toHaveBeenCalled();
        });

        it('should call state.go if fullSiteMode', async () => {

            (webApi.setAuthContacts as jasmine.Spy).and.resolveTo({});
            (dialogService.openGenericModal as jasmine.Spy).and.resolveTo();
            storeFrontUtilityService.isRunningAsKiosk = true;
            storeFrontUtilityService.webStoreData.fullSiteMode = true;


            (webApi.setAuthContacts as jasmine.Spy).and.resolveTo({});
            (dialogService.openGenericModal as jasmine.Spy).and.resolveTo();

            await component.submit({ valid: true } as NgForm, wizard);

            expect(dialogService.openGenericModal).toHaveBeenCalledOnceWith(GenericCmsModalComponent, {
                cmsContent: {
                    Title: 'Child Long Description',
                    AcceptBtn: 'OKAY',
                    PrimaryContent: 'Child Short Description'
                }
            });

            expect(stateService.go).toHaveBeenCalledOnceWith('AccountInformation');
        });
    });

    describe('toggleRemove', () => {
        it('should set remove to false if true', () => {
            component.tentativeAuthorizedContacts = [{
                firstName: 'john',
                lastName: 'smith',
                accessCode: '12345',
                contactId: '123456',
                remove: true
            }];
            component.toggleRemove(0);

            expect(component.tentativeAuthorizedContacts[0].remove).toBe(false);
        });

        it('should set remove to true if false', () => {
            component.tentativeAuthorizedContacts = [{
                firstName: 'john',
                lastName: 'smith',
                accessCode: '12345',
                contactId: '123456',
                remove: false
            }];
            component.toggleRemove(0);

            expect(component.tentativeAuthorizedContacts[0].remove).toBe(true);
        });
    });

    describe('openAuthContactEdit', () => {
        let data;
        let details;
        beforeEach(() => {
            data = {
                firstName: 'john',
                lastName: 'smith',
                accessCode: '123456',
                contactId: '123456',
                remove: false
            };

            details = {
                authorizedContacts: [{
                    firstName: 'first',
                    lastName: 'last',
                    accessCode: 'access',
                    contactId: '1234'
                }]
            } as AuthorizedContactDetails;

            component.tentativeAuthorizedContacts = [{
                firstName: 'john',
                lastName: 'smith',
                accessCode: '123456',
                contactId: '123456',
                remove: false
            }];

            component.authorizedContactDetails = {
                authorizedContacts: [{
                    firstName: 'first',
                    lastName: 'last',
                    accessCode: 'access',
                    contactId: '1234'
                }]
            } as AuthorizedContactDetails;
        });

        it('should call openSliderCentered', () => {

            component.openAuthContactEdit(0);

            expect(dialogService.openSliderCentered).toHaveBeenCalledOnceWith(AuthorizedContactModalComponent, {
                cmsContent: {
                    header: 'Modal Header',
                    TOOL_TIP_INFO: null
                },
                contactInfo: data,
                currentContacts: details
            }, { title: 'Edit Contact Title' });
        });

        it('should edit contact', async () => {
            (dialogService.openSliderCentered as jasmine.Spy).and.resolveTo({
                contactInfo: {
                    firstName: 'james',
                    contactId: '123456'
                }
            });
            component.tentativeAuthorizedContacts = [data];

            await component.openAuthContactEdit(0);

            expect(component.tentativeAuthorizedContacts[0]).toEqual({
                firstName: 'james',
                lastName: 'smith',
                accessCode: '123456',
                contactId: '123456',
                remove: false
            });
        });

        it('should not edit contact if canceled', async () => {
            (dialogService.openSliderCentered as jasmine.Spy).and.resolveTo();
            component.tentativeAuthorizedContacts = [data];

            await component.openAuthContactEdit(0);

            expect(component.tentativeAuthorizedContacts[0]).toEqual({
                firstName: 'john',
                lastName: 'smith',
                accessCode: '123456',
                contactId: '123456',
                remove: false
            });
        });
    });

    describe('openAuthContactAdd', () => {
        let data;
        let details;
        beforeEach(() => {
            data = {
                firstName: '',
                lastName: '',
                accessCode: '',
                contactId: '',
                remove: false
            };

            details = {
                authorizedContacts: [{
                    firstName: 'first',
                    lastName: 'last',
                    accessCode: 'access',
                    contactId: '1234'
                }]
            } as AuthorizedContactDetails;

            component.authorizedContactDetails = {
                authorizedContacts: [{
                    firstName: 'first',
                    lastName: 'last',
                    accessCode: 'access',
                    contactId: '1234'
                }]
            } as AuthorizedContactDetails;
        });

        it('should call openSliderCentered', () => {

            component.openAuthContactAdd();

            expect(dialogService.openSliderCentered).toHaveBeenCalledOnceWith(AuthorizedContactModalComponent, {
                cmsContent: {
                    header: 'Modal Header',
                    TOOL_TIP_INFO: null
                },
                contactInfo: data,
                currentContacts: details
            }, { title: 'Add Contact Title' });
        });

        it('should add contact', async () => {
            (dialogService.openSliderCentered as jasmine.Spy).and.resolveTo({
                contactInfo: {
                    firstName: 'John',
                    lastName: 'Smith',
                    accessCode: '12345',
                    contactId: '12345',
                    remove: false
                }
            });
            component.tentativeAuthorizedContacts = [];

            await component.openAuthContactAdd();

            expect(component.tentativeAuthorizedContacts.length).toEqual(1);
            expect(component.tentativeAuthorizedContacts).toEqual([{
                firstName: 'John',
                lastName: 'Smith',
                accessCode: '12345',
                contactId: '12345',
                remove: false
            }]);
        });

        it('should not add contact if canceled', async () => {
            (dialogService.openSliderCentered as jasmine.Spy).and.resolveTo();
            component.tentativeAuthorizedContacts = [];

            await component.openAuthContactAdd();

            expect(component.tentativeAuthorizedContacts.length).toEqual(0);
        });
    });

    describe('tentativeSameAsOriginal', () => {
        [
            {
                tentative: [{
                    firstName: 'john',
                    lastName: 'smith',
                    contactId: '12345',
                    accessCode: '12341234',
                    remove: false
                }],
                orig: [{
                    firstName: 'john',
                    lastName: 'smith',
                    contactId: '12345',
                    accessCode: '12341234'
                }]
            },
            {
                tentative: [{
                    firstName: 'john',
                    lastName: 'smith',
                    contactId: '12345',
                    accessCode: '12341234',
                    remove: false
                },
                {
                    firstName: 'jane',
                    lastName: 'smith',
                    contactId: '12345',
                    accessCode: '12341234',
                    remove: true
                }],
                orig: [{
                    firstName: 'john',
                    lastName: 'smith',
                    contactId: '12345',
                    accessCode: '12341234'
                }]
            }
        ].forEach(({ tentative, orig }) => {
            it('should show as equal', () => {
                component.tentativeAuthorizedContacts = tentative;
                component.authorizedContactDetails = {
                    currentPassword: 'random',
                    authorizedContacts: orig
                };

                expect(component.tentativeIsSameAsOriginal()).toBe(true);
            });
        });

        describe('not equal', () => {
            beforeEach(() => {
                component.tentativeAuthorizedContacts = [{
                    firstName: 'john',
                    lastName: 'smith',
                    contactId: '12345',
                    accessCode: '12341234',
                    remove: false
                }];
                component.authorizedContactDetails = {
                    currentPassword: 'random',
                    authorizedContacts: [{
                        firstName: 'john',
                        lastName: 'smith',
                        contactId: '12345',
                        accessCode: '12341234'
                    }]
                };
            });

            it('if first name is different', () => {
                component.tentativeAuthorizedContacts[0].firstName = 'james';

                expect(component.tentativeIsSameAsOriginal()).toBe(false);
            });

            it('if last name is different', () => {
                component.tentativeAuthorizedContacts[0].firstName = 'jones';

                expect(component.tentativeIsSameAsOriginal()).toBe(false);
            });

            it('if contactId is different', () => {
                component.tentativeAuthorizedContacts[0].contactId = '9999';

                expect(component.tentativeIsSameAsOriginal()).toBe(false);
            });

            it('if tentative is null', () => {
                component.tentativeAuthorizedContacts = null;
                component.authorizedContactDetails = {
                    authorizedContacts: [],
                    currentPassword: ''
                };

                expect(component.tentativeIsSameAsOriginal()).toBe(false);
            });

            it('if authContactDetails is null', () => {
                component.tentativeAuthorizedContacts = [];
                component.authorizedContactDetails = null;

                expect(component.tentativeIsSameAsOriginal()).toBe(false);
            });
        });
    });
});
