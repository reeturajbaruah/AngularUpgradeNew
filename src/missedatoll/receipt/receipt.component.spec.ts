import { Location } from '@angular/common';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialog } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { StateService, UIRouterGlobals } from '@uirouter/angular';
import { urlPaths as accountDashboardRoutes } from 'accountDashboard/constants';
import { CreditCardTypeService } from 'common/billing';
import { StateConfig } from 'common/interfaces';
import { BankAccountType } from 'common/models';
import { CommonModule as HctraCommonModule } from 'common/module';
import { ResponseErrorService } from 'common/services';
import { WizardTestingProvider } from 'common/ui/wizard/wizard.testUtility';
import { UrlPaths } from 'constants/module';
import { } from 'jasmine';
import { PipesModule } from 'pipes/module';
import { stateNames as violationStates } from 'violations/constants';
import { StateNames as MissedATollStateNames } from '../constants';
import { FrameComponent } from '../frame/frame.component';
import { ViolationInformationDTO } from '../interfaces';
import { MissedATollService } from '../services/missedAToll.service';
import { ReceiptComponent } from './receipt.component';
import { WindowRef } from 'common/providers';

import { CmsReplacementService } from 'cms/services';
import { WebStorageService } from '../../common/services/webStorageService/webStorage.service';
import { StorefrontUtilityService } from '../../storefront/services/storefrontUtility.service';

describe('MAT ReceiptComponent tests', () => {

    let fixture: ComponentFixture<ReceiptComponent>;
    let component: ReceiptComponent;
    let parent: FrameComponent;
    let uiRouterGlobals: UIRouterGlobals;
    let state: StateService;
    let missedATollService: MissedATollService;
    let webStorage;
    let responseErrorService: jasmine.SpyObj<ResponseErrorService>;
    let stateNames: MissedATollStateNames;
    let dialog: jasmine.SpyObj<MatDialog>;
    let creditCardTypeService: jasmine.SpyObj<any>;
    let storefrontUtilityService;
    let location: Location;
    let cmsReplacementService: CmsReplacementService;

    beforeEach(async () => {
        //Parent Mock
        parent = {} as FrameComponent;
        parent.scrollToTop = jasmine.createSpy('scrollToTop', () => Promise.resolve());

        uiRouterGlobals = {
            current: {} as StateConfig,
            params: {
                billingInfo: {
                    eft: {
                        accountType: BankAccountType.Business,
                        routingNumber: '123123',
                        accountNumber: '1111111',
                        name: 'testName'
                    },
                    credit: {
                        cardCode: '123',
                        cardNbr: '1111',
                        expMonth: 1,
                        expYear: 1,
                        nameOnCard: 'Test Name',
                        address1: 'Test 123',
                        city: 'Test City',
                        state: 'Test State',
                        zip: '12345',
                        plus4: '1234',
                        country: 'USA',
                        displayCountry: 'USA',
                        international: false
                    },
                    billingType: 'cred'
                }
            }
        } as any;

        //StateService Mock
        state = jasmine.createSpyObj('state', ['go']);

        missedATollService = jasmine.createSpyObj('missedATollService',
            ['getViolationInformation', 'destroyViolationInformation']);

        (missedATollService.getViolationInformation as jasmine.Spy).and.returnValue({
            formattedViolationData: {
                listOfViolations: {
                    invoices: [{ agencyName: 'test', total: 5.25, data: [{ agencyCode: 'B', amountDue: 4, location: 'X', violationDate: '1/1/2020', violationNumber: 4 }] }],
                    totalInvoices: 1
                },
                grandTotal: 5.25,
                totalAmountDue: 5.25
            },
            state: 'TX',
            licensePlate: 'ABC123',
            serviceFee: 1.5
        } as unknown as ViolationInformationDTO);

        webStorage = jasmine.createSpyObj('webStorage', ['setKeyValue', 'removeEntry', 'getValue']);

        creditCardTypeService = jasmine.createSpyObj('creditCardTypeService', ['cardCodeToName']);
        creditCardTypeService.cardCodeToName.and.returnValue('CARDTYPE');

        responseErrorService = jasmine.createSpyObj('responseErrorService', ['isErrorFree', 'formatErrorMessages']);
        responseErrorService.isErrorFree.and.returnValue(true);
        responseErrorService.formatErrorMessages.and.returnValue(['1', '2']);

        stateNames = new MissedATollStateNames();

        dialog = jasmine.createSpyObj('dialog', ['open']);

        storefrontUtilityService = {};

        location = jasmine.createSpyObj('location', ['go']);

        cmsReplacementService = jasmine.createSpyObj('cmsRepServ', ['getTemplateTransformer']);
        (cmsReplacementService.getTemplateTransformer as jasmine.Spy).and.returnValue(() => '');

        await TestBed
            .configureTestingModule({
                declarations: [
                    ReceiptComponent,
                    Component({ selector: 'storefront-utility', template: '' })(class FakeStoreFrontUtility { isKioskView: false; })
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [
                    PipesModule,
                    FlexLayoutModule,
                    MatDividerModule],
                providers: [
                    { provide: FrameComponent, useFactory: () => parent },
                    { provide: StateService, useFactory: () => state },
                    { provide: UIRouterGlobals, useFactory: () => uiRouterGlobals },
                    { provide: WebStorageService, useFactory: () => webStorage },
                    { provide: ResponseErrorService, useFactory: () => responseErrorService },
                    { provide: MissedATollService, useFactory: () => missedATollService },
                    { provide: MissedATollStateNames, useFactory: () => stateNames },
                    { provide: UrlPaths, useFactory: () => new UrlPaths() },
                    { provide: MatDialog, useFactory: () => dialog },
                    { provide: CreditCardTypeService, useFactory: () => creditCardTypeService },
                    { provide: StorefrontUtilityService, useFactory: () => storefrontUtilityService },
                    { provide: Location, useFactory: () => location },
                    { provide: WindowRef, useFactory: () => ({ print: () => { } }) },
                    { provide: CmsReplacementService, useFactory: () => cmsReplacementService },
                    WizardTestingProvider
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(ReceiptComponent);

        component = fixture.debugElement.componentInstance;
        component.thankYou = { Title: '', LongDescription: '', ShortDescription: '' };
        component.billing = { Title: '', LongDescription: '', ShortDescription: '' };
        component.gotInvoice = { Title: '', LongDescription: '', ShortDescription: '' };
        component.importantInfo = { Title: '', LongDescription: '', ShortDescription: '' };
    });

    it('is a canary test', async () => {
        //Assert
        expect(true).toEqual(true);
    });

    describe('ngOnInit', () => {
        beforeEach(() => {
            spyOnProperty(component as any, 'dateNow', 'get').and.returnValue('fake date' as any);
        });

        it('should set the step number', () => {
            //Act
            component.ngOnInit();

            //Assert
            expect(parent.stepNum).toBe(4);
        });

        it('should not call scrollTo or retrieve MAT violation infomration if billingInfo is null', () => {
            //Assemble
            (uiRouterGlobals.params as any) = { billingInfo: null };
            (missedATollService.getViolationInformation as jasmine.Spy).calls.reset();

            //Act
            component.ngOnInit();

            //Assert
            expect(missedATollService.getViolationInformation).toHaveBeenCalledTimes(0);
            expect(parent.scrollToTop).toHaveBeenCalledTimes(0);
        });

        it('should correctly set longDescriptionParams', async () => {
            //Assemble
            const expectedLongDescriptionParams = {
                current_date: 'fake date',
                total_payment: 5.25
            };

            //Act
            component.ngOnInit();

            //Assert
            expect(component.longDescriptionParams).toEqual(expectedLongDescriptionParams);
        });

        it('should not call showReceiptModal when isRunningAsKiosk is true', () => {
            //Assemble
            storefrontUtilityService.isRunningAsKiosk = true;
            spyOn<any>(component, 'showReceiptModal').and.callFake(() => { });

            //Act
            component.ngOnInit();

            //Assert
            expect(component['showReceiptModal']).toHaveBeenCalledTimes(0);
        });

        it('should call showReceiptModal when isRunningAsKiosk is false', () => {
            //Assemble
            storefrontUtilityService.isRunningAsKiosk = false;
            spyOn<any>(component, 'showReceiptModal').and.callFake(() => { });

            //Act
            component.ngOnInit();

            //Assert
            expect(component['showReceiptModal']).toHaveBeenCalledTimes(1);
        });

        it('should call MAT Landing if billingInfo is null', async () => {
            //Assemble
            (uiRouterGlobals.params as any) = { billingInfo: null };

            //Act
            component.ngOnInit();

            //Assert
            expect(state.go).toHaveBeenCalledWith(stateNames.Landing);
            expect(state.go).toHaveBeenCalledTimes(1);
        });

    });

    describe('payInvoiceClick', () => {

        it('should call state.go', async () => {

            //Act
            await component.payInvoiceClick();

            //Assert
            expect(state.go).toHaveBeenCalledWith(violationStates.Landing);
            expect(state.go).toHaveBeenCalledTimes(1);
        });

    });

    describe('acctOverviewClick', () => {

        it('should call location.go', async () => {

            //Act
            await component.acctOverviewClick();

            //Assert
            expect(location.go).toHaveBeenCalledWith(accountDashboardRoutes.Frame);
            expect(location.go).toHaveBeenCalledTimes(1);
        });
    });

    describe('showReceiptModal', () => {

        it('should call matDialog.open() 1 time', () => {

            //Act
            component['showReceiptModal']();

            //Assert
            expect(dialog.open).toHaveBeenCalledTimes(1);
        });
    });

});
