import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { } from 'jasmine';
import { FilterChangeService } from '../../../services/filter/filter-change.service';
import { DateRangeFilterComponent } from './dateRangeFilter.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { FilterService } from 'accountActivity/services/filter/filter.service';
import { EventType, FilterName } from 'accountActivity/transactions/transactions.interfaces';
import { Subject } from 'rxjs';
import { DateRange as DateRangeType } from '@angular/material/datepicker';

describe('component: SearchTransactionsComponent', () => {
    let fixture: ComponentFixture<DateRangeFilterComponent>;
    let component: DateRangeFilterComponent;
    let service: jasmine.SpyObj<FilterChangeService>;
    let serviceFilter: jasmine.SpyObj<FilterService>;

    let environmentConfig: {
        accountActivityMaxDaysInSearch: number;
    };

    const listenToFiltersSubj = new Subject<any>();

    beforeEach(async () => {
        service = jasmine.createSpyObj('service', ['listenToFilters','notifyEvent','pipe','subscribe']);

        serviceFilter = jasmine.createSpyObj('serviceFilter', ['getFilters']);
        serviceFilter.getFilters.and.returnValue({filteredBy:[
            {
                name: FilterName.DateRange,
                type: {},
                order: 0,
                defaultVal: {
                    start: new Date(),
                    end: new Date()
                }
            }
        ], sortedBy:[]} as any);
        service.listenToFilters.and.returnValue(listenToFiltersSubj);
      
        environmentConfig = { accountActivityMaxDaysInSearch: 90 };


        await TestBed
            .configureTestingModule({
                declarations: [
                    DateRangeFilterComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [OverlayModule],
                providers: [
                    { provide: FilterChangeService, useFactory: () => service },
                    { provide: ENVIRON_CONFIG, useFactory: () => environmentConfig },
                    { provide: FilterService, useFactory: () => serviceFilter }

                ]
            })
            .compileComponents();
        fixture = TestBed.createComponent(DateRangeFilterComponent);
        component = fixture.debugElement.componentInstance;


    });


    describe('ngOnDestroy', () => {

        it('should unsubscribe ', () => {

            component['unsubscribe'] = jasmine.createSpyObj('subscription', ['unsubscribe']) as any;

            component.ngOnDestroy();

            expect(component['unsubscribe'].unsubscribe).toHaveBeenCalledTimes(1);
        });
    });

    describe('notify', () => {
        it('should call function notify', () => {
            
            const date: any = ({ start: new Date('2022-04-01T05:00:00.000Z'), end: new Date('2022-04-12T05:00:00.000Z') });            
            
            component.notify(date);
            expect(service.notifyEvent).toHaveBeenCalled();

        });
    });

    describe('ngOnInit', () => {

        it('should call ngOnInit', waitForAsync(() => {
            component.ngOnInit().then(() => {
                listenToFiltersSubj.next({
                    name: FilterName.DateRange,
                    value: new DateRangeType<Date>(new Date(), new Date()),
                    eventType: EventType.Filter
                });
                expect(component).toBeTruthy();
            });
        }));

    });
    

});
