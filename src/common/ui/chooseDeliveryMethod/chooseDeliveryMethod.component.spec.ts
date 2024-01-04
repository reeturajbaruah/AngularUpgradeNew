import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { GenericRepoService, ResponseErrorService } from 'common/services';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { UrlPaths } from 'constants/module';
import { } from 'jasmine';
import { ChooseDeliveryMethodComponent, DeliveryMethodType } from './chooseDeliveryMethod.component';
import { StringUtilsService } from 'common/services/stringUtils/stringUtils.service';
import { StorefrontService } from '../../../storefront/services/storefront.service';


describe('ChooseDeliveryMethodComponent', () => {

    let fixture: ComponentFixture<ChooseDeliveryMethodComponent>;
    let component: ChooseDeliveryMethodComponent;
    let genericRepo: any;
    let responseErrorService: jasmine.SpyObj<any>;
    let urlPaths: UrlPaths;
    let environmentConfig;
    let storefrontService: any;
    let stringUtils: jasmine.SpyObj<StringUtilsService>;

    beforeEach(async () => {

        genericRepo = {
            dataFactory: {
                getCmsPageById: jasmine.createSpy('getCmsPageById'),
            }
        };
        genericRepo.dataFactory.getCmsPageById.and.resolveTo({
            cmsResponse: JSON.stringify({
                ShortDescription: 'Short Test',
                LongDescription: 'Long Test',
            })
        });

        responseErrorService = jasmine.createSpyObj('responseErrorService', ['isErrorFree', 'displayAlertsFromResponse']);

        urlPaths = new UrlPaths();

        environmentConfig = {
            tagDeliveryConfig: {
                AllowDeliveryByMail: true,
                AllowPickup: true,
                MvuAllowDelivery: true,
                MvuAllowPickup: true,
            }
        };

        storefrontService = { isEnabled: false };

        stringUtils = jasmine.createSpyObj('StringUtilsService', ['getParameterObject']);
        stringUtils.getParameterObject.and.returnValue({
            MailCMS: 'fake 123',
            MailingAddressTooltip: 'abc',
            MailingHeader: '123',
            PickupHeader: 'xyz'
        });

        await TestBed
            .configureTestingModule({
                declarations: [
                    ChooseDeliveryMethodComponent
                ],
                imports: [FormsModule],
                schemas: [NO_ERRORS_SCHEMA],
                providers: [
                    { provide: GenericRepoService, useFactory: () => genericRepo },
                    { provide: ResponseErrorService, useFactory: () => responseErrorService },
                    { provide: UrlPaths, useFactory: () => urlPaths },
                    { provide: ENVIRON_CONFIG, useFactory: () => environmentConfig },
                    { provide: StorefrontService, useFactory: () => storefrontService },
                    { provide: StringUtilsService, useFactory: () => stringUtils }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(ChooseDeliveryMethodComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

    it('should have environmentConfig.tagDeliveryConfig and its children defined', async () => {

        //Act
        await component.ngOnInit();

        //Assert
        expect(environmentConfig.tagDeliveryConfig).toBeDefined();
        expect(environmentConfig.tagDeliveryConfig.AllowDeliveryByMail).toBeDefined();
        expect(environmentConfig.tagDeliveryConfig.AllowPickup).toBeDefined();
        expect(environmentConfig.tagDeliveryConfig.MvuAllowDelivery).toBeDefined();
        expect(environmentConfig.tagDeliveryConfig.MvuAllowPickup).toBeDefined();

    });

    it('should call setDeliveryMethod', async () => {

        //Assemble
        spyOn(component, 'setDeliveryMethod').and.callThrough();

        //Act
        await component.ngOnInit();

        //Assert
        expect(component.setDeliveryMethod).toHaveBeenCalledTimes(1);

    });

    describe('setDeliveryMethod()', () => {
        it('should set deliveryMethod to Store when storeFrontService is defined AND storeFrontService.IsEnabled equals TRUE', async () => {
            //Assemble
            storefrontService.isEnabled = true;

            //Act
            await component.ngOnInit();

            //Assert
            expect(component.deliveryMethod).toBe(DeliveryMethodType.Store);

        });

        it('should set deliveryMethod to Store when AllowDeliveryByMail equals FALSE AND AllowPickup equals TRUE', async () => {
            //Assemble
            environmentConfig.tagDeliveryConfig.AllowDeliveryByMail = false;
            environmentConfig.tagDeliveryConfig.AllowPickup = true;

            //Act
            await component.ngOnInit();

            //Assert
            expect(component.deliveryMethod).toBe(DeliveryMethodType.Store);
        });

        it('should set deliveryMethod to Mail when AllowDeliveryByMail equals TRUE AND AllowPickup equals FALSE', async () => {
            //Assemble
            environmentConfig.tagDeliveryConfig.AllowDeliveryByMail = true;
            environmentConfig.tagDeliveryConfig.AllowPickup = false;

            //Act
            await component.ngOnInit();

            //Assert
            expect(component.deliveryMethod).toBe(DeliveryMethodType.Mail);
        });

        it('should set deliveryMethod to Store when MvuAllowDelivery equals FALSE AND MvuAllowPickup equals TRUE and isMVU is true', async () => {
            //Assemble
            environmentConfig.tagDeliveryConfig.MvuAllowDelivery = false;
            environmentConfig.tagDeliveryConfig.MvuAllowPickup = true;
            component.isMvu = true;

            //Act
            await component.ngOnInit();

            //Assert
            expect(component.deliveryMethod).toBe(DeliveryMethodType.Store);
        });

        it('should set deliveryMethod to Mail when MvuAllowDelivery equals TRUE AND MvuAllowPickup equals FALSE and isMVU is true', async () => {
            //Assemble
            environmentConfig.tagDeliveryConfig.MvuAllowDelivery = true;
            environmentConfig.tagDeliveryConfig.MvuAllowPickup = false;
            component.isMvu = true;

            //Act
            await component.ngOnInit();

            //Assert
            expect(component.deliveryMethod).toBe(DeliveryMethodType.Mail);
        });

        it('should call emit() with component.deliveryMethod', async () => {
            //Assemble
            component.deliveryMethod = 'mail';
            spyOn(component.deliveryMethodChange, 'emit').and.returnValue(null);

            //Act
            component.setDeliveryMethod();

            //Assert
            expect(component.deliveryMethodChange.emit).toHaveBeenCalledTimes(1);
        });
    });

    describe('deliveryMethodChanged()', () => {

        it('should call emit() with component.deliveryMethod', async () => {
            //Assemble
            component.deliveryMethod = 'mail';
            spyOn(component.deliveryMethodChange, 'emit').and.returnValue(null);

            //Act
            component.deliveryMethodChanged();

            //Assert
            expect(component.deliveryMethodChange.emit).toHaveBeenCalledTimes(1);
        });
    });

    describe('populateDeliveryMethodCms()', () => {
        it('should call api.getCmsPageById with correct parameters', async () => {
            //Act
            await component.populateDeliveryMethodCms();

            //Assert
            expect(genericRepo.dataFactory.getCmsPageById).toHaveBeenCalledTimes(1);
            expect(genericRepo.dataFactory.getCmsPageById).toHaveBeenCalledWith(
                {
                    ItemId: urlPaths.deliveryMethodCMS,
                    Fields: 'ShortDescription,LongDescription,Parameters'
                }
            );
        });

    });


});
