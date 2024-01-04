import { } from 'jasmine';

import { NO_ERRORS_SCHEMA } from '@angular/core';

import { TestBed, ComponentFixture } from '@angular/core/testing';
import { PaymentDetailsComponent, InjectedData } from './paymentDetails.component';
import { StateService } from '@uirouter/angular';

import { CommonModule as HctraCommonModule } from 'common/module';
import { PipesModule } from 'pipes/module';

import { PaymentPlanInfo } from '../services';

import { DateWithTimeZoneService, DialogRef, DownloadService } from 'common/services';

import { OperatingSystemSnifferService } from 'common/services';

describe('PaymentDetailsComponent', () => {

    let fileDownload: any;
    let $state: any;
    let storefrontUtilityService: any;
    let operatingSystemSniffer: any;
    let dateWithTimeZoneService: any;

    let dialogRef: DialogRef<InjectedData>;
    const cmsContent = {
        pdf: {
            pdfDownloadedMessage: 'pdfDownloadedMessage',
            pdfError: 'pdfError',
            pdfProcessingMesssage: 'pdfProcessingMesssage',
            pdfDownloadText: ''
        },
        data: {
            balanceDueText: '',
            balanceToolTip: '',
            defaultedBody: '',
            defaultedTitle: '',
            infoIcon: '',
            paidAmmountText: '',
            paymentPlanTerms: '',
            paymentPlanTermsLink: '',
            settlementAmmountText: '',
            planActiveTitle: '',
            planInactiveTitle: '',
            activePlanToolTipdecription: '',
            paymentLateText: '',
            paymentLatePopup: ''          
        }
    };

    let fixture: ComponentFixture<PaymentDetailsComponent>;
    let component: PaymentDetailsComponent;

    const defaultDetails: PaymentPlanInfo = {
        agency: '',
        mobileAgency: 'h',
        balanceAmount: 0,
       
        discountAmount: 0,
        billingMethod: {
            creditCardPaymentMethod: null,
            eftPaymentMethod: null,
            address: null
        },
        isSelected: null,
        nextInstallmentAmount: 0,
        nextInstallmentDate: '',
        nextUpcomingInstallmentDate: '',
        paidAmount: 0,
        paymentPlanId: 0,
        settlementAmount: 0,
        status: ''
    };

    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    async function setup(injectDialogRef: boolean): Promise<any> {

        fileDownload = jasmine.createSpyObj('fileDownload', ['download']);
        $state = jasmine.createSpyObj('$state', ['go']);
        operatingSystemSniffer = jasmine.createSpyObj('operatingSystemSniffer', ['isDesktopOs']);
        dateWithTimeZoneService = jasmine.createSpyObj('DateWithTimeZoneService', ['withoutOffsetToCentral']);
        dialogRef = jasmine.createSpyObj('dialogRef', ['close']);
        
        
        storefrontUtilityService = {};

        if (injectDialogRef) {
            (dialogRef as any).data = {
                cmsContent,
                isEzTagFlow: false,
                details: {

                }
            } as InjectedData;
        }

        await TestBed
            .configureTestingModule({
                declarations: [PaymentDetailsComponent],
                imports: [HctraCommonModule, PipesModule],
                providers: [
                    { provide: DownloadService, useFactory: () => fileDownload },
                    { provide: StateService, useFactory: () => $state },
                    { provide: OperatingSystemSnifferService, useFactory: () => operatingSystemSniffer },
                    { provide: DateWithTimeZoneService, useFactory: () => dateWithTimeZoneService },
                    {
                        provide: DialogRef, useFactory: () => {
                            if (injectDialogRef) {
                                return dialogRef;                                
                            }
                        }
                    }
                ],
                //this will allow for nested components to be ignored. 
                //use when you don't need to interact with the sub component in the tests
                schemas: [NO_ERRORS_SCHEMA]
            })
            .compileComponents();

        fixture = TestBed.createComponent(PaymentDetailsComponent);
        component = fixture.debugElement.componentInstance;
        if (!injectDialogRef) {
            component.cmsContent = cmsContent;
        }
    }

    describe('dialogRef not injected', () => {
        beforeEach(async () => {
            await setup(false);
        });

        it('should have dialogRef data as falsy', () => {
            expect(component.details).toBeFalsy();
        });

        it('should create the component', () => {
            expect(component).toBeTruthy();
        });

        it('can know if it is running on desktop', () => {
            operatingSystemSniffer.isDesktopOs.and.returnValue(true);
            expect(component.isFullsite).toBeTruthy();
        });

        it('can know if it is running on desktop', () => {
            operatingSystemSniffer.isDesktopOs.and.returnValue(false);
            expect(component.isFullsite).toBeFalsy();
        });

        it('can calculate the completed progress from the payment plan details', () => {
            component.details = Object.assign({}, defaultDetails, {
                paidAmount: 100,
                settlementAmount: 300
            });

            expect(component.progress).toBe(33);
        });

        it('can determine if payment is past due', () => {
            component.details = Object.assign({}, defaultDetails, {
                nextInstallmentDate: '2018-1-1',
                nextInstallmentAmount: 100
            });

            expect(component.isPastDue).toBeTruthy();
        });

        it('return FALSE for empty detail', () => {
            component.details = null;

            expect(component.isPastDue).toBe(false);
        });

        it('can determine if payment is not past due', () => {
            component.details = Object.assign({}, defaultDetails, {
                nextInstallmentDate: ((new Date()).getFullYear() + 1) + '-1-1'
            });

            expect(component.isPastDue).toBeFalsy();
        });

        it('can format the due date (CDT)', () => {
            component.details = Object.assign({}, defaultDetails, {
                nextInstallmentDate: '2019-10-28T23:59:59'
            });

            dateWithTimeZoneService.withoutOffsetToCentral.and.returnValue('argument');
            expect(component.formattedDueDate).toBe('argument');
            expect(dateWithTimeZoneService.withoutOffsetToCentral).toHaveBeenCalled();
            expect(dateWithTimeZoneService.withoutOffsetToCentral.calls.argsFor(0)[0]).toBe(component.details.nextInstallmentDate);
        });


        it('can download payment plan PDF in kiosk', () => {
            storefrontUtilityService.isRunningAsKiosk = true;
            component.details = Object.assign({}, defaultDetails, {
                paymentPlanId: 12345
            });
            component.downloadPdf();
            expect(fileDownload.download).toHaveBeenCalled();
        });

        it('can download payment plan PDF in kiosk', () => {
            component.isEzTagFlow = true;
            storefrontUtilityService.isRunningAsKiosk = true;
            component.details = Object.assign({}, defaultDetails, {
                paymentPlanId: 12345
            });
            component.downloadPdf();
            expect(fileDownload.download).toHaveBeenCalled();
        });

        it('return None when detail status is Closed', () => {
            component.details = Object.assign({}, defaultDetails, {
                nextInstallmentDate: '2019-10-28T23:59:59',
                status: 'Closed'
            });
            const result = component.formattedDueDate;
            expect(result).toEqual('None');
        });

        it('return None when detail is null', () => {
            component.details = null;
            const result = component.formattedDueDate;
            expect(result).toEqual('None');
        });

        it('return None when formatDate is invalid', () => {
            component.details = Object.assign({}, defaultDetails, {
                nextInstallmentDate: '2019-10-28T23:59:59'
            });
            (dateWithTimeZoneService.withoutOffsetToCentral as jasmine.Spy).and.returnValue('Invalid date');
            const result = component.formattedDueDate;
            expect(result).toEqual('None');
        });

        describe('checkAutoPay ', () => {

            it('set autoPayInfo with creditCard', () => {
                component.details = Object.assign({}, defaultDetails, {

                    billingMethod: {
                        creditCardPaymentMethod: {
                            cardNbr: '1234567890'
                        },
                        eftPaymentMethod: null
                    }

                } as PaymentPlanInfo);

                const autoPay = component.checkAutoPay();
                expect(autoPay).toEqual({
                    autoPayFlag: true,
                    autoPayData: '****7890'
                });
            });

            it('set autoPayInfo with EFT', () => {
                component.details = Object.assign({}, defaultDetails, {

                    billingMethod: {
                        creditCardPaymentMethod: null,
                        eftPaymentMethod: {
                            accountNumber: 'ABCDEFTH'
                        }
                    },

                } as PaymentPlanInfo);
                const autoPay = component.checkAutoPay();
                expect(autoPay).toEqual({
                    autoPayFlag: true,
                    autoPayData: '****EFTH'
                });
            });

            it('set autoPayInfo with EFT', () => {
                component.details = Object.assign({}, defaultDetails, {

                    billingMethod: {
                        creditCardPaymentMethod: null,
                        eftPaymentMethod: null
                    }

                } as PaymentPlanInfo);

                const autoPay = component.checkAutoPay();
                expect(autoPay).toEqual({
                    autoPayFlag: false,
                    autoPayData: ''
                });
            });
        });
    });

    describe('dialogRef injected', () => {

        beforeEach(async () => {
            await setup(true);
        });


        it('can inject dialog ref into component', () => {
            expect(component.details).toBeTruthy();
        });
    });
});
