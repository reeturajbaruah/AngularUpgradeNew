import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { GraphComponent } from './graph.component';
import { TollUsageHistoryComponent } from '../tollUsageHistory.component';

describe('component: graph-component', () => {

    let fixture: ComponentFixture<GraphComponent>;
    let parent: jasmine.SpyObj<any>;
    let component: GraphComponent;

    beforeEach(async () => {

        parent = {} as TollUsageHistoryComponent;
        parent.getGraphData = jasmine.createSpy('getGraphData', () => Promise.resolve());

        await TestBed
            .configureTestingModule({
                declarations: [
                    GraphComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                providers: [
                    { provide: TollUsageHistoryComponent, useFactory: () => parent },
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(GraphComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

    describe('ngOnInit', () => {

        beforeEach(() => {
            spyOn<any>(component, 'populateGraph').and.callFake(() => { });
        });

        it('should not return and call populateGraph 1 time', () => {
            //act
            component['ngOnInit']();

            //assert
            expect(parent['getGraphData']).toHaveBeenCalledTimes(1);
        });

    });

    describe('populateGraph', () => {

        it('options should not be null and formatting functions called', async () => {

            component.xAxisData = ['JAN'];
            component.yAxisData = [10];

            await (component as any).populateGraph();

            expect(component.options).not.toBeNull();

        });

    });

    describe('formatForCurrency', () => {

        it('should correctly format data for currency', async () => {

            const data = 50;

            let formatedData = '';

            formatedData = await (component as any).formatForCurrency(data);

            expect(formatedData).toEqual('$50.00');
        });
    });

    describe('truncateMonth', () => {

        it('should correctly format month names', async () => {

            const data = 'Jan';

            let formatedData = '';

            formatedData = await (component as any).truncateMonth(data);

            expect(formatedData).toEqual('J');
        });
    });

});
