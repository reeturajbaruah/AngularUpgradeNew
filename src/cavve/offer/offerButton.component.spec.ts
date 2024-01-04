import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { OfferButtonComponent } from './offerButton.component';

import { PipesModule } from 'pipes/module';

import { FrameComponent } from '../frame/frame.component';

import { animationStates } from '../constants';
import { ENVIRON_CONFIG } from 'common/upgrades';

describe('CAVVE Offer Button Component', () => {

    let fixture: ComponentFixture<OfferButtonComponent>;
    let component: OfferButtonComponent;
    let parent: FrameComponent;
    let environmentConfig;

    beforeEach(async () => {
        parent = {} as FrameComponent;
        parent.setFrameTitle = jasmine.createSpy('setFrameTitle');
        parent.cmsBaseContent = {
            Title: 'Base Title',
            Step1: '',
            Step2: '',
            Step3: '',
            Step4: '',
            CancelQuestion: '',
            CancelReject: '',
            CancelResolve: ''
        };
        parent.getPlateContainer = jasmine.createSpy('getPlateContainer').and.returnValue({ plate: {} } as any);
        environmentConfig = {
            isMergeMATandVioOn: false
        };
        await TestBed
            .configureTestingModule({
                declarations: [
                    OfferButtonComponent
                ],
                imports: [FormsModule, PipesModule],
                schemas: [NO_ERRORS_SCHEMA],
                providers: [
                    { provide: FrameComponent, useFactory: () => parent },
                    { provide: ENVIRON_CONFIG, useFactory: () => environmentConfig }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(OfferButtonComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

    describe('onInit', () => {
        it('should set inital values', () => {

            //Act
            component.ngOnInit();

            //Assert
            expect(component.paymentSummaryYesCollapsed).toBe(false);
            expect(component.paymentSummaryNoCollapsed).toBe(false);
            expect(component.yesSummary).toBe(animationStates.Open);
            expect(component.noSummary).toBe(animationStates.Open);
            expect(component.isFrp3).toBeFalsy();
        });

    });

    [
        {
            animationYesState: animationStates.Closed,
            isYesCollapsed: true
        },
        {
            animationYesState: animationStates.Open,
            isYesCollapsed: true
        },
        {
            animationYesState: animationStates.Closed,
            isYesCollapsed: false
        },
        {
            animationYesState: animationStates.Open,
            isYesCollapsed: false
        }
    ].forEach(({ animationYesState, isYesCollapsed }) => {
        it(`should toggle yesSummary and paymentSummaryYesCollapsed`, () => {
            //Assemble
            component.yesSummary = animationYesState;
            component.paymentSummaryYesCollapsed = isYesCollapsed;

            //Act
            component.toggleYes();

            //Assert
            expect(component.yesSummary).toBe(animationYesState === animationStates.Closed ? animationStates.Open : animationStates.Closed);
            expect(component.paymentSummaryYesCollapsed).toBe(!isYesCollapsed);
        });
    });

    [
        {
            animationNoState: animationStates.Closed,
            isNoCollapsed: true
        },
        {
            animationNoState: animationStates.Open,
            isNoCollapsed: true
        },
        {
            animationNoState: animationStates.Closed,
            isNoCollapsed: false
        },
        {
            animationNoState: animationStates.Open,
            isNoCollapsed: false
        }
    ].forEach(({ animationNoState, isNoCollapsed }) => {
        it(`should toggle noSummary and paymentSummaryNoCollapsed`, () => {
            //Assemble
            component.noSummary = animationNoState;
            component.paymentSummaryNoCollapsed = isNoCollapsed;

            //Act
            component.toggleNo();

            //Assert
            expect(component.noSummary).toBe(animationNoState === animationStates.Closed ? animationStates.Open : animationStates.Closed);
            expect(component.paymentSummaryNoCollapsed).toBe(!isNoCollapsed);
        });
    });

    ['yes', 'no'].forEach(event => {

        it(`should emit choiceSelectedsChange`, async () => {

            //Assemble
            component.choiceSelected = event;
            spyOn(component.choiceSelectedChange, 'emit').and.returnValue(null);

            //Act
            component.updateValue();

            //Assert
            expect(component.choiceSelectedChange.emit).toHaveBeenCalledTimes(1);
        });
    });

});
