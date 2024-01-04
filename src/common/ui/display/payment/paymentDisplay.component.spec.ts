import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, KeyValueDiffers } from '@angular/core';
import { PipesModule } from 'pipes/module';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { PaymentDisplayComponent } from './paymentDisplay.component';
import { CmsReplacementService, CmsUtilService } from 'cms/services';
import { changesStable } from 'testing';
import { UrlPaths } from 'constants/module';
import { BillingType } from 'common/models';
import { CreditCardTypeService } from 'common/billing';

describe('directive: compileTemplate', () => {

    let fixture: ComponentFixture<PaymentDisplayComponent>;
    let component: PaymentDisplayComponent;
    let urlPaths: UrlPaths;
    let cmsUtilService: CmsUtilService;
    let creditCardTypeService: jasmine.SpyObj<any>;

    beforeEach(async () => {

        urlPaths = new UrlPaths();
        cmsUtilService = jasmine.createSpyObj('cmsUtilService', ['generateFileSrc']);
        (cmsUtilService.generateFileSrc as jasmine.Spy).and.returnValue('fakeFileSrc');
        creditCardTypeService = jasmine.createSpyObj('creditCardTypeService', ['cardCodeToName']);
        creditCardTypeService.cardCodeToName.and.returnValue('CARDTYPE');

        await TestBed
            .configureTestingModule({
                declarations: [
                    PaymentDisplayComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: CreditCardTypeService, useFactory: () => creditCardTypeService },
                    { provide: UrlPaths, useFactory: () => urlPaths },
                    { provide: CmsUtilService, useFactory: () => cmsUtilService },
                    KeyValueDiffers
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(PaymentDisplayComponent);
        component = fixture.debugElement.componentInstance;

        component.creditCard = {} as any;
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

    describe('ngOnInit', () => {

        it('should call getIconImage()', async () => {
            //Assemble
            spyOn<any>(component, 'getIconImage').and.returnValue('testString');

            //Act
            component.ngOnInit();

            //Assert
            expect(component['getIconImage'] as jasmine.Spy).toHaveBeenCalledTimes(1);
            expect(component.cmsImage).toBe('testString');
        });
    });

    describe('editClicked', () => {
        it('should emit event on click', async () => {
            //Assemble

            spyOn(component.edit, 'emit');
            const sub = component.edit.subscribe();
            component.hideEdit = false;
            component.legacy = true;
            fixture.detectChanges();

            //Act
            const a = fixture.debugElement.nativeElement.querySelector('a');
            a.click();
            fixture.detectChanges();

            //Assert
            expect(component.edit.emit).toHaveBeenCalledTimes(1);

            sub.unsubscribe();
        });
       
    });

    describe('getIconImage', () => {

        it('should return an empty string if icons is null', async () => {
            //Assemble
            component.icons = null as any;

            //Act
            const result = component['getIconImage']();

            //Assert
            expect(result).toBe('');
        });

        it('should call cmsUtilService.generateFileSrc if icons is not null', async () => {
            //Assemble
            component.icons = { Children: [] };

            //Act
            component['getIconImage']();

            //Assert
            expect(cmsUtilService.generateFileSrc).toHaveBeenCalledTimes(1);
        });

        [   { creditCardType: 'Visa', cardCode: 'v' },
            { creditCardType: 'MasterCard', cardCode: 'm' },
            { creditCardType: 'Discover', cardCode: 'd' },
            { creditCardType: 'AMEX', cardCode: 'a'}
        ]
            .forEach(testCase => {

                it(`should call cmsUtilService.generateFileSrc with cardCode of ${testCase.creditCardType}`, async () => {
                    //Assemble
                    component.icons = {
                        Children: [
                            {
                                ItemName: `${testCase.creditCardType}`,
                                Image: `${testCase.creditCardType} Image`
                            }
                        ]
                    };
                    component.billingType = BillingType.Credit;
                    component.creditCard.cardCode = testCase.cardCode;
                    (cmsUtilService.generateFileSrc as jasmine.Spy).and.returnValue(component.icons.Children[0].Image);

                    //Act
                    const result = component['getIconImage']();

                    //Assert
                    expect(cmsUtilService.generateFileSrc).toHaveBeenCalledTimes(1);
                    expect(cmsUtilService.generateFileSrc).toHaveBeenCalledWith(component.icons.Children[0].Image);
                    expect(result).toBe(component.icons.Children[0].Image);
                });
            });

        it('should call cmsUtilService.generateFileSrc with bank', async () => {
            //Assemble
            component.icons = {
                Children: [
                    {
                        ItemName: `Bank`,
                        Image: `Bank Image`
                    }
                ]
            };
            (cmsUtilService.generateFileSrc as jasmine.Spy).and.returnValue(component.icons.Children[0].Image);
            component.billingType = BillingType.Eft;

            //Act
            const result = component['getIconImage']();

            //Assert
            expect(cmsUtilService.generateFileSrc).toHaveBeenCalledTimes(1);
            expect(cmsUtilService.generateFileSrc).toHaveBeenCalledWith(component.icons.Children[0].Image);
            expect(result).toBe(component.icons.Children[0].Image);
        });
    });

    describe('cardExpires', () => {
        it('should combine expMonth and expYear', () => {
            component.creditCard.expMonth = 3;
            component.creditCard.expYear = 9999;

            expect(component.cardExpires).toBe('3/9999');
        });
    });

    describe('name', () => {
        it('gets cc name', () => {
            component.creditCard.nameOnCard = 'test';
            component.billingType = BillingType.Credit;

            expect(component.name).toBe('test');
        });

        it('gets eft name', () => {
            component.bankDetails = { name: 'test' } as any;
            component.billingType = BillingType.Eft;

            expect(component.name).toBe('test');

            component.bankDetails.name = null;
            component.bankDetails.nameOnBankAccount = 'test2';
            expect(component.name).toBe('test2');
        });

        it('gets null name', () => {
            component.billingType = null;

            expect(component.name).toBeNull();
        });
    });

});
