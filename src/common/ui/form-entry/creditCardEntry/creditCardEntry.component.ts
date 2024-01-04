import { AfterViewInit, ChangeDetectorRef, Component, ComponentRef, Directive, Inject, Input, OnChanges, OnDestroy, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { ExpirationDateService } from 'common/billing';
import { CreditCardDetails } from 'common/models';
import { ToasterService } from 'common/services';
import { CreditCardInputStrategy } from 'common/ui/credit-card-strategies/model';
import {
    CreditCardHelperService, CreditCardStateService, FactoryResolverService,
    KioskDataService, KioskResolverService, LitelResolverService, SnapPayResolverService,
    StrategeyConfigService, TriposResolverService, VanticResolverService
} from 'common/ui/credit-card-strategies/services';
import { SnapPayIframeStrategyService } from 'common/ui/credit-card-strategies/strategies/snapPay/services/api/snapPayIframe-api.service';
import { SnapPayIframeStrategyFacadeService } from 'common/ui/credit-card-strategies/strategies/snapPay/services/facade/snapPayIframe-facade.service';
import { SnappayKioskResolverService } from 'common/ui/credit-card-strategies/services/resolvers/kiosk/snappay-kiosk-resolver/snappay-kiosk-resolver.service';
import { SnapPayDeviceStrategyService } from '../../credit-card-strategies/strategies/kiosk/snapPayDevice/services/api/snapPayDeviceStrategy-api.service';
import { SnapPayDeviceStrategyFacadeService } from '../../credit-card-strategies/strategies/kiosk/snapPayDevice/services/facade/snapPayDeviceStrategy-facade.service';
import * as moment from 'moment';

@Component({
    selector: 'credit-card-entry',
    templateUrl: './creditCardEntry.html',
    styleUrls: [
        './creditCardEntry.less'
    ],
    viewProviders: [
        { provide: ControlContainer, useExisting: NgForm }
    ],
    providers: [
        CreditCardStateService,
        CreditCardHelperService,
        FactoryResolverService,
        KioskResolverService,
        VanticResolverService,
        TriposResolverService,
        LitelResolverService,
        SnapPayResolverService,
        SnappayKioskResolverService,
        StrategeyConfigService,
        KioskDataService,
        SnapPayIframeStrategyService,
        SnapPayIframeStrategyFacadeService,
        SnapPayDeviceStrategyService,
        SnapPayDeviceStrategyFacadeService
    ]

})
export class CreditCardEntryComponent implements OnInit, AfterViewInit {

    static idSequence = 0;

    @Input() public useExistingCard: boolean;
    @Input() public creditCard: CreditCardDetails = {} as CreditCardDetails;
    @Input() public disableValidation: boolean;

    @Input() public autoUpdate: boolean;

    public nameDisabled = false;
    public expYearDisabled = false;
    public expMonthDisabled = false;

    private id: number;
    nameSuffix: string;

    public yearList: number[];
    public monthsList: string[];

    public showEdit = false;

    public cardNameNumberFlagged = false;

    dynamicStrategy: Type<CreditCardInputStrategy>;

    @ViewChild('viewContainerRef', { read: ViewContainerRef, static: false }) dynamicViewContainer: ViewContainerRef;

    componentRef: ComponentRef<CreditCardInputStrategy>;

    //@host decorator was removed for form due to issue with Ivy. see https://github.com/angular/angular/issues/31539
    constructor(
        public form: NgForm,
        private expirationDateService: ExpirationDateService,
        private toasterService: ToasterService,
        private strategyFatoryResolverService: FactoryResolverService,
        private creditCardStateService: CreditCardStateService,
        private cdr: ChangeDetectorRef
    ) {
        this.id = CreditCardEntryComponent.idSequence++;
        this.monthsList = moment.months();
        this.yearList = this.expirationDateService.getExpirationYearList(null, 20);
    }

    isCardNameNumberValid(): boolean {
        return this.cardNameNumberFlagged || !(/.*\d{5}.*/.test(this.creditCard.nameOnCard));
    }

    get isValidExpirationDate(): boolean {
        return this.expirationDateService.isMonthValid(this.creditCard.expMonth, this.creditCard.expYear)
            && this.expirationDateService.isYearValid(this.creditCard.expYear)
            && !this.disableValidation;
    }

    async ngOnInit() {

        this.nameSuffix = '_entry_' + this.id;

        this.creditCardStateService.setState({
            creditCard: this.creditCard,
            nameSuffix: this.nameSuffix,
            disableValidation: this.disableValidation,
            config: {
                expMonthDisabled: this.expMonthDisabled,
                expYearDisabled: this.expYearDisabled,
                useExistingCard: this.useExistingCard
            }
        });

        if (this.creditCard.cardNbr && this.creditCard.cardCode) {

            this.showEdit = true;
        }
       

    }

    async ngAfterViewInit() {

        
        const resolve = await this.strategyFatoryResolverService.resolve();
        if (resolve) {
            this.dynamicStrategy = resolve.type ? resolve.type : null;

            if (this.dynamicStrategy) {
                this.createComponent();
                if (resolve.data) {
                    this.componentRef.instance.setData(resolve.data);

                }
                this.cdr.detectChanges();
            }
        }
    }

    private createComponent() {
        this.componentRef = this.dynamicViewContainer.createComponent(this.dynamicStrategy);

    }

    async submit(): Promise<boolean> {

        if (!this.isCardNameNumberValid()) {
            this.cardNameNumberFlagged = true;
            this.toasterService.show('Warning', 'Please verify the name on the credit card is correct.');
            return Promise.resolve(false);
        }
        else {
            this.toasterService.removeAll();
        }

        if (this.showEdit) {
            return true;
        }
        else {
            if (!this.dynamicStrategy) {
                return Promise.resolve(false);
            }

            const result = await this.componentRef.instance.submit();
            this.creditCard = this.creditCardStateService.getState().creditCard;

            return result;
        }

    }

    changeEdit() {
        this.showEdit = false;

    }

}
