import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, Component } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { PrintLinkComponent } from './print-link.component';
import { WindowRef } from 'common/providers';
import { PrintHook } from '@angular/flex-layout';
import { noop } from 'rxjs';


describe('ReceiptComponent tests', () => {

    let fixture: ComponentFixture<PrintLinkComponent>;
    let component: PrintLinkComponent;

    let windowMock;
    let printHook: { collectActivations: any; startPrinting: any; stopPrinting: any; deactivations: any };
    let startPrinting;
    let stopPrinting;
    let collectActivations;

    beforeEach(async () => {

        windowMock = jasmine.createSpyObj('window', ['print']);


        startPrinting = jasmine.createSpyObj('startPrinting', ['call']);
        stopPrinting = jasmine.createSpyObj('stopPrinting', ['call']);
        collectActivations = 'fake collect activations';
        printHook = { collectActivations, startPrinting, stopPrinting, deactivations: [] };

        await TestBed
            .configureTestingModule({
                declarations: [
                    PrintLinkComponent,
                    Component({ selector: 'storefront-utility', template: '' })(class FakeStoreFrontUtility { isKioskView: false; })
                ],
                schemas: [NO_ERRORS_SCHEMA],
                providers: [

                    { provide: WindowRef, useFactory: () => windowMock },
                    { provide: PrintHook, useFactory: () => printHook }

                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(PrintLinkComponent);
        component = fixture.debugElement.componentInstance;
    });

    it('is a canary test', async () => {

        expect(true).toEqual(true);
    });

    describe('ngOnInit - msg value not set', () => {

        it('msg should be the default text Print', async () => {
            //Act
            component['ngOnInit']();

            //Assert
            expect(component.msg).toEqual('Print');
        });
    });

    describe('ngOnInit - msg value set', () => {

        beforeEach(() => {
            component.msg = 'test message';
        });

        it('msg should not be the default text Print', async () => {
            //Act
            component['ngOnInit']();

            //Assert
            expect(component.msg).toEqual('test message');
        });

    });

    describe('clickedPrint', () => {

        it('should call window.print() 1 time', () => {
            //Assemble
            windowMock.print.and.callFake(() => { });

            //Act
            component.clickedPrint();

            //Assert
            expect(windowMock.print).toHaveBeenCalledTimes(1);
        });

        it('should reassign printHook.startPrinting, printHook.stopPrinting and printHook.collectActivations', () => {

            //Act
            component.clickedPrint();

            //Assert
            expect(printHook.startPrinting === startPrinting).toBeFalse();
            expect(printHook.stopPrinting === stopPrinting).toBeFalse();
            expect(printHook.collectActivations).toBe(noop);
            expect(startPrinting.call).toHaveBeenCalledTimes(0);
            expect(stopPrinting.call).toHaveBeenCalledTimes(0);
        });
    });

    describe('clickedPrint - reassigned printHook.startPrinting', () => {

        it('should set printHook.deactivations then call original startPrinting', () => {

            //Assemble
            component.clickedPrint();
            startPrinting.call.and.callFake((thisarg, _target) => {
                //this is to make sure original startPrinting is called last
                _target.activatedBreakpoints.push('should not be added to deactivations');
            });
            const target = { activatedBreakpoints: [1, 2, 3] };

            //Act
            printHook.startPrinting(target, 'fake bp list');

            //Assert
            expect(printHook.deactivations).toEqual([1, 2, 3]);
            expect(startPrinting.call).toHaveBeenCalledTimes(1);
            expect(startPrinting.call).toHaveBeenCalledWith(printHook, target, 'fake bp list');
        });

        it('should restore startPrinting, collectActivations then call original stopPrinting then restore original stopPrinting', () => {

            //Assemble
            component.clickedPrint();
            const target = { activatedBreakpoints: [1, 2, 3] };

            //Act
            printHook.stopPrinting(target, 'fake bp list');

            //Assert
            expect(printHook.startPrinting).toBe(startPrinting);
            expect(printHook.stopPrinting).toBe(stopPrinting);
            expect(printHook.collectActivations).toBe(collectActivations);
            expect(stopPrinting.call).toHaveBeenCalledTimes(1);
            expect(stopPrinting.call).toHaveBeenCalledWith(printHook, target);
        });
    });
});
