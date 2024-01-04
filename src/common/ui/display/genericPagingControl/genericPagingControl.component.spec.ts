import { } from 'jasmine';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { GenericPagingControlComponent } from './genericPagingControl.component';
import { FormsModule } from '@angular/forms';

describe('new-generic-paging component', () => {

    let fixture: ComponentFixture<GenericPagingControlComponent>;
    let component: GenericPagingControlComponent;

    beforeEach((() => {

        TestBed
            .configureTestingModule({
                declarations: [GenericPagingControlComponent],
                imports: [FormsModule]
            })
            .compileComponents();

        fixture = TestBed.createComponent(GenericPagingControlComponent);
        component = fixture.debugElement.componentInstance;

        //sets thigns in ngOnChanges()
        spyOn(component, 'calculateNumberOfPages').and.returnValue(10);
        spyOn<any>(component, 'getCurrentPage').and.returnValue(['fake arr']);

        component.fullList = [];
        component.visiblePageNumber = 1;
        component.itemsPerPage = 3;

        fixture.detectChanges();
    }));

    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });
    });
    describe('ngOnInit', () => {
        it('should set the variables correctly', () => {
            //Assemble
            component.fullList = ['a', 'b', 'c', 'd'];
            (component.calculateNumberOfPages as jasmine.Spy).and.callThrough();
            spyOn(component, 'setVisiblePageNumber').and.callFake(() => { });

            //Act
            component.ngOnInit();

            //Assert
            expect(component.totalItems).toBe(4);
            expect(component.numberOfPages).toBe(2);
            expect(component.setVisiblePageNumber).toHaveBeenCalledTimes(1);
            expect(component.setVisiblePageNumber).toHaveBeenCalledWith(1);

        });

    });

    describe('onPageNumberEntered', () => {


        [
            { event: -100, functionParam: 1 },
            { event: -20, functionParam: 1 },
            { event: 2, functionParam: 2 },
            { event: 5, functionParam: 5 },
            //functionParam should be numberOfPages - 1. numberOfPage is set as 10 in beforeEach() via calculateNumberOfPages() spy
            { event: 20, functionParam: 9 },
            //functionParam should be numberOfPages - 1. numberOfPage is set as 10 in beforeEach() via calculateNumberOfPages() spy
            { event: 100, functionParam: 9 }
        ].forEach(({ event, functionParam }) => {

            it(`should call setVisiblePageNumber() with ${functionParam} if event is ${event}`, () => {
                //Assemble
                spyOn(component, 'onPageNumberEntered').and.callThrough();
                spyOn(component, 'setVisiblePageNumber').and.callFake(() => { }); 

                //Act
                //component.ngOnInit();
                component.onPageNumberEntered(event);

                //Assert
                expect(component.onPageNumberEntered).toHaveBeenCalledTimes(1);
                expect(component.setVisiblePageNumber).toHaveBeenCalledWith(functionParam);
            });
        });

        [
            { event: 0 },
            { event: null }
        ].forEach(({ event }) => {
            it(`should not call setVisiblePageNumber() if event is ${event}`, () => {
                //Assemble
                spyOn(component, 'onPageNumberEntered').and.callThrough();
                spyOn(component, 'setVisiblePageNumber').and.returnValue();

                //Act
                //component.ngOnInit();
                component.onPageNumberEntered(event);

                //Assert
                expect(component.setVisiblePageNumber).toHaveBeenCalledTimes(0);
            });
        });
    });
    describe('onBackAll', () => {
        it(`should call setVisiblePageNumber() with 1`, () => {
            //Assemble
            spyOn(component, 'setVisiblePageNumber').and.returnValue();

            //Act
            component.onBackAll();

            //Assert
            expect(component.setVisiblePageNumber).toHaveBeenCalledTimes(1);
            expect(component.setVisiblePageNumber).toHaveBeenCalledWith(1);
        });
    });
    describe('onBack', () => {
        [
            { visiblePageNumber: 0, functionCallTimes: 0 },
            { visiblePageNumber: 1, functionCallTimes: 0 },
            { visiblePageNumber: 2, functionCallTimes: 1 },
            { visiblePageNumber: 3, functionCallTimes: 1 },
            { visiblePageNumber: null, functionCallTimes: 0 }
        ].forEach(({ visiblePageNumber, functionCallTimes }) => {
            it(`should call setVisiblePageNumber() ${functionCallTimes} times with ${visiblePageNumber} - 1 (if called at least once)`,
                () => {
                    //Assemble
                    spyOn(component, 'setVisiblePageNumber').and.returnValue();
                    component.visiblePageNumber = visiblePageNumber;

                    //Act
                    component.onBack();

                    //Assert
                    expect(component.setVisiblePageNumber).toHaveBeenCalledTimes(functionCallTimes);

                    if (functionCallTimes > 0) {
                        expect(component.setVisiblePageNumber).toHaveBeenCalledWith(visiblePageNumber - 1);
                    }
                });
        });
    });
    describe('onForward', () => {
        [
            { visiblePageNumber: 0, numberOfPages: 10, functionCallTimes: 1 },
            { visiblePageNumber: 1, numberOfPages: 10, functionCallTimes: 1 },
            { visiblePageNumber: 2, numberOfPages: 10, functionCallTimes: 1 },
            { visiblePageNumber: 3, numberOfPages: 10, functionCallTimes: 1 },
            { visiblePageNumber: 10, numberOfPages: 10, functionCallTimes: 0 },
            { visiblePageNumber: 11, numberOfPages: 10, functionCallTimes: 0 },
            { visiblePageNumber: 12, numberOfPages: 10, functionCallTimes: 0 },
            { visiblePageNumber: 13, numberOfPages: 10, functionCallTimes: 0 }
        ].forEach(({ visiblePageNumber, numberOfPages, functionCallTimes }) => {
            it(`should call setVisiblePageNumber() ${functionCallTimes} times with ${visiblePageNumber} + 1 (if called at least once)`,
                () => {
                    //Assemble
                    spyOn(component, 'setVisiblePageNumber').and.returnValue();
                    component.numberOfPages = numberOfPages;
                    component.visiblePageNumber = visiblePageNumber;

                    //Act
                    component.onForward();

                    //Assert
                    expect(component.setVisiblePageNumber).toHaveBeenCalledTimes(functionCallTimes);

                    if (functionCallTimes > 0) {
                        expect(component.setVisiblePageNumber).toHaveBeenCalledWith(visiblePageNumber + 1);
                    }
                });
        });
    });
    describe('onForwardAll', () => {
        it(`should call setVisiblePageNumber() with numberOfPages`, () => {
            //Assemble
            spyOn(component, 'setVisiblePageNumber').and.returnValue();

            //Act
            component.onForwardAll();

            //Assert
            expect(component.setVisiblePageNumber).toHaveBeenCalledTimes(1);
            expect(component.setVisiblePageNumber).toHaveBeenCalledWith(component.numberOfPages);
        });
    });
    describe('setVisiblePageNumber', () => {
        [
            { pageNum: 1 },
            { pageNum: 2 },
            { pageNum: 11 },
            { pageNum: 12 },
            { pageNum: 13 },
            { pageNum: 0 }
        ].forEach(({ pageNum }) => {
            it(`should set visiblePageNumber to ${pageNum} and call visiblePageNumberChange.emit() with newly set visiblePageNumber`,
                () => {
                    //Assemble
                    spyOn<any>(component.pageUpdate, 'emit').and.callFake(() => { });
                    component.numberOfPages = pageNum;

                    //Act
                    component.setVisiblePageNumber(pageNum);

                    //Assert
                    expect(component.visiblePageNumber).toBe(pageNum);
                    expect(component.pageUpdate.emit).toHaveBeenCalledTimes(1);
                    expect(component.pageUpdate.emit).toHaveBeenCalledWith(['fake arr']);
                });
        });
    });
    describe('calculateNumberOfPages', () => {
        [
            { totalItems: 10, pageSize: 1, expectedResult: 10 },
            { totalItems: 10, pageSize: 2, expectedResult: 5 },
            { totalItems: 10, pageSize: 11, expectedResult: 1 },
            { totalItems: 10, pageSize: 12, expectedResult: 1 },
            { totalItems: 10, pageSize: 22, expectedResult: 1 },
            { totalItems: 10, pageSize: 3, expectedResult: 4 }
        ].forEach(({ totalItems, pageSize, expectedResult }) => {
            it(`should call return value ${expectedResult} `, () => {
                //Assemble
                (component.calculateNumberOfPages as jasmine.Spy).and.callThrough();

                //Act
                const result = component.calculateNumberOfPages(totalItems, pageSize);

                //Assert
                expect(result).toBe(expectedResult);
            });
        });
    });

    describe('getCurrentPage', () => {
        [
            { someList: ['a', 'b', 'c'], lowerIndex: 1, upperIndex: 2, expectedResult: ['a', 'b'] },
            { someList: ['a', 'b', 'c'], lowerIndex: 2, upperIndex: 3, expectedResult: ['b','c']}
        ].forEach(({ someList, lowerIndex, upperIndex, expectedResult }) => {
            it(`should call return value ${expectedResult} `, () => {
                //Assemble
                (component['getCurrentPage'] as jasmine.Spy).and.callThrough();

                //Act
                const result = component['getCurrentPage'](someList, lowerIndex, upperIndex);

                //Assert
                expect(result).toEqual(expectedResult);
            });
        });
    });

});
