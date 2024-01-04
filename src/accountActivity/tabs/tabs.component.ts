import { Component, EventEmitter, Input, OnInit, Output, Inject } from '@angular/core';
import { StateService } from '@uirouter/angular';
import { AccountActivityService } from 'accountActivity/services';
import { stateNames } from 'accountActivity/constants';
import { CmsContent } from 'accountActivity/frame/frame.component';

export enum Tab {
    transactions,
    statements,
    yearlySummary,
    receipts,
    invoices
}

@Component({
    selector: 'tabs',
    templateUrl: './tabs.html',
    styleUrls: ['./tabs.less']
})
export class TabsComponent implements OnInit { // 

    constructor(
        private state: StateService,
        private accountActivityService: AccountActivityService
    ) { }

    @Input() selectedState: Tab;
    @Input() cms: CmsContent;

    public Tab = Tab;

    public showTransactionsTab = false;
    public showStatementsTab = false;
    public showYearlySummaryTab = false;
    public showReceiptsTab = false;
    public showInvoicesTab = false;

    async ngOnInit() {
        this.showTransactionsTab = this.accountActivityService.showTransactions();
        this.showStatementsTab = this.accountActivityService.showStatements();
        this.showYearlySummaryTab = this.accountActivityService.showYearlySummary();
        this.showReceiptsTab = this.accountActivityService.showReceipts();
        this.showInvoicesTab = this.accountActivityService.showInvoices();
    }

    public async transactionsSelected() {
        this.selectedState = Tab.transactions;
        await this.state.go(stateNames.accountActivityTransactions);
    }

    public async statementsSelected() {
        this.selectedState = Tab.statements;
        await this.state.go(stateNames.accountActivityStatements);
    }

    public async yearlySummarySelected() {
        this.selectedState = Tab.yearlySummary;
        await this.state.go(stateNames.accountActivityYearly);
    }

    public async receiptsSelected() {
        this.selectedState = Tab.receipts;
        await this.state.go(stateNames.accountActivityReceipts);
    }

    public async invoicesSelected() {
        this.selectedState = Tab.invoices;
        await this.state.go(stateNames.accountActivityInvoices);
    }

}
