import { Component, OnInit, Output, EventEmitter, Input, Inject, ViewChild } from '@angular/core';
import { collapseTrigger } from 'animations/collapse';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { FrameComponent } from '../frame/frame.component';

import { animationStates } from '../constants';
import { IFeeInfo } from '../interfaces';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { PaymentSummaryComponent } from 'cavve/paymentSummary/paymentSummary.component';

@Component({
    selector: 'cavve-offer-button',
    templateUrl: './offerButton.html',
    styleUrls: ['./offerButton.less'],
    animations: [collapseTrigger,
                 trigger('slideYes', [
                  state(animationStates.Open, style({
                    height: '{{height}}'
                  }), {params: {height: '338px'}}),
                  state(animationStates.Closed, style({
                    height: '136px'
                  })),
                  transition('open => closed', animate('100ms ease-in-out')),
                  transition('closed => open', animate('100ms ease-in-out'))
                 ]),
                trigger('slideNo', [
                    state(animationStates.Open, style({
                        height: '{{height}}'
                    }), {params: {height: '288px'}}),
                    state(animationStates.Closed, style({
                        height: '136px'
                    })),
                    transition('open => closed', animate('100ms ease-in-out')),
                    transition('closed => open', animate('100ms ease-in-out'))
                ])]
})
export class OfferButtonComponent implements OnInit {

    public createAccountFromViolationsTotals: IFeeInfo;
    public serviceFee: number;
    public totalViolationsDue: number;
    public totalPaymentDueDontCreateAccount: number;

    public paymentSummaryYesCollapsed: boolean;
    public paymentSummaryNoCollapsed: boolean;

    @Input() choiceSelected = '';
    @Output() choiceSelectedChange: EventEmitter<string> = new EventEmitter<string>();

    public yesSummary: string;
    public noSummary: string;
    public isFrp3: boolean;

    @ViewChild('yesPaymentSummary') yesPaymentSummary: PaymentSummaryComponent;
    
    constructor(
        private parent: FrameComponent,
        @Inject(ENVIRON_CONFIG) public environmentConfig
    ) { }

    ngOnInit() {
        this.createAccountFromViolationsTotals = this.parent.createAccountFromViolationsTotals;
        this.isFrp3 = this.environmentConfig.isMergeMATandVioOn;
        this.paymentSummaryYesCollapsed = false;
        this.paymentSummaryNoCollapsed = false;
        this.yesSummary = animationStates.Open;
        this.noSummary = animationStates.Open;
    }

    toggleYes() {       

        this.yesSummary = this.yesSummary === animationStates.Closed ? animationStates.Open : animationStates.Closed ;
        this.paymentSummaryYesCollapsed = !this.paymentSummaryYesCollapsed;

    }

    toggleNo() {
       
        this.noSummary = this.noSummary === animationStates.Closed ? animationStates.Open : animationStates.Closed ;
        this.paymentSummaryNoCollapsed = !this.paymentSummaryNoCollapsed;

    }

    public updateValue(): void {
        this.choiceSelectedChange.emit(this.choiceSelected);
    }
}
