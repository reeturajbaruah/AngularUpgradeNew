import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { PipesModule } from 'pipes/module';
import { UIRouterGlobals, StateService } from '@uirouter/angular';
import { WebStorageConst } from 'constants/module';
import { StateNames as ViolationStates } from '../constants';
import { WindowRef } from 'common/providers';
import { wait } from 'common/utilities';
import { FrameComponent } from './frame.component';
import { WebStorageService } from '../../common/services/webStorageService/webStorage.service';

describe('Violations Frame Component', () => {

    let fixture: ComponentFixture<FrameComponent>;
    let component: FrameComponent;
    let mockWindow: Window;
    let uiRouterGlobals: UIRouterGlobals;
    let state: jasmine.SpyObj<StateService>;
    let webStorageConst: WebStorageConst;
    let webStorage;
    let violationStates: ViolationStates;

    beforeEach(async () => {

        webStorageConst = new WebStorageConst();
        violationStates = new ViolationStates();
        state = jasmine.createSpyObj('state', ['go']);
        webStorage = jasmine.createSpyObj('webStorage', ['setKeyValue', 'removeEntry', 'getValue']);

        mockWindow = jasmine.createSpyObj('window', ['scrollTo']);
        uiRouterGlobals = {
            current: {
                data: {}
            }
        } as any;

        await TestBed
            .configureTestingModule({
                declarations: [
                    FrameComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: UIRouterGlobals, useFactory: () => uiRouterGlobals },
                    { provide: StateService, useFactory: () => state },
                    { provide: WebStorageConst, useValue: webStorageConst },
                    { provide: ViolationStates, useValue: violationStates },
                    { provide: WebStorageService, useFactory: () => webStorage },
                    { provide: WindowRef, useFactory: () => mockWindow }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(FrameComponent);
        component = fixture.debugElement.componentInstance;
        component.cms = {
            Step1: 'step1',
            Step2: 'step2',
            Step3: 'step3',
            Step4: 'step4',
            Title: 'fake title'
        };
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

    describe('default properties', () => {
        it('should default the currentData get() to empty object: null current', async () => {
            uiRouterGlobals.current = undefined;
            expect(component.currentData).toEqual({});
        });
        it('should default the currentData get() to empty object: null data', async () => {
            uiRouterGlobals.current = {
                data: undefined
            };
            expect(component.currentData).toEqual({});
        });
    });

    describe('scrollToTop', () => {

        beforeEach(() => {

            component.isHidden = undefined;
            component['title'] = { nativeElement: jasmine.createSpyObj('nativeElement', ['scrollIntoView']) };
            component['title'].nativeElement.scrollIntoView.and.returnValue(null);
        });

        it('should set isHidden to true', async () => {

            component.scrollToTop();

            expect(component.isHidden).toBe(true);
        });

        it('should set isHidden to true for the first 20ms', async () => {

            component.scrollToTop();

            await wait(19);

            expect(component.isHidden).toBe(true);
        });

        it('should set isHidden to false after 20ms', async () => {

            component.scrollToTop();

            await wait(21);

            expect(component.isHidden).toBe(false);
        });

        it('should not scroll to top for the first 19 ms', async () => {

            component.scrollToTop();

            await wait(19);

            expect(mockWindow.scrollTo).toHaveBeenCalledTimes(0);
        });

        it('should scroll to top after after 21 ms', async () => {

            component.scrollToTop();

            await wait(21);

            expect(mockWindow.scrollTo).toHaveBeenCalledTimes(1);
            expect(mockWindow.scrollTo).toHaveBeenCalledWith(0, 0);
        });
    });

    describe('getPaymentContainer', () => {

        it('should return plate container from webstorage when available', async () => {

            webStorage.getValue.and.returnValue('good value');

            expect(component['getPlateContainer']()).toBe('good value' as any);
            expect(webStorage.getValue).toHaveBeenCalledTimes(1);
            expect(webStorage.getValue).toHaveBeenCalledWith(webStorageConst.enhancedViolationsPlateAndInvoiceData);
        });

        it('should return fake plate container when not available in webstorage', async () => {

            webStorage.getValue.and.returnValue(null);

            expect(component['getPlateContainer']()).toEqual({
                plate: {
                    licensePlate: '',
                    licenseState: '',
                    discountProgramCode: 0,
                    uninvoicedViolations: [],
                    invoices: []
                }
            } as any);
            expect(webStorage.getValue).toHaveBeenCalledTimes(1);
            expect(webStorage.getValue).toHaveBeenCalledWith(webStorageConst.enhancedViolationsPlateAndInvoiceData);
        });

        it('should not call state.go when plate container available', async () => {

            webStorage.getValue.and.returnValue('good value');

            component['getPlateContainer']();

            expect(state.go).toHaveBeenCalledTimes(0);
        });

        it('should call state.go when plage container not available', async () => {

            webStorage.getValue.and.returnValue(null);

            component['getPlateContainer']();

            expect(state.go).toHaveBeenCalledTimes(1);
            expect(state.go).toHaveBeenCalledWith(violationStates.Landing);
        });
    });

    describe('ngOninit', () => {
        it('should set the steps configuration', () => {
            component.ngOnInit();

            expect(component.steps).toBeDefined();
            expect(component.steps.length).toBe(4);
        });
    });
});
