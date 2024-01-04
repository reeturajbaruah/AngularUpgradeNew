import { Component, Input } from '@angular/core';

@Component({
    selector: 'balance-summary',
    templateUrl: './balanceSummary.html',
    styleUrls: ['./balanceSummary.less']
})
export class BalanceSummaryComponent {
    constructor() {}

    @Input() balanceRequirement: number;
    @Input() currentBalance: number;
    @Input() replenishmentRequired: number;
}