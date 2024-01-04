import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { PhoneNumberPipe } from 'pipes/phoneNumber/phoneNumber.pipe';
import { StateService, UIRouterGlobals } from '@uirouter/angular';
import { FormsModule, NgForm } from '@angular/forms';
import { AccountService, DialogService } from 'common/services';
import { GenericCmsModalComponent, WizardComponent } from 'common/ui';
import { WebApisService, GetContactInfoResponse, ContactInfo } from 'profile/services/webApis.service';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { SiteCoreItem } from 'cms/cms.module';
import { UpdateContactInformationComponent } from './updateContactInformation.component';
import { SyncRiteToggles } from 'shared/interfaces/toggles/sync-rite-toggles.interface';
import { AddressInfo } from 'common/models';
import { cloneDeep } from 'lodash';
import { stateNames as profileStateNames } from 'profile/constants';
import { ContactInfoCMSContent } from './interfaces/update-contact-information.interface';
import { StorefrontUtilityService } from '../../storefront/services/storefrontUtility.service';

const mockCmsContent = {
    Children: [{
        Title: 'Update Contact Info',
        ShortDescription: 'Short Description',
    } as SiteCoreItem]
} as ContactInfoCMSContent;

const primaryPhoneNumer = '123-456-7890';
const firstAltPhoneNumber = '098-765-4321';
const secondAltPhoneNumber = '112-233-4455';

const mockContactInfo = {
    altEmailAddress: 'altEmail@example.com',
    emailAddress: 'email@example.com',
    phoneNumber: primaryPhoneNumer,
    altPhoneNumber: firstAltPhoneNumber,
    mobilePhoNbr: secondAltPhoneNumber
} as ContactInfo;

const mockAddressInfo = {
    address1: '123 St',
    city: 'Houston',
    state: 'TX',
    zip: '12345',
    country: 'USA',
    displayCountry: 'USA'
} as AddressInfo;

const mockContactInfoResponse = {
    contactInfo: mockContactInfo,
    mailingAddress: mockAddressInfo
} as GetContactInfoResponse;

describe('component: update-contact-information', () => {
    let component: UpdateContactInformationComponent;
    let fixture: ComponentFixture<UpdateContactInformationComponent>;

    let uiRouterGlobals: UIRouterGlobals;
    let accountService: jasmine.SpyObj<AccountService>;
    let environmentConfig: jasmine.SpyObj<any>;
    let phoneNumberPipe: jasmine.SpyObj<PhoneNumberPipe>;
    let storeFrontUtilityService: any;
    let webApiService: jasmine.SpyObj<WebApisService>;
    let dialogService: jasmine.SpyObj<DialogService>;
    let state: jasmine.SpyObj<StateService>;

    beforeEach(async () => {
        uiRouterGlobals = { params: { personalInfo: cloneDeep(mockContactInfoResponse) } } as any;
        accountService = jasmine.createSpyObj('AccountService', ['getContactInfo']);
        environmentConfig = jasmine.createSpyObj('ENVIRON_CONFIG', {}, {
            syncRiteToggles: { MasterToggle: true, SyncRitePhoneExt: true, SyncRitePhoneOptIn: true } as SyncRiteToggles
        });
        phoneNumberPipe = jasmine.createSpyObj('phoneNumberPipe', ['transform']);
        storeFrontUtilityService = { webStoreData: { fullSiteMode: false }, isRunningAsKiosk: false };
        webApiService = jasmine.createSpyObj('WebApisService', ['updateContactInfo', 'updateMailingInfo']);
        dialogService = jasmine.createSpyObj('dialogService', ['openGenericModal']);
        state = jasmine.createSpyObj('state', ['go']);

        phoneNumberPipe.transform.and.callFake((input) => input.replace(/^(\d{3})-?(\d{3})-?(\d{4})$/, '$1-$2-$3'));

        await TestBed.configureTestingModule({
            declarations: [
                UpdateContactInformationComponent,
                PhoneNumberPipe
            ],
            imports: [FormsModule],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
                { provide: AccountService, useFactory: () => accountService },
                { provide: ENVIRON_CONFIG, useFactory: () => environmentConfig },
                { provide: PhoneNumberPipe, useFactory: () => phoneNumberPipe },
                { provide: StorefrontUtilityService, useFactory: () => storeFrontUtilityService },
                { provide: WebApisService, useFactory: () => webApiService },
                { provide: DialogService, useFactory: () => dialogService },
                { provide: StateService, useFactory: () => state },
                { provide: UIRouterGlobals, useFactory: () => uiRouterGlobals }
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UpdateContactInformationComponent);
        component = fixture.debugElement.componentInstance;
        component.fullContactInfo = cloneDeep(mockContactInfoResponse);
        component.cmsContent = cloneDeep(mockCmsContent);
    });

    describe('canary', () => {
        it('should create', async () => {
            expect(component).toBeTruthy();
        });
    });

    describe('ngOnInit', () => {
        it('should initialize the component', async () => {
            // Arrange
            spyOn<any>(component, 'getContactInfo');
            spyOn<any>(component, 'setToggles');
            spyOn<any>(component, 'detectKioskMode');
            spyOn<any>(component, 'cloneContactInfo');

            // Act
            await component.ngOnInit();

            // Assert
            expect(component['getContactInfo']).toHaveBeenCalled();
            expect(component['setToggles']).toHaveBeenCalled();
            expect(component['detectKioskMode']).toHaveBeenCalled();
            expect(component['cloneContactInfo']).toHaveBeenCalled();
        });
    });

    describe('getContactInfo', () => {
        it('should get contact info from router params if available', async () => {
            // Arrange
            component.fullContactInfo = null;
            uiRouterGlobals.params.personalInfo = cloneDeep(mockContactInfoResponse);

            // Act
            await component['getContactInfo']();

            // Assert
            expect(accountService.getContactInfo).not.toHaveBeenCalled();
            expect(component.fullContactInfo).toEqual(mockContactInfoResponse);
        });

        it('should call accountService.getContactInfo if router params are not available', async () => {
            // Arrange
            component.fullContactInfo = null;
            uiRouterGlobals.params.personalInfo = null;
            accountService.getContactInfo.and.returnValue(Promise.resolve(cloneDeep(mockContactInfoResponse)));

            // Act
            await component['getContactInfo']();

            // Assert
            expect(accountService.getContactInfo).toHaveBeenCalled();
            expect(component.fullContactInfo).toEqual(mockContactInfoResponse);
        });

        it('should call formatPhoneNumber method', async () => {
            // Arrange
            spyOn<any>(component, 'formatPhoneNumber');

            // Act
            await component['getContactInfo']();

            // Assert
            expect(component['formatPhoneNumber']).toHaveBeenCalled();
        });
    });

    describe('formatPhoneNumber', () => {
        it('should format phone numbers correctly', () => {
            // Act
            component['formatPhoneNumber']();

            // Assert
            expect(phoneNumberPipe.transform).toHaveBeenCalledTimes(3);
            expect(component.fullContactInfo.contactInfo.phoneNumber).toBe(primaryPhoneNumer);
            expect(component.fullContactInfo.contactInfo.altPhoneNumber).toBe(firstAltPhoneNumber);
            expect(component.fullContactInfo.contactInfo.mobilePhoNbr).toBe(secondAltPhoneNumber);
        });
    });

    describe('setToggles', () => {
        it('should initialize syncRiteToggles property and call initAddAltPhoneFlow when MasterToggle is true', () => {
            // Arrange
            environmentConfig.syncRiteToggles.MasterToggle = true;
            spyOn<any>(component, 'initAddAltPhoneFlow');

            // Act
            component['setToggles']();

            // Assert
            expect(component.syncRiteToggles).toBe(environmentConfig.syncRiteToggles);
            expect(component['initAddAltPhoneFlow']).toHaveBeenCalled();
        });

        it('should not call initAddAltPhoneFlow when MasterToggle is false', () => {
            // Arrange
            environmentConfig.syncRiteToggles.MasterToggle = false;
            spyOn<any>(component, 'initAddAltPhoneFlow');

            // Act
            component['setToggles']();

            // Assert
            expect(component.syncRiteToggles).toBe(environmentConfig.syncRiteToggles);
            expect(component['initAddAltPhoneFlow']).not.toHaveBeenCalled();
        });
    });

    describe('initAddAltPhoneFlow', () => {
        it('should initialize firstAltPhoneState to true and secondAltPhoneState to true', () => {
            // Act
            component['initAddAltPhoneFlow']();

            // Assert
            expect(component.firstAltPhoneState).toBe(true);
            expect(component.secondAltPhoneState).toBe(true);
        });

        it('should initialize firstAltPhoneState to true and secondAltPhoneState to false', () => {
            // Arrange
            component.fullContactInfo.contactInfo.mobilePhoNbr = null;

            // Act
            component['initAddAltPhoneFlow']();

            // Assert
            expect(component.firstAltPhoneState).toBe(true);
            expect(component.secondAltPhoneState).toBe(false);
        });

        it('should initialize firstAltPhoneState to false and secondAltPhoneState to false', () => {
            // Arrange
            component.fullContactInfo.contactInfo.altPhoneNumber = null;
            component.fullContactInfo.contactInfo.mobilePhoNbr = null;

            // Act
            component['initAddAltPhoneFlow']();

            // Assert
            expect(component.firstAltPhoneState).toBe(false);
            expect(component.secondAltPhoneState).toBe(false);
        });

        it('should call updateAddAltPhoneButton', () => {
            // Arrange
            spyOn<any>(component, 'updateAddAltPhoneButton');

            // Act
            component['initAddAltPhoneFlow']();

            // Assert
            expect(component['updateAddAltPhoneButton']).toHaveBeenCalled();
        });
    });

    describe('updateAddAltPhoneButton', () => {
        it('should set showAddAltPhoneButton to false if both firstAltPhoneState and secondAltPhoneState are true', () => {
            // Arrange
            component.firstAltPhoneState = true;
            component.secondAltPhoneState = true;

            // Act
            component['updateAddAltPhoneButton']();

            // Assert
            expect(component.showAddAltPhoneButton).toBe(false);
        });

        it('should set showAddAltPhoneButton to true if either firstAltPhoneState or secondAltPhoneState is false', () => {
            // Arrange
            component.firstAltPhoneState = true;
            component.secondAltPhoneState = false;

            // Act
            component['updateAddAltPhoneButton']();

            // Assert
            expect(component.showAddAltPhoneButton).toBe(true);
        });
    });

    describe('detectKioskMode', () => {
        it('should initialize isKiosk property correctly', () => {
            // Arrange
            storeFrontUtilityService.isRunningAsKiosk = true;
            storeFrontUtilityService.webStoreData.fullSiteMode = false;

            // Act
            component['detectKioskMode']();

            // Assert
            expect(component.isKiosk).toBe(true);
        });

        it('should set isKiosk to false when not running in kiosk mode', () => {
            // Arrange
            storeFrontUtilityService.isRunningAsKiosk = false;

            // Act
            component['detectKioskMode']();

            // Assert
            expect(component.isKiosk).toBe(false);
        });
    });

    describe('cloneContactInfo', () => {
        it('should clone contactInfo and mailingAddress when isKiosk is true', () => {
            // Arrange
            component.isKiosk = true;

            // Act
            component['cloneContactInfo']();

            // Assert
            expect(component.currentInfo.contactInfo).toEqual(mockContactInfo);
            expect(component.saveButtonText).toBe('PROCEED');
            expect(component.currentInfo.mailingAddress).toEqual(mockAddressInfo);
        });

        it('should clone contactInfo and not mailingAddress when isKiosk is false', () => {
            // Arrange
            component.isKiosk = false;

            // Act
            component['cloneContactInfo']();

            // Assert
            expect(component.currentInfo.contactInfo).toEqual(mockContactInfo);
            expect(component.saveButtonText).not.toBe('PROCEED');
            expect(component.currentInfo.mailingAddress).toBeUndefined();
        });
    });

    describe('onAddAltPhoneNumberClick', () => {
        it('should set firstAltPhoneState to true and display add alt button the first alt phone number section is not already shown', () => {
            // Arrange
            component.firstAltPhoneState = false;
            component.secondAltPhoneState = false;
            spyOn<any>(component, 'updateAddAltPhoneButton').and.callThrough();

            // Act
            component.onAddAltPhoneNumberClick();

            // Assert
            expect(component.firstAltPhoneState).toBeTrue();
            expect(component.secondAltPhoneState).toBeFalsy();
            expect(component['updateAddAltPhoneButton']).toHaveBeenCalled();
            expect(component.showAddAltPhoneButton).toBeTrue();
        });

        it('should set secondAltPhoneState to true and hide add alt button if the first alt phone number section is shown and the second is not', () => {
            // Arrange
            component.firstAltPhoneState = true;
            component.secondAltPhoneState = false;
            spyOn<any>(component, 'updateAddAltPhoneButton').and.callThrough();

            // Act
            component.onAddAltPhoneNumberClick();

            // Assert
            expect(component.firstAltPhoneState).toBeTrue();
            expect(component.secondAltPhoneState).toBeTrue();
            expect(component['updateAddAltPhoneButton']).toHaveBeenCalled();
            expect(component.showAddAltPhoneButton).toBeFalse();
        });
    });

    describe('deleteFirstAltPhone', () => {
        it('should transfer data from second to first alt phone section and then clear and hide second alt phone number section if second alt phone is available', () => {
            // Arrange
            component.firstAltPhoneState = true;
            component.secondAltPhoneState = true;
            spyOn<any>(component, 'updateAddAltPhoneButton').and.callThrough();

            // Act
            component.deleteFirstAltPhone();

            // Assert
            expect(component.fullContactInfo.contactInfo.altPhoneNumber).toBe(secondAltPhoneNumber);
            expect(component.fullContactInfo.contactInfo.mobilePhoNbr).toBe('');
            expect(component.secondAltPhoneState).toBeFalse();
            expect(component['updateAddAltPhoneButton']).toHaveBeenCalled();
            expect(component.showAddAltPhoneButton).toBeTrue();
        });

        it('should hide first alt phone section if second alt phone is not avaialable', () => {
            // Arrange
            component.firstAltPhoneState = true;
            component.secondAltPhoneState = false;
            spyOn<any>(component, 'updateAddAltPhoneButton').and.callThrough();

            // Act
            component.deleteFirstAltPhone();

            // Assert
            expect(component.firstAltPhoneState).toBeFalse();
            expect(component['updateAddAltPhoneButton']).toHaveBeenCalled();
            expect(component.showAddAltPhoneButton).toBeTrue();
        });
    });

    describe('deleteSecondAltPhone', () => {
        it('should hide second alt phone', () => {
            // Arrange
            component.firstAltPhoneState = true;
            component.secondAltPhoneState = true;
            spyOn<any>(component, 'updateAddAltPhoneButton').and.callThrough();

            // Act
            component.deleteSecondAltPhone();

            // Assert
            expect(component.secondAltPhoneState).toBeFalse();
            expect(component['updateAddAltPhoneButton']).toHaveBeenCalled();
            expect(component.showAddAltPhoneButton).toBeTrue();
        });
    });

    describe('submit', () => {
        let form: jasmine.SpyObj<NgForm>;
        let wizardUiMock: jasmine.SpyObj<WizardComponent>;

        beforeEach(() => {
            wizardUiMock = jasmine.createSpyObj('WizardComponent', ['gotoNextState']);
        });

        it('should not proceed if form is not valid', async () => {
            // Arrange
            form = jasmine.createSpyObj('NgForm', [], { valid: false });
            spyOn<any>(component, 'formatPhoneNumber');
            spyOn<any>(component, 'checkIfFormChanged');

            // Act
            await component.submit(form, wizardUiMock);

            // Assert
            expect(component['formatPhoneNumber']).not.toHaveBeenCalled();
            expect(component['checkIfFormChanged']).not.toHaveBeenCalled();
        });

        it('should format phone number and then call updateContactInfo if form has changed', async () => {
            // Arrange
            form = jasmine.createSpyObj('NgForm', [], { valid: true });
            spyOn<any>(component, 'formatPhoneNumber');
            spyOn<any>(component, 'checkIfFormChanged').and.returnValue(true);
            spyOn<any>(component, 'updateContactInfo').and.returnValue(Promise.resolve(true));

            // Act
            await component.submit(form, wizardUiMock);

            // Assert
            expect(component['formatPhoneNumber']).toHaveBeenCalled();
            expect(component['checkIfFormChanged']).toHaveBeenCalled();
            expect(component['updateContactInfo']).toHaveBeenCalled();
        });

        it('should openConfirmationModal if updateContactInfo api response is true', async () => {
            // Arrange
            form = jasmine.createSpyObj('NgForm', [], { valid: true });
            spyOn<any>(component, 'formatPhoneNumber');
            spyOn<any>(component, 'checkIfFormChanged').and.returnValue(true);
            spyOn<any>(component, 'updateContactInfo').and.returnValue(Promise.resolve(true));
            spyOn<any>(component, 'openConfirmationModal');

            // Act
            await component.submit(form, wizardUiMock);

            // Assert
            expect(component['formatPhoneNumber']).toHaveBeenCalled();
            expect(component['checkIfFormChanged']).toHaveBeenCalled();
            expect(component['updateContactInfo']).toHaveBeenCalled();
            expect(component['openConfirmationModal']).toHaveBeenCalled();
        });

        it('should not openConfirmationModal if updateContactInfo api response is false', async () => {
            // Arrange
            form = jasmine.createSpyObj('NgForm', [], { valid: true });
            spyOn<any>(component, 'formatPhoneNumber');
            spyOn<any>(component, 'checkIfFormChanged').and.returnValue(true);
            spyOn<any>(component, 'updateContactInfo').and.returnValue(Promise.resolve(false));
            spyOn<any>(component, 'openConfirmationModal');

            // Act
            await component.submit(form, wizardUiMock);

            // Assert
            expect(component['formatPhoneNumber']).toHaveBeenCalled();
            expect(component['checkIfFormChanged']).toHaveBeenCalled();
            expect(component['updateContactInfo']).toHaveBeenCalled();
            expect(component['openConfirmationModal']).not.toHaveBeenCalled();
        });

        it('should transition to the next state if isKiosk is true', async () => {
            // Arrange
            form = jasmine.createSpyObj('NgForm', [], { valid: true });
            component.isKiosk = true;
            spyOn<any>(component, 'checkIfFormChanged').and.returnValue(false);

            // Act
            await component.submit(form, wizardUiMock);

            // Assert
            expect(wizardUiMock.gotoNextState).toHaveBeenCalled();
            expect(state.go).not.toHaveBeenCalled();
        });

        it('should transition to account details state if isKiosk is false', async () => {
            // Arrange
            form = jasmine.createSpyObj('NgForm', [], { valid: true });
            component.isKiosk = false;
            spyOn<any>(component, 'checkIfFormChanged').and.returnValue(false);

            // Act
            await component.submit(form, wizardUiMock);

            // Assert
            expect(wizardUiMock.gotoNextState).not.toHaveBeenCalled();
            expect(state.go).toHaveBeenCalledWith(profileStateNames.AccountDetails);
        });
    });

    describe('checkIfFormChanged', () => {
        it('should return false if contact info has not changed and is not in kiosk mode', () => {
            // Arrange
            component.isKiosk = false;
            component.currentInfo = cloneDeep(mockContactInfoResponse) as any;
            component.fullContactInfo = cloneDeep(mockContactInfoResponse);

            // Act
            const result = component['checkIfFormChanged']();

            // Assert
            expect(result).toBeFalse();
        });

        it('should return true if contact info has changed and is not in kiosk mode', () => {
            // Arrange
            component.isKiosk = false;
            component.currentInfo = cloneDeep(mockContactInfoResponse) as any;
            component.fullContactInfo = cloneDeep(mockContactInfoResponse);
            component.fullContactInfo.contactInfo.phoneExt = '1234';

            // Act
            const result = component['checkIfFormChanged']();

            // Assert
            expect(result).toBeTrue();
        });

        it('should return true if contact info has changed in kiosk mode', () => {
            // Arrange
            component.isKiosk = true;
            component.currentInfo = cloneDeep(mockContactInfoResponse) as any;
            component.fullContactInfo = cloneDeep(mockContactInfoResponse);
            component.fullContactInfo.contactInfo.phoneExt = '1234';

            // Act
            const result = component['checkIfFormChanged']();

            // Assert
            expect(result).toBeTrue();
        });

        it('should return true if mailing address has changed in kiosk mode', () => {
            // Arrange
            component.isKiosk = true;
            component.currentInfo = cloneDeep(mockContactInfoResponse) as any;
            component.fullContactInfo = cloneDeep(mockContactInfoResponse);
            component.fullContactInfo.mailingAddress.address1 = cloneDeep(mockAddressInfo.city);

            // Act
            const result = component['checkIfFormChanged']();

            // Assert
            expect(result).toBeTrue();
        });

        it('should return false if neither contact info nor mailing address has changed in kiosk mode', () => {
            // Arrange
            component.isKiosk = true;
            component.currentInfo = cloneDeep(mockContactInfoResponse) as any;
            component.fullContactInfo = cloneDeep(mockContactInfoResponse);

            // Act
            const result = component['checkIfFormChanged']();

            // Assert
            expect(result).toBeFalse();
        });
    });

    describe('updateContactInfo', () => {
        it('should only update contact info if isKiosk is false', async () => {
            // Arrange
            component.isKiosk = false;

            // Act
            await component['updateContactInfo']();

            // Assert
            expect(webApiService.updateContactInfo).toHaveBeenCalledWith(component.fullContactInfo.contactInfo);
            expect(webApiService.updateMailingInfo).not.toHaveBeenCalled();
        });
    });

    describe('openConfirmationModal', () => {
        it('should open a confirmation modal', async () => {
            // Arrange
            const modalCms = component.cmsContent.Children[0];
            const data = {
                cmsContent: {
                    Title: modalCms.Title,
                    AcceptBtn: 'OKAY',
                    PrimaryContent: modalCms.ShortDescription
                }
            };

            // Act
            await component['openConfirmationModal']();

            // Assert
            expect(dialogService.openGenericModal).toHaveBeenCalledWith(GenericCmsModalComponent, data);
        });
    });

    describe('cancel', () => {
        let wizardUi: jasmine.SpyObj<WizardComponent>;

        beforeEach(() => {
            wizardUi = jasmine.createSpyObj('wizard', ['gotoCancelState']);
        });

        it('should call stateService.go when isKiosk is false', async () => {
            // Arrange
            component.isKiosk = false;

            // Act
            await component.cancel(wizardUi);

            // Assert
            expect(state.go).toHaveBeenCalledWith(profileStateNames.AccountDetails);
            expect(wizardUi.gotoCancelState).not.toHaveBeenCalled();
        });

        it('should call gotoCancelState when isKiosk is true', async () => {
            // Arrange
            component.isKiosk = true;

            // Act
            await component.cancel(wizardUi);

            // Assert
            expect(wizardUi.gotoCancelState).toHaveBeenCalled();
            expect(state.go).not.toHaveBeenCalled();
        });
    });
});
