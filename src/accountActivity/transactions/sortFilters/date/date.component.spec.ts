import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { } from 'jasmine';
import { FilterChangeService } from '../../../services/filter/filter-change.service';
import { FilterDataManager } from '../../../services/filter/filter-data.manager';
import { SortedByDateComponent } from './date.component';
import { OverlayModule } from '@angular/cdk/overlay';

describe('component: SortedByDateComponent', () => {
    let fixture: ComponentFixture<SortedByDateComponent>;
    let component: SortedByDateComponent;
    let service: jasmine.SpyObj<FilterChangeService>;
    let serviceDataManager: jasmine.SpyObj<FilterDataManager>;

    beforeEach(async () => {
        service = jasmine.createSpyObj('FilterChangeService', ['notifyEvent']);
        serviceDataManager = jasmine.createSpyObj('FilterDataManager', ['getDateSortFilterDate']);

        serviceDataManager.getDateSortFilterDate.and.returnValue([{}] as any);

        await TestBed
            .configureTestingModule({
                declarations: [
                    SortedByDateComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [OverlayModule],
                providers: [
                    { provide: FilterDataManager, useFactory: () => serviceDataManager },
                    { provide: FilterChangeService, useFactory: () => service },

                ]
            })
            .compileComponents();
        fixture = TestBed.createComponent(SortedByDateComponent);
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
