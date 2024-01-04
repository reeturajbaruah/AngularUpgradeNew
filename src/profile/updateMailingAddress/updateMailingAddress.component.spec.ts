import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { StateService, UIRouterGlobals } from '@uirouter/angular';
import { UpdateMailingAddressComponent } from './updateMailingAddress.component';
import { FormsModule, NgForm } from '@angular/forms';
import { AccountService, DialogService } from 'common/services';
import { GenericCmsModalComponent, WizardComponent } from 'common/ui';
import { stateNames as profileStates } from 'profile/constants';
import { PipesModule } from 'pipes/module';
import { WebApisService, GetContactInfoResponse, SetContactInfoRequest } from 'profile/services/webApis.service';
import { SiteCoreItem } from 'cms/cms.module';
import { BaseResponse } from 'common/interfaces';

describe('component: UpdateMailingAddress', () => {

    let fixture: ComponentFixture<UpdateMailingAddressComponent>;
    let component: UpdateMailingAddressComponent;
    let state: StateService;
    let uiRouterGlobals: UIRouterGlobals;
    let dialogService: DialogService;
    let webApiService: jasmine.SpyObj<WebApisService>;
    let data: GetContactInfoResponse;
    let accountService: jasmine.SpyObj<AccountService>;

    beforeEach(async () => {
        state = jasmine.createSpyObj('state', ['go']);
        dialogService = jasmine.createSpyObj('dialogService', ['openGenericModal']);
        webApiService = jasmine.createSpyObj('WebApisService', ['setContactInfo']);
        state = jasmine.createSpyObj('state', ['go']);
        accountService = jasmine.createSpyObj('AccountService', ['getContactInfo']);

        data = {
            mailingAddress: {
                address1: '123',
                address2: '234',
                city: 'City',
                country: 'USA',
                international: false,
                state: 'TX',
                zip: '77777'
            }
        } as GetContactInfoResponse;
        uiRouterGlobals = {
            params: {
                personalInfo: data
            } 
        } as any;

        await TestBed
            .configureTestingModule({
                declarations: [
                    UpdateMailingAddressComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule, FormsModule],
                providers: [
                    { provide: WebApisService, useFactory: () => webApiService },
                    { provide: StateService, useFactory: () => state },
                    { provide: DialogService, useFactory: () => dialogService },
                    { provide: UIRouterGlobals, useFactory: () => uiRouterGlobals },
                    NgForm,
                    { provide: AccountService, useFactory: () => accountService },
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(UpdateMailingAddressComponent);
        component = fixture.debugElement.componentInstance;
        component.cmsContent = {
            Title: 'Update Mailing Address',
            LongDescription: 'Long Description',
            Children: [{
                ShortDescription: 'Child Short Description',
                Title: 'Child Long Description'
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

            expect(component.cmsContent.Title).toBe('Update Mailing Address');
            expect(component.cmsContent.LongDescription).toBe('Long Description');
        });

        it('should set fullContactInfo', async () => {
            await component.ngOnInit();

            expect(component.fullContactInfo).toBe(data);
        });

        it('should fall back to getContactInfo if state params does not exist', async () => {
            uiRouterGlobals.params = {
                params: null
            } as any;
            accountService.getContactInfo.and.resolveTo({
                mailingAddress: {
                    address1: '765',
                    address2: '432',
                    city: 'City',
                    country: 'USA',
                    international: false,
                    state: 'TX',
                    zip: '66666'
                }
            } as GetContactInfoResponse);

            await component.ngOnInit();
            expect(component.fullContactInfo).toEqual({
                mailingAddress: {
                    address1: '765',
                    address2: '432',
                    city: 'City',
                    country: 'USA',
                    international: false,
                    state: 'TX',
                    zip: '66666'
                }
            } as GetContactInfoResponse);
        });
    });

    describe('cancel', () => {
        it('should call stateService.go', () => {
            component.cancel();

            expect(state.go).toHaveBeenCalledOnceWith(profileStates.AccountDetails);
        });
    });

    describe('submit', () => {
        let wizard: WizardComponent;
        beforeEach(() => {
            component.fullContactInfo = {
                mailingAddress: {
                    address1: '123',
                    address2: '234',
                    city: 'City',
                    country: 'USA',
                    international: false,
                    state: 'TX',
                    zip: '77777'
                }
            } as GetContactInfoResponse;
        });
        it('should not call setContactInfo if invalid form', async () => {
            await component.submit({ valid: false } as NgForm);

            expect(webApiService.setContactInfo).not.toHaveBeenCalled();
        });

        it('should call setContactInfo with new address', async () => {
            webApiService.setContactInfo.and.resolveTo({} as BaseResponse);

            await component.submit({ valid: true } as NgForm);

            expect(webApiService.setContactInfo).toHaveBeenCalledOnceWith({
                mailingAddress: {
                    address1: '123',
                    address2: '234',
                    city: 'City',
                    country: 'USA',
                    international: false,
                    state: 'TX',
                    zip: '77777'
                },
                contactInfo: undefined,
                personalInfo: undefined
            } as SetContactInfoRequest);
        });

        it('should call openGenericModal if response has no errors', async () => {

            webApiService.setContactInfo.and.resolveTo({} as BaseResponse);
            (dialogService.openGenericModal as jasmine.Spy).and.resolveTo();

            await component.submit({ valid: true } as NgForm);

            expect(dialogService.openGenericModal).toHaveBeenCalledOnceWith(GenericCmsModalComponent, {
                cmsContent: {
                    Title: 'Child Long Description',
                    AcceptBtn: 'OKAY',
                    PrimaryContent: 'Child Short Description'
                }
            });

            expect(state.go).toHaveBeenCalledOnceWith(profileStates.AccountDetails);
        });

        it('should not call openGenericModal if response has errors', async () => {

            webApiService.setContactInfo.and.throwError({} as Error);
            (dialogService.openGenericModal as jasmine.Spy).and.resolveTo();

            try {
                await component.submit({ valid: true } as NgForm);
            } catch (e) {
                expect(dialogService.openGenericModal).not.toHaveBeenCalled();

                expect(state.go).not.toHaveBeenCalled();
                return;
            }
            expect(true).toBeFalsy();
        });
    });
});
