

import { Inject, Component, OnInit, OnDestroy } from '@angular/core';
import { CreditCardDetails } from 'common/models';
import { firstValueFrom, Subject } from 'rxjs';
import { ControlContainer, NgForm } from '@angular/forms';
import { WindowRef } from 'common/providers';
import { wait } from 'common/utilities';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CreditCardStateService } from 'common/ui/credit-card-strategies/services';
import { ICardData } from '../model';
import { CreditCardInputStrategy } from 'common/ui/credit-card-strategies/model';
import { SnapPayIframeStrategyFacadeService } from '../services/facade/snapPayIframe-facade.service';
import { CmsUtilService } from 'cms/services';
import {
    routes as coreUrlPaths
} from 'constants/module';
import { CreditCardTypeService } from 'common/billing';
import { GenericRepoService } from '../../../../../services';

interface IconCms {
    ItemName: string;
    Image: string;
}

interface BillingCardPaymentDetailsCms {
    Children: IconCms[];
}

@Component({
    selector: 'snappay-iframe-strategy',
    templateUrl: './snapPayIframeStrategy.component.html',
    styleUrls: [
        './snapPayIframeStrategy.component.less'
    ],
    viewProviders: [
        { provide: ControlContainer, useExisting: NgForm },
    ]
})
export class SnapPayIframeStrategyComponent implements OnInit, OnDestroy, CreditCardInputStrategy {

    public cmsImage: string;

    frameId: string;
    frameUrl: SafeResourceUrl;
    cardData: ICardData = { token: null, cardType: null };
    isValid$: Subject<boolean> = new Subject<boolean>();
    isReady$: Subject<boolean> = new Subject<boolean>();
    creditCard: CreditCardDetails;

    constructor(
        @Inject(WindowRef) private window: Window,
        private creditCardTypeService: CreditCardTypeService,
        private genericRepoService: GenericRepoService,
        private sanitizer: DomSanitizer,
        private snapPayIframeStrategyFacadeService: SnapPayIframeStrategyFacadeService,
        private creditCardStateService: CreditCardStateService,
        private cmsUtilService: CmsUtilService
    ) {
    }

    ngOnInit() {

        this.init();
        this.setup();
    }

    private init() {
        const state = this.creditCardStateService.getState();
        this.creditCard = state.creditCard;
    }

    iframeLoadedEvent = async () => {
        //hide the element style flash 
        await wait(100);
        this.isReady$.next(true);
    };

    iframePostMessageEvent = async (message) => {
        if (!this.frameId) {
            return;
        }

        const iframe = this.window.document.getElementById(this.frameId) as HTMLIFrameElement;

        if (message.source !== iframe.contentWindow) {
            return;
        }

        const needsHandshakeCheck = message.data.payload ? 'Y' : 'N';

        if (needsHandshakeCheck === 'Y') {
            if (message.data.payload.handler === 'handshake') {
                return;
            }
        }

        const params = new URLSearchParams(message.data);

        this.cardData.token = params.get('token');
        this.cardData.cardType = params.get('brand');

        this.cmsImage = await this.getIconImage(this.cardData.cardType);

        this.isValid$.next(!!this.cardData.token);

    };


    setup = async (): Promise<any> => {

        this.isReady$.next(false);

        if (this.frameId) {
            this.window.removeEventListener('message', this.iframePostMessageEvent);
            this.window.document.getElementById(this.frameId).removeEventListener('load', this.iframeLoadedEvent);
        }

        const response = await (firstValueFrom(
            this.snapPayIframeStrategyFacadeService.getSnapPayIframeData()
        ).catch(r => r));

        const { requestId, url } = response.body;

        this.frameId = `tokenFrame${requestId}`;
        this.frameUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        this.isValid$.next(true);

        await wait(0);

        this.window.addEventListener('message', this.iframePostMessageEvent, { passive: true });
        this.window.document.getElementById(this.frameId).addEventListener('load', this.iframeLoadedEvent, { passive: true });

    };

    update = (): Promise<any> => Promise.resolve();

    submit = async (): Promise<boolean> => this.tokenize();

    tokenize = async (): Promise<boolean> => {

        if (!this.cardData.token) {
            this.isValid$.next(false);
            return false;
        }

        this.creditCard.cardNbr = this.cardData.token.slice(-4);
        this.creditCard.omniToken = this.cardData.token; //todo: this parameter might change when BOS is implemented!
        this.creditCard.cardCode = this.cardData.cardType.slice(0, 1);
        this.creditCard.isNewCard = true;
        this.creditCard.cardTypeDisplay = this.creditCardTypeService.cardCodeToName(this.creditCard.cardCode);

        this.isValid$.next(true);
        return true;
    };


    ngOnDestroy() {
        this.tearDown();
    }

    tearDown = (): void => {
        if (!this.frameId) {
            return;
        }

        this.window.removeEventListener('message', this.iframePostMessageEvent);
        this.frameId = null;
    };

    private getIconImage = async (cardCode: string): Promise<string> => {

        const paymentMethodImagesParent = await this.genericRepoService
            .dataFactory
            .getCmsPageById({
                ItemId: coreUrlPaths.paymentMethodDisplayIcons
            });

        const paymentMethodImages: BillingCardPaymentDetailsCms = JSON.parse(paymentMethodImagesParent.cmsResponse);

        if (!paymentMethodImages) {
            return '';
        }

        const iconDict = paymentMethodImages.Children.reduce((acc, curr) => ({ ...acc, [curr.ItemName]: curr.Image }), {});

        let cardCodeName = '';

        if (cardCode) {
            cardCodeName = cardCode.replace('MC', 'MasterCard').replace('VISA', 'Visa').replace('DISCOVER', 'Discover');
        }

        return this.cmsUtilService.generateFileSrc(iconDict[cardCodeName] || '');

    };

}
