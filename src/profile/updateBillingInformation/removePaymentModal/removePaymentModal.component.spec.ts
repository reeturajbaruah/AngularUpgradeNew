import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CmsUtilService } from 'cms/services';
import { CreditCardTypeService } from 'common/billing';
import { DialogService } from 'common/services';
import { PipesModule } from 'pipes/module';
import { createFormWrap } from 'testing/utilities';
import { PaymentMethod } from '../updateBillingInformation.component';
import {
    RemovePaymentModalComponent,
    RemovePaymentModalInjectionValues
} from './removePaymentModal.component';

describe('PaymentSelect Component', () => {
    let fixture: ComponentFixture<RemovePaymentModalComponent>;
    let component: RemovePaymentModalComponent;
    let dialogService: DialogService;
    let form: NgForm;
    let cmsUtilService;
    let dialog: jasmine.SpyObj<MatDialogRef<RemovePaymentModalComponent>>;
    let dialogData: RemovePaymentModalInjectionValues;
    let creditCardTypeService: jasmine.SpyObj<any>;

    beforeEach(async () => {
        dialog = jasmine.createSpyObj('MatDialogRef', ['close']);
        dialogData = {
            cmsContent: {
                Title: '',
                MainContent: '',
                NonPrimaryAcceptBtn: '',
                PrimaryAcceptBtn: '',
                isPrimary: true,
                NewPrimaryContent: '',
                otherMethods: [{
                    billingType: 'CREDIT',
                    credit: {
                        address1: '',
                        cardCode: '',
                        cardNbr: '',
                        city: '',
                        country: '',
                        expMonth: 1,
                        expYear: 2023,
                        nameOnCard: ''

                    },
                    eft: null
                }],
                paymentMethodImages: null,
                CancelBtn: '',
                ConfirmBtn: '',
                isFlexPay: false,
                isOptIn: false,
                isOnlyPayment: false,
                removeFlexPay: ''
            }
        };

        dialogService = jasmine.createSpyObj('dailogService', ['openSliderCentered']);

        cmsUtilService = jasmine.createSpyObj('cmsUtilService', ['generateFileSrc']);
        (cmsUtilService.generateFileSrc as jasmine.Spy).and.returnValue('fakeFileSrc');

        creditCardTypeService = jasmine.createSpyObj('creditCardTypeService', ['cardCodeToName']);
        creditCardTypeService.cardCodeToName.and.returnValue('CARDTYPE');

        await TestBed
            .configureTestingModule({
                declarations: [RemovePaymentModalComponent],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [FormsModule, MatDialogModule, PipesModule],
                providers: [
                    NgForm,
                    { provide: DialogService, useFactory: () => dialogService },
                    { provide: CmsUtilService, useFactory: () => cmsUtilService },
                    { provide: MatDialogRef, useFactory: () => dialog },
                    { provide: MAT_DIALOG_DATA, useFactory: () => dialogData },
                    { provide: CreditCardTypeService, useFactory: () => creditCardTypeService }
                ]
            })
            .compileComponents();

        const construct = await createFormWrap(RemovePaymentModalComponent, () => { });

        fixture = construct.fixture;
        component = construct.component;
        form = construct.form;

    });

    describe('getIconImage', () => {

        it('should return an empty string if icons is null', async () => {
            //Assemble
            component.paymentMethodImages = null as any;

            component.cmsContent.otherMethods[0] = {
                billingType: 'CREDIT'

            } as PaymentMethod;

            //Act
            const result = component['getIconImage'](component.cmsContent.otherMethods[0]);

            //Assert
            expect(result).toBe('');
        });

        it('should call cmsUtilService.generateFileSrc if icons is not null', async () => {
            //Assemble
            component.paymentMethodImages = { Children: [] };

            component.cmsContent.otherMethods[0] = {
                billingType: 'CREDIT',
                credit: {
                    address1: '',
                    cardCode: '',
                    cardNbr: '',
                    city: '',
                    country: '',
                    expMonth: 1,
                    expYear: 2023,
                    nameOnCard: ''

                },
                eft: null

            } as PaymentMethod;

            //Act
            component['getIconImage'](component.cmsContent.otherMethods[0]);

            //Assert
            expect(cmsUtilService.generateFileSrc).toHaveBeenCalledTimes(1);
        });

        [{ creditCardType: 'Visa', cardCode: 'v' },
        { creditCardType: 'MasterCard', cardCode: 'm' },
        { creditCardType: 'Discover', cardCode: 'd' },
        { creditCardType: 'AMEX', cardCode: 'a' }
        ]
            .forEach(testCase => {

                it(`should call cmsUtilService.generateFileSrc with cardCode of ${testCase.creditCardType}`, async () => {
                    //Assemble
                    component.paymentMethodImages = {
                        Children: [
                            {
                                ItemName: `${testCase.creditCardType}`,
                                Image: `${testCase.creditCardType} Image`
                            }
                        ]
                    };

                    component.cmsContent.otherMethods[0] = {
                        billingType: 'CREDIT',
                        credit: {
                            address1: '',
                            cardCode: '',
                            cardNbr: '',
                            city: '',
                            country: '',
                            expMonth: 1,
                            expYear: 2023,
                            nameOnCard: ''

                        },
                        eft: null
                    } as PaymentMethod;

                    component.cmsContent.otherMethods[0].credit.cardCode = testCase.cardCode;
                    (cmsUtilService.generateFileSrc as jasmine.Spy).and.returnValue(component.paymentMethodImages.Children[0].Image);

                    //Act
                    const result = component['getIconImage'](component.cmsContent.otherMethods[0]);

                    //Assert
                    expect(cmsUtilService.generateFileSrc).toHaveBeenCalledTimes(1);
                    expect(cmsUtilService.generateFileSrc).toHaveBeenCalledWith(component.paymentMethodImages.Children[0].Image);
                    expect(result).toBe(component.paymentMethodImages.Children[0].Image);
                });
            });

        it('should call cmsUtilService.generateFileSrc with bank', async () => {
            //Assemble
            component.paymentMethodImages = {
                Children: [
                    {
                        ItemName: 'Bank',
                        Image: 'Bank Image'
                    }
                ]
            };
            (cmsUtilService.generateFileSrc as jasmine.Spy).and.returnValue(component.paymentMethodImages.Children[0].Image);
            component.cmsContent.otherMethods[0] = {
                billingType: 'EFT'
            } as PaymentMethod;

            //Act
            const result = component['getIconImage'](component.cmsContent.otherMethods[0]);

            //Assert
            expect(cmsUtilService.generateFileSrc).toHaveBeenCalledTimes(1);
            expect(cmsUtilService.generateFileSrc).toHaveBeenCalledWith(component.paymentMethodImages.Children[0].Image);
            expect(result).toBe(component.paymentMethodImages.Children[0].Image);
        });
    });

    describe('canary', () => {
        it('should pass', async () => {
            expect(component).toBeDefined();
        });
    });

    describe('acceptButtonClick', () => {

        it('should call dialog.close with results', async () => {

            await component.acceptButtonClick();
            expect(dialog.close).toHaveBeenCalledOnceWith(component.results);
        });
    });

    describe('cancelButtonClick', () => {

        it('should call dialog.close', async () => {

            await component.cancelButtonClick();
            expect(dialog.close).toHaveBeenCalledOnceWith(false);
        });
    });

});
