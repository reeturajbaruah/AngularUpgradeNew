import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { } from 'jasmine';
import { CmsUtilService } from '../../../../../../../cms/services';
import { SnapPayDeviceStrategyComponent } from './snapPayDeviceStrategy.component';
import { CreditCardEntryComponent } from '../../../../../form-entry/creditCardEntry/creditCardEntry.component';
import { ENVIRON_CONFIG, WindowRef } from 'common/module';
import { TestingModule } from '../../../../../../../testing';
import { CreditCardTypeService } from '../../../../../../billing';
import { CreditCardHelperService, CreditCardStateService, IState } from '../../../..';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UrlPaths } from '../../../../../../../constants/module';
import { CmsBundler } from '../../../../../../../cms/services/cmsBundler/cmsBundler.service';
import { GenericRepoService, ToasterService } from '../../../../../../services';
import { CreditCardDetails } from '../../../../../../models';
import { SnapPayDeviceStrategyFacadeService } from '../services/facade/snapPayDeviceStrategy-facade.service';
import { FormsModule, NgForm } from '@angular/forms';
import { StorefrontUtilityService } from 'storefront/services/storefrontUtility.service';
import { StorefrontModalService } from 'storefront/services/modal.service';
import { ValidationModule } from 'validation/module';
import { MatFormFieldModule } from '@angular/material/form-field';

describe('component: snap-pay-device', () => {

    let component: SnapPayDeviceStrategyComponent;
    let fixture: ComponentFixture<SnapPayDeviceStrategyComponent>;
    let httpClient: jasmine.SpyObj<HttpClient>;
    let cmsUtilService: jasmine.SpyObj<CmsUtilService>;
    let parent: CreditCardEntryComponent;
    let storefrontUtilityService;
    let creditCardConversionService;
    let urlPaths: UrlPaths;
    let environmentConfig: { [key: string]: any };
    let creditCardTypeService: jasmine.SpyObj<any>;
    let cmsBundlerservice: jasmine.SpyObj<CmsBundler>;
    let toasterService: ToasterService;
    let creditCardHelperServiceSpy: jasmine.SpyObj<CreditCardHelperService>;
    let creditCardStateServiceSpy: jasmine.SpyObj<CreditCardStateService>;

    let storefrontModalServiceSpy: jasmine.SpyObj<StorefrontModalService>;


    let creditCard: CreditCardDetails;
    let snapPayDeviceStrategyFacadeServiceSpy: jasmine.SpyObj<SnapPayDeviceStrategyFacadeService>;
    let form: NgForm;
    let windowRef: jasmine.SpyObj<Window>;
    let genericRepoServiceSpy: any;


    const imageInfo = {
        Title: 'fakeTitle', Image: 'fakeImage',
        Mesage: 'fakeMessage', ShortDescription: 'fake short desc',
        Paramaters: 'fakeParams'
    };

    const session = {
        SessionKey: 'y4uu333'
    };

    beforeEach(async () => {
        form = {} as NgForm;

        creditCard = {
            cardCode: 'CardCode',
            cardNbr: 'cardNumber',
            expYear: 2026,
            expMonth: 10,
            nameOnCard: 'TestName'
        };

        environmentConfig = {
            storefrontConfigs: {
                KioskConfigs: {
                    storefrontUtilityService: { defaultMachineName: 'Machinename' }
                }
            }
        };

        parent = {} as CreditCardEntryComponent;
        storefrontUtilityService = { isRunningAsKiosk: true, machineName: 'Machinename', DefaultMachineName: 'DefaultMachineName', delay: { short: 10, medium: 20, long: 30 } };
        creditCardConversionService = jasmine.createSpyObj('creditCardConversionService', ['convertCodeToString']);
        (creditCardConversionService.convertCodeToString as jasmine.Spy).and.callFake(code => code);

        httpClient = jasmine.createSpyObj('httpClient', ['get', 'post']);
        httpClient.post.and.resolveTo();
        httpClient.get.and.resolveTo();

        windowRef = jasmine.createSpyObj('window', ['clearTimeout', 'setTimeout']);

        cmsUtilService = jasmine.createSpyObj('cmsUtilService', ['generateFileSrc', 'parseAllImageAttributes']);
        cmsUtilService.parseAllImageAttributes.and.returnValue({ image: 'fakeImage', alt: 'fake alt', height: '100', width: '100' });

        urlPaths = new UrlPaths();

        creditCardTypeService = jasmine.createSpyObj('creditCardTypeService', ['cardCodeToName']);
        creditCardTypeService.cardCodeToName.and.returnValue('CARDTYPE');

        cmsBundlerservice = jasmine.createSpyObj('CmsBundler', ['getCmsItemById']);
        toasterService = jasmine.createSpyObj('toasterService', ['show']);

        creditCardHelperServiceSpy = jasmine.createSpyObj('creditCardHelperService', ['maskNumber']);
        creditCardStateServiceSpy = jasmine.createSpyObj('creditCardStateService', ['getState', 'setState']);
        creditCardStateServiceSpy.getState.and.returnValue({ creditCard } as IState);
        snapPayDeviceStrategyFacadeServiceSpy = jasmine.createSpyObj('snapPayDeviceStrategyFacadeService', ['postCreateSession', 'postRequestCard', 'postEndSession','postPinPad']);

        snapPayDeviceStrategyFacadeServiceSpy.postCreateSession.and.resolveTo({
            body: 'test body',
            sessionKey: session.SessionKey
        });

        const cmsResponse = {
            cmsResponse: JSON.stringify(imageInfo)
        };
        const promiseSiteCoreItem = new Promise<any>((resolve) => {
            resolve(cmsResponse);
        });

        cmsBundlerservice.getCmsItemById.and.resolveTo(cmsResponse as any);


        storefrontModalServiceSpy = jasmine.createSpyObj('storefrontModalService', ['showCreditCardPrompt']);

        genericRepoServiceSpy = {
            dataFactory: {
                getCmsPagesByIds: jasmine.createSpy('getCmsPagesByIds')
            }
        };

        await TestBed
            .overrideComponent(SnapPayDeviceStrategyComponent, {
                set: {
                    providers: [
                        NgForm
                    ]
                }
            });

        await TestBed.configureTestingModule({
            declarations: [SnapPayDeviceStrategyComponent],
            imports: [FormsModule, ValidationModule, TestingModule, MatFormFieldModule],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
                { provide: CreditCardEntryComponent, useFactory: () => parent },
                { provide: StorefrontUtilityService, useFactory: () => storefrontUtilityService },
                { provide: HttpClient, useFactory: () => httpClient },
                { provide: CmsUtilService, useFactory: () => cmsUtilService },
                { provide: WindowRef, useFactory: () => windowRef },
                { provide: UrlPaths, useFactory: () => urlPaths },
                { provide: ENVIRON_CONFIG, useFactory: () => environmentConfig },
                { provide: CreditCardTypeService, useFactory: () => creditCardTypeService },
                { provide: CmsBundler, useFactory: () => cmsBundlerservice },
                { provide: ToasterService, useFactory: () => toasterService },
                { provide: CreditCardHelperService, useFactory: () => creditCardHelperServiceSpy },
                { provide: CreditCardStateService, useFactory: () => creditCardStateServiceSpy },
                { provide: SnapPayDeviceStrategyFacadeService, useFactory: () => snapPayDeviceStrategyFacadeServiceSpy },
                { provide: StorefrontModalService, useFactory: () => storefrontModalServiceSpy },
                { provide: GenericRepoService, useValue: genericRepoServiceSpy },


            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SnapPayDeviceStrategyComponent);
        component = fixture.debugElement.componentInstance;
        spyOn(component, 'onCardNumberChange');
        fixture.detectChanges();
    });

    it('should component is created', () => {
        expect(component).toBeDefined();
    });

    it('tests method tokenizeCard for rejections', async () => {
        component.isActive = false;
        const promise = component['tokenizeCard']();

        promise.catch(err => {
            expect(component['inUse']).toBeFalse();
            expect(toasterService.show).toHaveBeenCalled();
        }
        );
       
    });

    it('tests method tokenizeCard for rejections ', async () => {
        component['inUse'] = true;
        component.isActive = true;
        const promise = component['tokenizeCard']();

   
        promise.then(
            null,
            err => expect(component['inUse']).toBeTrue()
        );


    });

    it('tests method tokenizeCard for rejections ', async () => {
        component['inUse'] = false;
        component.isActive = true;

        genericRepoServiceSpy.dataFactory.getCmsPagesByIds.and.resolveTo({
            responses: [
                { cmsResponse: '{ "test1": "test1"} ' },
                { cmsResponse: '{ "test2": "test2"} ' }

            ]
        });

        storefrontModalServiceSpy.showCreditCardPrompt.and.resolveTo('close');

        snapPayDeviceStrategyFacadeServiceSpy.postRequestCard.and.resolveTo({
            ok: false
        });

        const promise = component['tokenizeCard']();

        promise.then(null,
            err => {
                expect(component['inUse']).toBeFalse();
                expect(genericRepoServiceSpy.dataFactory.getCmsPagesByIds).toHaveBeenCalled();
                expect(storefrontModalServiceSpy.showCreditCardPrompt).toHaveBeenCalled();
                expect(snapPayDeviceStrategyFacadeServiceSpy.postRequestCard).toHaveBeenCalled();
                expect(windowRef.clearTimeout).not.toHaveBeenCalled();
            });




    });

    it('tests method tokenizeCard for success ', async () => {
        component['inUse'] = true;
        component.isActive = true;

        genericRepoServiceSpy.dataFactory.getCmsPagesByIds.and.resolveTo({
            responses: [
                { cmsResponse: '{ "test1": "test1"} ' },
                { cmsResponse: '{ "test2": "test2"} ' }

            ]
        });

        storefrontModalServiceSpy.showCreditCardPrompt.and.resolveTo('close');

        snapPayDeviceStrategyFacadeServiceSpy.postRequestCard.and.resolveTo({
            ok: true,
            body: {
                name: 'name',
                token: 'token',
                expiry: 'expiry',
                errorCode: 'errorCode',
                errors: 'errors',
                cardCode: 'cardCode'
            }
        });

        const promise = component['tokenizeCard']();

        promise.then(result => {
            expect(result).toBeFalse();
            expect(genericRepoServiceSpy.dataFactory.getCmsPagesByIds).toHaveBeenCalled();
            expect(storefrontModalServiceSpy.showCreditCardPrompt).toHaveBeenCalled();
            expect(snapPayDeviceStrategyFacadeServiceSpy.postRequestCard).toHaveBeenCalled();
            expect(windowRef.clearTimeout).not.toHaveBeenCalled();
        }

        );





    });

    it('tests tearDown', async () => {
        snapPayDeviceStrategyFacadeServiceSpy.postEndSession.and.resolveTo({});
        await component.tearDown();
        expect(component['sessionKey']).toBeNull();
    });

    it('tests method tokenizeCard for success and error codes ', async () => {
        component['inUse'] = true;
        component.isActive = true;

        genericRepoServiceSpy.dataFactory.getCmsPagesByIds.and.resolveTo({
            responses: [
                { cmsResponse: '{ "test1": "test1"} ' },
                { cmsResponse: '{ "test2": "test2"} ' }

            ]
        });

        storefrontModalServiceSpy.showCreditCardPrompt.and.resolveTo('close');

        snapPayDeviceStrategyFacadeServiceSpy.postRequestCard.and.resolveTo({
            ok: 1,
            body: {
                name: 'name',
                token: 'token',
                expiry: 'expiry',
                errorCode: '8',
                errors: 'errors',
                cardCode: 'cardCode'
            }
        });

        const promise = component['tokenizeCard']();

        promise.then(result => {
            expect(result).toBeFalse();
            expect(genericRepoServiceSpy.dataFactory.getCmsPagesByIds).toHaveBeenCalled();
            expect(storefrontModalServiceSpy.showCreditCardPrompt).toHaveBeenCalled();
            expect(snapPayDeviceStrategyFacadeServiceSpy.postRequestCard).toHaveBeenCalled();
            expect(windowRef.clearTimeout).toHaveBeenCalled();
        }

        );




    });

    it('tests method tokenizePinPad for success ', async () => {
        component['inUse'] = false;
        component.isActive = true;

        genericRepoServiceSpy.dataFactory.getCmsPagesByIds.and.resolveTo({
            responses: [
                { cmsResponse: '{ "test1": "test1"} ' },
                { cmsResponse: '{ "test2": "test2"} ' }

            ]
        });

        storefrontModalServiceSpy.showCreditCardPrompt.and.resolveTo('close');

        snapPayDeviceStrategyFacadeServiceSpy.postPinPad.and.resolveTo({
            ok: true
        });

        const promise = component['tokenizeCard']();

        promise.then(null,
            err => {
                expect(component['inUse']).toBeFalse();
                expect(genericRepoServiceSpy.dataFactory.getCmsPagesByIds).toHaveBeenCalled();
                expect(storefrontModalServiceSpy.showCreditCardPrompt).toHaveBeenCalled();
                expect(snapPayDeviceStrategyFacadeServiceSpy.postPinPad).toHaveBeenCalled();
                expect(windowRef.clearTimeout).not.toHaveBeenCalled();
            });




    });

});

