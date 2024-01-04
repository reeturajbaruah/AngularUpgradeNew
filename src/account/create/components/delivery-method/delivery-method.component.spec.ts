import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddressInfo, DeliveryMethodType, IMailingInfo } from 'common/models';
import { PipesModule } from 'pipes/module';
import { DeliveryMethodComponent } from './delivery-method.component';
import { IToggles } from 'account/create/models/toggles.models';
import { DeliveryMethodFacadeService } from 'account/create/services/delivery-method/facade/delivery-method-facade-service';
import { DeliveryMethodApiService } from 'account/create/services/delivery-method/api/delivery-method-api.service';
import { IDeliveryMethodInfo } from '../../models/delivery-method.model';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { StateService, UIRouterGlobals } from '@uirouter/angular';
import { ComponentManagerService } from '../../services/manager/component-manager-service';
import { StoreService } from '../../services/store/store.service';
import { FrameComponent } from '../frame/frame.component';
import { MailingAddressService } from '../../../../vehicles/shared';
import { DialogService, HttpService, ResponseErrorService, ToasterService } from '../../../../common/services';
import { NavigationService } from '../../services/navigation/navigation.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateAccountModule } from '../../module';
import { WizardStateResolverFactory } from '../../../../common/ui';
import { IWizardStateResolverService } from '../../../../common/interfaces';
import { StorefrontService } from '../../../../storefront/services/storefront.service';


describe('delivery method component', () => {

    let fixture: ComponentFixture<DeliveryMethodComponent>;
    let component: DeliveryMethodComponent;
    let deliveryMethodFacadeServiceSpy: jasmine.SpyObj<DeliveryMethodFacadeService>;
    let deliveryMethodApiServiceSpy: jasmine.SpyObj<DeliveryMethodApiService>;
    let stateService: jasmine.SpyObj<StateService>;
    let manager: jasmine.SpyObj<ComponentManagerService>;
    let uiRouterGlobals: jasmine.SpyObj<UIRouterGlobals>;
    let store: jasmine.SpyObj<StoreService>;
    let parent: jasmine.SpyObj<FrameComponent>;
    let mailingAddressService: jasmine.SpyObj<MailingAddressService>;
    let dialogService: jasmine.SpyObj<DialogService>;
    let navigation: jasmine.SpyObj<NavigationService>;
    let storefrontService: any;
    let delieveryMethodInfo = {} as IDeliveryMethodInfo;
    let environmentConfig: any;
    let httpService: jasmine.SpyObj<HttpService>;
    let toasterService: jasmine.SpyObj<ToasterService>;
    let responseErrorService: jasmine.SpyObj<ResponseErrorService>;
    let wizardStateResolverFactory: jasmine.SpyObj<WizardStateResolverFactory>;
    let service: jasmine.SpyObj<IWizardStateResolverService>;
    let addressInfoObj: AddressInfo;

    beforeEach(async () => {

        addressInfoObj = {
            address1: 'address1',
            address2: 'address2',
            address3: 'address3',
            address4: 'address4',
            city: 'city',
            state: 'state',
            zip: 'zip',
            plus4: 'plus4',
            country: 'country',
            displayCountry: 'USA',
            international: false,
        };

        delieveryMethodInfo = {
            selectedDeliveryMethod: DeliveryMethodType.Mail,
            addressInfo: addressInfoObj
        };

        service = jasmine.createSpyObj('fakeService', ['nextState', 'previousState', 'cancelState', 'getUiOrder']);
        wizardStateResolverFactory = jasmine.createSpyObj('fakeFactory', ['getService']);
        wizardStateResolverFactory.getService.and.returnValue(service);

        toasterService = jasmine.createSpyObj('toasterService', ['removeAll', 'show']);
        httpService = jasmine.createSpyObj('httpService', ['get', 'post']);
        responseErrorService = jasmine.createSpyObj('responseErrorService', ['isErrorFree', 'displayAlertsFromResponse']);

        deliveryMethodApiServiceSpy = jasmine.createSpyObj('deliveryMethodApiServiceSpy', ['updateMailingInfo']);
        deliveryMethodFacadeServiceSpy = jasmine.createSpyObj('deliveryMethodFacadeServiceSpy', ['updateMailingInfo']);
        deliveryMethodFacadeServiceSpy.updateMailingInfo.and.resolveTo({} as IMailingInfo);

        stateService = jasmine.createSpyObj('state', ['go']);

        manager = jasmine.createSpyObj('manager', ['select', 'getToggles', 'checkUserResumedCreateAcctFlow']);
        manager.getToggles.and.resolveTo({ IsFlexPay: true } as IToggles);
        manager.select.and.resolveTo(delieveryMethodInfo);

        uiRouterGlobals = jasmine.createSpyObj('UIRouterGlobals', [], { current: { name: '' } });
        store = jasmine.createSpyObj('store', ['select']);
        parent = jasmine.createSpyObj('parent', ['campaignInit', 'nextButtonText', 'setTitle', 'setStepOnly']);
        mailingAddressService = jasmine.createSpyObj('mailingAddressService', ['setMailingAddressOnAcctLevel', 'getMailingAddress']);

        dialogService = jasmine.createSpyObj('dialogService', ['openSliderCentered']);
        dialogService.openSliderCentered.and.resolveTo(true);

        navigation = jasmine.createSpyObj('navigation', ['navigation']);
        storefrontService = jasmine.createSpyObj('storefrontService', ['isEnabled']);
        environmentConfig = {};

        await TestBed
            .configureTestingModule({
                declarations: [
                    DeliveryMethodComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [CreateAccountModule, ReactiveFormsModule, FormsModule, PipesModule],
                providers: [
                    { provide: WizardStateResolverFactory, useFactory: () => wizardStateResolverFactory },
                    { provide: HttpService, useValue: httpService },
                    { provide: ToasterService, useFactory: () => toasterService },
                    { provide: ResponseErrorService, useFactory: () => responseErrorService },
                    { provide: DeliveryMethodApiService, useFactory: () => deliveryMethodApiServiceSpy },
                    { provide: ENVIRON_CONFIG, useFactory: () => environmentConfig },
                    { provide: DeliveryMethodFacadeService, useFactory: () => deliveryMethodFacadeServiceSpy },
                    { provide: StateService, useFactory: () => stateService },
                    { provide: ComponentManagerService, useFactory: () => manager },
                    { provide: UIRouterGlobals, useFactory: () => uiRouterGlobals },
                    { provide: StoreService, useFactory: () => store },
                    { provide: FrameComponent, useFactory: () => parent },
                    { provide: MailingAddressService, useFactory: () => mailingAddressService },
                    { provide: DialogService, useFactory: () => dialogService },
                    { provide: NavigationService, useFactory: () => navigation },
                    { provide: StorefrontService, useFactory: () => storefrontService },
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(DeliveryMethodComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });
    });

    describe('intialize delivery method component', () => {
        it('initialized the component', async () => {
            component.delieveryMethodInfo = delieveryMethodInfo;
            await component.ngOnInit();
            expect(component).toBeDefined();
        });
    });

    describe('onMailingAddressEdit - delivery method component', () => {
        it('should call onMailingAddressEdit', async () => {

            const mailingAddressInfo: IMailingInfo =
            {
                firstName: 'firstName',
                lastName: 'lastName',
                internationalAddress: false,
                address1: 'address1',
                address2: 'address2',
                city: 'city',
                state: 'state',
                zip: 'zip',
                plus4: 'plus4',
                country: 'USA'
            };

            dialogService.openSliderCentered.and.returnValue(Promise.resolve(mailingAddressInfo));
            spyOn(component, 'onMailingAddressEdit').and.callThrough();
            spyOn<any>(component, 'updateMailingInfo').and.returnValue(true);

            const option = 'option';
            await component['onMailingAddressEdit'](option);
            expect(dialogService.openSliderCentered).toHaveBeenCalledTimes(1);
        });
    });


    describe('fetchStoreData - delivery method component', () => {

        it('should call fetchStoreData with mail delivery method', async () => {
            delieveryMethodInfo = {
                selectedDeliveryMethod: DeliveryMethodType.Mail,
                addressInfo: addressInfoObj
            };

            manager.select.and.resolveTo(delieveryMethodInfo);
            await component.ngOnInit();
            expect(component.delieveryMethodInfo.selectedDeliveryMethod).toBe(DeliveryMethodType.Mail);
        });

        it('should call fetchStoreData with Pick up delivery method', async () => {
            delieveryMethodInfo = {
                selectedDeliveryMethod: DeliveryMethodType.Pickup,
                addressInfo: addressInfoObj
            };

            manager.select.and.resolveTo(delieveryMethodInfo);
            await component.ngOnInit();
            expect(component.delieveryMethodInfo.selectedDeliveryMethod).toBe(DeliveryMethodType.Pickup);
        });

    });

});
