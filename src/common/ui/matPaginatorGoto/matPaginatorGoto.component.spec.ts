import { } from 'jasmine';

import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

import { MatPaginatorGotoComponent } from './matPaginatorGoto.component';

describe('material paginator goto component', () => {

    let fixture: ComponentFixture<MatPaginatorGotoComponent>;
    let component: MatPaginatorGotoComponent;

    beforeEach(() => {
        TestBed
            .configureTestingModule({
                declarations: [MatPaginatorGotoComponent],
                imports: [FlexLayoutModule],
                providers: []
            })
            .compileComponents();

        fixture = TestBed.createComponent(MatPaginatorGotoComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('paginationChange', () => {
        beforeEach(() => {
            spyOn(component as any, 'updateGoto');
            component.page = jasmine.createSpyObj('page', ['next']);
        });

        it('should set internal values', () => {
            const pageEvent = {
                length: 1,
                pageIndex: 2,
                pageSize: 3
            };

            component.paginationChange(pageEvent);

            expect(component['_length']).toEqual(1);
            expect(component['_pageIndex']).toEqual(2);
            expect(component['_pageSize']).toEqual(3);
        });

        it('should update the goto dropdwon once', () => {
            component.paginationChange({} as PageEvent);
            expect(component['updateGoto']).toHaveBeenCalledTimes(1);
        });

        it('should emit the page event to the next handler', () => {
            const pageEvent = {
                length: 1,
                pageIndex: 2,
                pageSize: 3
            };

            component.paginationChange(pageEvent);

            expect(component.page.next).toHaveBeenCalledWith(pageEvent);
        });
    });

    describe('goToChange', () => {
        beforeEach(() => {
            component.paginator = {} as MatPaginator;
            component.page = jasmine.createSpyObj('page', ['next']);
        });

        it('should set the paginator page index', () => {
            component.goto = 1;

            component.gotoChange();

            expect(component.paginator.pageIndex).toEqual(0);
        });

        it('should emit a new page event to the next handler', () => {
            component.goto = 1;
            component.paginator = {
                length: 1,
                pageSize: 3
            } as MatPaginator;
            spyOn(component, 'paginationChange');

            component.gotoChange();

            expect(component.paginationChange).toHaveBeenCalledWith({
                length: 1,
                pageIndex: 0,
                pageSize: 3
            });
        });
    });

    describe('updateGoto', () => {
        [
            { pageIndexVal: 1, expectedGoto: 2 },
            { pageIndexVal: null, expectedGoto: 1 }
        ].forEach(({ pageIndexVal, expectedGoto }) => {
            it('should set goto value and page numbers array', () => {
                component.pageIndex = pageIndexVal;
                component.length = 10;
                component.pageSize = 3;

                component['updateGoto']();

                expect(component.goto).toEqual(expectedGoto);
                expect(component.pageNumbers).toEqual([1, 2, 3, 4]);
            });
        });
    });
});
