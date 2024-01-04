



import { TestBed } from '@angular/core/testing';
import { ICheckoutPaymentRes } from 'account/create/models/checkout-payment.models';
import { SiteCoreItem } from 'cms/cms.module';
import { CmsReplacementService } from 'cms/services';
import { AddressInfo, BankAccountType, BillingInfo, BillingType, Country, CreditCardDetails, State } from 'common/models';
import { ResponseErrorService } from 'common/services';
import { } from 'jasmine';
import { IReviewOrderCms } from 'shared/models/review-order.model';
import { IEZTag } from 'shared/vehicle-info';
import { ReviewHelper } from './review.helper';

describe('Create Account Review helper Service', () => {

    let reviewHelper: ReviewHelper;
    let cmsReplacementServiceSpy: jasmine.SpyObj<CmsReplacementService>;


    beforeEach(() => {


        cmsReplacementServiceSpy = jasmine.createSpyObj('cmsReplacementService', ['transformTemplate']);


        TestBed.configureTestingModule({
            providers: [
                ReviewHelper,

                { provide: CmsReplacementService, useFactory: () => cmsReplacementServiceSpy },


            ]
        });

        reviewHelper = TestBed.inject(ReviewHelper);
        reviewHelper.cms = {
            pageCms: {} as IReviewOrderCms,
            replenishmentAmtModalCms: {} as SiteCoreItem,
            tagInfoModalCms: {} as SiteCoreItem
        };

    });


    it('gets credit card billing info for eztag user ', async () => {

        const billingInfo = {} as BillingInfo;

        const billingCard = {
            selectedYear: '2013',
            internationalAddress: 'test address'
        };
        const billing = {
            billingTypeDisplay: BillingType.Credit,
            cards: [
                billingCard
            ]

        } as any;

        await reviewHelper.getBillingInfo(billing, billingInfo, [] as State[], [] as Country[], false);

        expect(billingInfo.billingType).toEqual(BillingType.Credit);
        expect(billingInfo.credit).toEqual(billing.cards[0]);

    });

    it('gets bank eft billing info for eztag user ', async () => {

        const billingInfo = {} as BillingInfo;
        const eft = {
            accountTypeDisplay: BankAccountType.Personal,
            accountNumber: '123333',
            nameOnBankAccount: 'test'
        };

        const billing = {
            billingTypeDisplay: BillingType.Eft,
            eft

        } as any;

        await reviewHelper.getBillingInfo(billing, billingInfo, [] as State[], [] as Country[], false);

        expect(billingInfo.billingType).toEqual(BillingType.Eft);
        expect(billingInfo.eft.account2).toEqual(eft.accountNumber);

    });

    it('gets credit card billing info for flexpay user when toggle isAutoReplenishmentEnabled is set to false ', async () => {

        const billingInfo = {} as BillingInfo;

        const billingCard = {
            selectedYear: '2013',
            internationalAddress: 'test address'
        };
        const billing = {
            billingTypeDisplay: BillingType.Credit,
            cards: [
                billingCard
            ]

        } as any;

        await reviewHelper.getBillingInfo(billing, billingInfo, [] as State[], [] as Country[], false);

        expect(billingInfo.billingType).toEqual(BillingType.Credit);
        expect(billingInfo.credit).toEqual(billing.cards[0]);

    });

    it('gets bank eft billing info for flexpay user when toggle isAutoReplenishmentEnabled is set to false ', async () => {

        const billingInfo = {} as BillingInfo;
        const eft = {
            accountTypeDisplay: BankAccountType.Personal,
            accountNumber: '123333',
            nameOnBankAccount: 'test'
        };

        const billing = {
            billingTypeDisplay: BillingType.Eft,
            eft

        } as any;

        await reviewHelper.getBillingInfo(billing, billingInfo, [] as State[], [] as Country[], false);

        expect(billingInfo.billingType).toEqual(BillingType.Eft);
        expect(billingInfo.eft.account2).toEqual(eft.accountNumber);


    });

    it('gets cash billing info for flexpay user when toggle isAutoReplenishmentEnabled is set to true ', async () => {

        const billingInfo = {} as BillingInfo;

        const billingCard = {
            selectedYear: '2013',
            internationalAddress: 'test address'
        };
        const billing = {
            billingTypeDisplay: BillingType.Cash,
            cards: [
                billingCard
            ]

        } as any;

        await reviewHelper.getBillingInfo(billing, billingInfo, [] as State[], [] as Country[], true);

        expect(billingInfo.billingType).toEqual(BillingType.Cash);
        expect(billingInfo.savePaymentStatus).toBeFalse();
        expect(billingInfo.autoReplenishmentStatus).toBeFalse();
    });

    it('gets credit card billing info for flexpay user when toggle isAutoReplenishmentEnabled is set to true and checkbox autoReplinishment is checked ', async () => {

        const billingInfo = {} as BillingInfo;

        const billingCard = {
            selectedYear: '2013',
            internationalAddress: 'test address'
        };
        const billing = {
            billingTypeDisplay: BillingType.Credit,
            cards: [
                billingCard
            ],
            autoReplenishmentStatus: true,
            savePaymentStatus: true

        } as any;

        await reviewHelper.getBillingInfo(billing, billingInfo, [] as State[], [] as Country[], true);

        expect(billingInfo.billingType).toEqual(BillingType.Credit);
        expect(billingInfo.credit).toEqual(billing.cards[0]);
        expect(billingInfo.savePaymentStatus).toBeTrue();
        expect(billingInfo.autoReplenishmentStatus).toBeTrue();

    });

    it('gets bank eft billing info for flexpay user when toggle isAutoReplenishmentEnabled is set to true and checkbox autoReplinishment is checked ', async () => {

        const billingInfo = {} as BillingInfo;
        const eft = {
            accountTypeDisplay: BankAccountType.Personal,
            accountNumber: '123333',
            nameOnBankAccount: 'test'
        };

        const billing = {
            billingTypeDisplay: BillingType.Eft,
            eft,
            autoReplenishmentStatus: true,
            savePaymentStatus: true

        } as any;

        await reviewHelper.getBillingInfo(billing, billingInfo, [] as State[], [] as Country[], true);

        expect(billingInfo.billingType).toEqual(BillingType.Eft);
        expect(billingInfo.eft.account2).toEqual(eft.accountNumber);
        expect(billingInfo.savePaymentStatus).toBeTrue();
        expect(billingInfo.autoReplenishmentStatus).toBeTrue();

    });

    it('gets CC billing info for flexpay user when toggle isAutoReplenishmentEnabled is set to true and checkbox autoReplinishment is unchecked and save payment method is checked ', async () => {


        const billingInfo = {} as BillingInfo;

        const billingCard = {
            selectedYear: '2013',
            internationalAddress: 'test address'
        };
        const billing = {
            billingTypeDisplay: BillingType.Credit,
            cards: [
                billingCard
            ],
            autoReplenishmentStatus: false,
            savePaymentStatus: true

        } as any;

        await reviewHelper.getBillingInfo(billing, billingInfo, [] as State[], [] as Country[], true);

        expect(billingInfo.billingType).toEqual(BillingType.Credit);
        expect(billingInfo.credit).toEqual(billing.cards[0]);
        expect(billingInfo.savePaymentStatus).toBeTrue();
        expect(billingInfo.autoReplenishmentStatus).toBeFalse();

    });

    it('gets CC billing info for flexpay user when toggle isAutoReplenishmentEnabled is set to true and checkbox autoReplinishment is unchecked and save payment method is unchecked ', async () => {

        const billingInfo = {} as BillingInfo;

        const billingCard = {
            selectedYear: '2013',
            internationalAddress: 'test address'
        };
        const billing = {
            billingTypeDisplay: BillingType.Credit,
            cards: [
                billingCard
            ],
            autoReplenishmentStatus: false,
            savePaymentStatus: false,
            credit: {}

        } as any;

        await reviewHelper.getBillingInfo(billing, billingInfo, [] as State[], [] as Country[], true);

        expect(billingInfo.billingType).toEqual(BillingType.Credit);
        expect(billingInfo.savePaymentStatus).toBeFalse();
        expect(billingInfo.autoReplenishmentStatus).toBeFalse();
        expect(billingInfo.credit).toEqual(billing.credit);

    });

    it('gets bank billing info for flexpay user when toggle isAutoReplenishmentEnabled is set to true and checkbox autoReplinishment is unchecked and save payment method is checked ', async () => {

        const billingInfo = {} as BillingInfo;
        const eft = {
            accountTypeDisplay: BankAccountType.Personal,
            accountNumber: '123333',
            nameOnBankAccount: 'test'
        };

        const billing = {
            billingTypeDisplay: BillingType.Eft,
            eft,
            autoReplenishmentStatus: false,
            savePaymentStatus: true

        } as any;

        await reviewHelper.getBillingInfo(billing, billingInfo, [] as State[], [] as Country[], true);

        expect(billingInfo.billingType).toEqual(BillingType.Eft);
        expect(billingInfo.eft.account2).toEqual(eft.accountNumber);
        expect(billingInfo.savePaymentStatus).toBeTrue();
        expect(billingInfo.autoReplenishmentStatus).toBeFalse();


    });

    it('gets bank billing info for flexpay user when toggle isAutoReplenishmentEnabled is set to true and checkbox autoReplinishment is unchecked and save payment method is unchecked ', async () => {

        const billingInfo = {} as BillingInfo;
        const eft = {
            accountTypeDisplay: BankAccountType.Personal,
            accountNumber: '123333',
            nameOnBankAccount: 'test'
        };

        const billing = {
            billingTypeDisplay: BillingType.Eft,
            eft,
            autoReplenishmentStatus: false,
            savePaymentStatus: false

        } as any;

        await reviewHelper.getBillingInfo(billing, billingInfo, [] as State[], [] as Country[], true);

        expect(billingInfo.billingType).toEqual(BillingType.Eft);
        expect(billingInfo.savePaymentStatus).toBeFalse();
        expect(billingInfo.autoReplenishmentStatus).toBeFalse();

    });

    it('gets the payment summary', async () => {
        const totalAmt = 30;
        const res = await reviewHelper.getPaymentSummary({
            depositAmt: 10,
            totalAmt
        } as ICheckoutPaymentRes);

        expect(res.paymentDueInfo.totalAmt).toEqual(totalAmt);
    });


    it('gets the vehicle cart summary for eztag user', async () => {
        const vehicles = [
            {
                licPlate: 'abc'
            },
            {
                licPlate: 'xyz'
            },
        ] as IEZTag[];

        const res = await reviewHelper.getVehiclesCart(vehicles, {
            deleteModalCms: {} as SiteCoreItem,
            editModalCms: {} as SiteCoreItem,
            ezTagsContext: 'test',
            pageCms: {} as IReviewOrderCms
        }, [] as State[], false
        );

        expect(res.details[0].tags[0].tagInfo).toBeUndefined();

    });

    it('gets the vehicle cart summary for flexpay user', async () => {
        const vehicles = [
            {
                licPlate: 'abc'
            },
            {
                licPlate: 'xyz'
            },
        ] as IEZTag[];

        const res = await reviewHelper.getVehiclesCart(vehicles, {
            deleteModalCms: {} as SiteCoreItem,
            editModalCms: {} as SiteCoreItem,
            ezTagsContext: 'test',
            pageCms: {} as IReviewOrderCms
        }, [] as State[], true
        );

        expect(res.details[0].tags[0].tagInfo).toBeDefined();

    });

});
