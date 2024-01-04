import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { FrameComponent } from './frame.component';

import { Transition, StateService } from '@uirouter/angular';

import { WebStorageConst } from 'constants/module';
import { StateNames as ViolationStates } from 'violations/constants';
import { webStorageConstants } from 'cavve/constants';
import { WebStorageService } from '../../common/services/webStorageService/webStorage.service';

describe('CAVVE FrameComponent', () => {

    let fixture: ComponentFixture<FrameComponent>;
    let component: FrameComponent;

    let $transition$: Transition;

    let webStorageConst: WebStorageConst;
    let webStorage;
    let violationStates: ViolationStates;
    let state: jasmine.SpyObj<StateService>;

    beforeEach(async () => {
        $transition$ = jasmine.createSpyObj('Transition', ['']);
        state = jasmine.createSpyObj('state', ['go']);
        webStorageConst = new WebStorageConst();
        violationStates = new ViolationStates();
        webStorage = jasmine.createSpyObj('webStorage', ['setKeyValue', 'removeEntry', 'getValue']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    FrameComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                providers: [
                    { provide: Transition, useFactory: () => $transition$ },
                    { provide: WebStorageConst, useValue: webStorageConst },
                    { provide: ViolationStates, useValue: violationStates },
                    { provide: WebStorageService, useFactory: () => webStorage },
                    { provide: StateService, useFactory: () => state }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(FrameComponent);
        component = fixture.debugElement.componentInstance;
        component.cmsBaseContent = {
            Title: 'fakeTitle',
            Step1: 'fakeStep1',
            Step2: 'fakeStep2',
            Step3: 'fakeStep3',
            Step4: 'fakeStep4',
            CancelQuestion: '',
            CancelReject: '',
            CancelResolve: ''
        };
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

    describe('onInit', () => {
        it('should call webStorage.getValue', () => { //can set values from webstorage

            component.ngOnInit();
            expect(webStorage.getValue).toHaveBeenCalledTimes(4);

            expect(webStorage.getValue).toHaveBeenCalledWith(webStorageConstants.uninvoiced);
            expect(webStorage.getValue).toHaveBeenCalledWith(webStorageConstants.createAccountFromViolationsTotals);
            expect(webStorage.getValue).toHaveBeenCalledWith(webStorageConstants.remainingPlateTotalBeforeDiscount);
            expect(webStorage.getValue).toHaveBeenCalledWith(webStorageConstants.serviceFee);

        });

        [
            { createAccountFromViolationsTotals: { fakeProp: 'fakeProp' } },
            { createAccountFromViolationsTotals: null }
        ].forEach(testCase => {
            it(`should set violations data: ${testCase.createAccountFromViolationsTotals}`, () => {
                //Assemble
                (webStorage.getValue as jasmine.Spy).withArgs('uninvoiced').and.returnValue('uninvoiced');
                (webStorage.getValue as jasmine.Spy).withArgs('createAccountFromViolationsTotals')
                    .and.returnValue(testCase.createAccountFromViolationsTotals);
                (webStorage.getValue as jasmine.Spy).withArgs('remainingPlateTotalBeforeDiscount')
                    .and.returnValue('remainingPlateTotalBeforeDiscount');
                (webStorage.getValue as jasmine.Spy).withArgs('serviceFee').and.returnValue('serviceFee');
                //Act
                component.ngOnInit();
                //Assert
                expect(component['violations']).toEqual('uninvoiced');
                expect(component['createAccountFromViolationsTotals']).toEqual(jasmine.objectContaining({
                    totalViolationsDue: 'remainingPlateTotalBeforeDiscount',
                    serviceFee: 'serviceFee'
                }));
            });
        });
    });

    describe('ngOnInit', () => {
        it('should have default values set from construction', () => {
            expect(component.cmsBaseContent.Title).toEqual('fakeTitle');
            expect(component.stepNum).toEqual(0);
        });
    });

    describe('setFrameTitle', () => {
        beforeEach(() => {
            component.cmsBaseContent = {
                Title: 'Test Title',
                Step1: 'Step1 Test',
                Step2: 'Step2 Test',
                Step3: 'Step3 Test',
                Step4: 'Step4 Test',
                CancelQuestion: 'CancelQuestion Test',
                CancelResolve: 'CancelResolve Test',
                CancelReject: 'CancelReject Test',
            };
        });
        it('should set the base tittle', async () => {
            component.setFrameTitle('test');
            expect(component.cmsBaseContent.Title).toEqual('test');
        });
    });

    describe('getPlateContainer', () => {

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
});
