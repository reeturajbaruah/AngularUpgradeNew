import { Inject, Component, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { CreditCardDetails } from 'common/models';
import { ControlContainer, NgForm } from '@angular/forms';

import { WindowRef } from 'common/providers';
import { VantivEprotectProvider, VantivIFrameService } from '../services/vantivIframe.service';
import { CreditCardHelperService, CreditCardStateService } from '../../../services';
import { CreditCardInputStrategy } from '../../..//model';


declare let EprotectIframeClient: any;

@Component({
    selector: 'vantiv-iframe-strategy',
    templateUrl: './vantivIframeStrategy.html',
    //this ensures each instance of this component has its own instance
    //of VantivIFrameService, isolating themselves.
    providers: [
        VantivEprotectProvider,
        VantivIFrameService
    ],
    viewProviders: [
        { provide: ControlContainer, useExisting: NgForm },

    ]
})
export class VantivIFrameStrategyComponent implements OnInit, OnDestroy, CreditCardInputStrategy {

    public strategyActive = false;
    private iframeRef: HTMLIFrameElement;
    private prefActiveElement: Element;
    private isSubmitting = false;
    public useExistingCard = false;
    private emptyCreditCardCheck: number;
    frameId: string;
    creditCard: CreditCardDetails;
    nameSuffix: string;

    @ViewChild('IframeContainer', { static: false }) iframeContainer: ElementRef;

    //@host decorator was removed for parent due to issue with Ivy. see https://github.com/angular/angular/issues/31539
    constructor(
        @Inject(WindowRef) private window: Window,
        private iFrameService: VantivIFrameService,
        private creditCardStateService: CreditCardStateService,
        private creditCardHelperService: CreditCardHelperService
    ) {
    }


    ngOnInit() {
        this.init();
        this.setup();
    }

    private init() {
        const state = this.creditCardStateService.getState();
        this.creditCard = state.creditCard;
        this.nameSuffix = state.nameSuffix;
        this.frameId = 'payframe' + this.nameSuffix;
    }


    private loadNewIframe = () => {
        //clear all elements first
        const elm = this.iframeContainer.nativeElement as HTMLElement;

        const style = 'vantiviframerefresh';

        elm.innerHTML = '';
        this.iFrameService.loadIFrame(style, '51', this.frameId, this.creditCardHelperService.maskNumber(this.creditCard));
    };


    waitForSelectorToLoad = (selector: () => any): Promise<any> => new Promise<any>((resolve, reject) => {
        const cancelInterval = this.window.setInterval(() => {
            const obj = selector();
            if (obj) {
                this.window.clearInterval(cancelInterval);
                resolve(obj);
            }
        }, 100);
    });

    setup = (): Promise<any> => {
        this.window.clearInterval(this.emptyCreditCardCheck);

        return this.waitForSelectorToLoad(() => this.iframeContainer)
            .then(this.loadNewIframe)
            .then(this.setupIframe);
    };

    private canExistingCardBeUsed = () => this.creditCardHelperService.maskNumber(this.creditCard) &&
        this.iFrameService.isAllEmpty()
            .then((isEmpty) => this.useExistingCard = isEmpty);

    setupIframe = (): Promise<any> => this.waitForSelectorToLoad(() => {
        const elm = this.iframeContainer.nativeElement as HTMLElement;
        return elm.querySelector('iframe');
    })
        .then((iframe: HTMLIFrameElement) => {
            this.iframeRef = iframe;
            this.prefActiveElement = this.window.document.activeElement;

            this.emptyCreditCardCheck = this.window.setInterval(this.canExistingCardBeUsed, 100);
        });

    update = (): Promise<any> => Promise.resolve();

    submit = (): Promise<boolean> => this.tokenize();

    tokenize = async (): Promise<boolean> => {

        if (this.useExistingCard) {
            return true;
        }

        const response = await this.iFrameService.getPaypageRegistrationId();

        this.creditCard.cardNbr = response.lastFour;
        this.creditCard.paypageRegistrationId = response.paypageRegistrationId;
        this.creditCard.cardCode = response.type.slice(0, 1);
        this.creditCard.isNewCard = true;

        this.creditCardStateService.setState({
            creditCard: this.creditCard,
            nameSuffix: this.nameSuffix
        });

        await this.setup();

        return true;
    };

    tearDown = (): void => {
        this.window.clearInterval(this.emptyCreditCardCheck);
    };

    ngOnDestroy() {
        this.tearDown();
    }
}
