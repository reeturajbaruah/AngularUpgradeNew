import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { StateService } from '@uirouter/angular';
import { TabsComponent } from './tabs.component';
import { AccountActivityService } from '../services';

describe('component: tabsComponent', () => {

    let fixture: ComponentFixture<TabsComponent>;
    let component: TabsComponent;
    let state: StateService;
    let accountActivityService: jasmine.SpyObj<AccountActivityService>;


    beforeEach(async () => {
        state = jasmine.createSpyObj('state', ['go']);
        accountActivityService = jasmine.createSpyObj('accountActivityService', ['showTransactions', 'showYearlySummary', 'showInvoices', 'showStatements','showReceipts']);
        accountActivityService.showTransactions.and.returnValue(true);
        accountActivityService.showYearlySummary.and.returnValue(true);
        accountActivityService.showInvoices.and.returnValue(true);
        accountActivityService.showStatements.and.returnValue(true);
        accountActivityService.showReceipts.and.returnValue(true);
        await TestBed
            .configureTestingModule({
                declarations: [
                    TabsComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [],
                providers: [
                    { provide: StateService, useFactory: () => state },
                    { provide: AccountActivityService, useFactory: () => accountActivityService }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(TabsComponent);
        component = fixture.debugElement.componentInstance;


    });

    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });
    });

    describe('ngOnInit', () => {

        it('should call showInvoices', waitForAsync(() => {

            //Act
            component.ngOnInit().then(() => {
           
            //Assert
            expect(accountActivityService.showInvoices).toHaveBeenCalledTimes(1);

            });
        }));
    });



    it('should call transactionsSelected', waitForAsync(() => {
        component.transactionsSelected().then(() => {
            expect(component.selectedState).toEqual(0);
        });
    }));

    it('should call statementsSelected', waitForAsync(() => {
        component.statementsSelected().then(() => {
            expect(component.selectedState).toEqual(1);
        });
    }));

    it('should call yearlySummarySelected', waitForAsync(() => {
        component.yearlySummarySelected().then(() => {
            expect(component.selectedState).toEqual(2);
        });
    }));

    it('should call receiptsSelected', waitForAsync(() => {
        component.receiptsSelected().then(() => {
            expect(component.selectedState).toEqual(3);
        });
    }));

    it('should call invoicesSelected', waitForAsync(() => {
        component.invoicesSelected().then(() => {
            expect(component.selectedState).toEqual(4);
        });
    }));

});
