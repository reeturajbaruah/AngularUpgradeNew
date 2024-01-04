import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { } from 'jasmine';
import { FilterChangeService } from '../../../services/filter/filter-change.service';
import { FilterDataManager } from '../../../services/filter/filter-data.manager';
import { TransactionsFilterComponent } from './transactionsFilter.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { ISearchTransactionsResponse, ListItems } from 'accountActivity/interfaces';

describe('component: SearchTransactionsComponent', () => {
    let fixture: ComponentFixture<TransactionsFilterComponent>;
    let component: TransactionsFilterComponent;
    let service: jasmine.SpyObj<FilterChangeService>;
    let serviceDataManager: jasmine.SpyObj<FilterDataManager>;

    beforeEach(async () => {
        service = jasmine.createSpyObj('FilterChangeService', ['notifyEvent']);
        serviceDataManager = jasmine.createSpyObj('FilterDataManager', ['getTransactionFilterData']);

        serviceDataManager.getTransactionFilterData.and.returnValue([{}] as any);

        await TestBed
            .configureTestingModule({
                declarations: [
                    TransactionsFilterComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [OverlayModule],
                providers: [
                    { provide: FilterDataManager, useFactory: () => serviceDataManager },
                    { provide: FilterChangeService, useFactory: () => service },

                ]
            })
            .compileComponents();
        fixture = TestBed.createComponent(TransactionsFilterComponent);
        component = fixture.debugElement.componentInstance;


    });

    describe('close', () => {
        it('should call function close', () => {

            component.close();

            expect(component.isOpen).toBe(false);
        });
    });

    describe('notify', () => {
        it('should call function notify', () => {

            component.notify('All Transactions');
            expect(service.notifyEvent).toHaveBeenCalled();

        });
    });

    describe('onChange', () => {
        it('should call function resetValid', () => {

            component.onChange('All Transactions');
            expect(component.isOpen).toBe(false);
        });
    });

    describe('ngOnInit', () => {

        it('should call ngOnInit', () => {
            component.ngOnInit();

            expect(component).toBeTruthy();

        });

    });

});
