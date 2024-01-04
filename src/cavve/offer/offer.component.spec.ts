import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { StateService } from '@uirouter/angular';
import { FormsModule } from '@angular/forms';
import { StateConfig } from 'common/interfaces';
import { StateNames as ViolationStates } from 'violations/constants';
import { stateNames as frp3States } from 'frp3/constants';
import { FrameComponent } from '../frame/frame.component';
import { OfferComponent } from './offer.component';
import { ENVIRON_CONFIG } from 'common/upgrades';

describe('CAVVE OfferComponent', () => {

    let fixture: ComponentFixture<OfferComponent>;
    let component: OfferComponent;

    // Injected into the component
    let parent: FrameComponent;
    let stateService: jasmine.SpyObj<StateService>;
    let violationStateNames: ViolationStates;
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

        //StateService Mock
        stateService = jasmine.createSpyObj('state', ['go']);
        violationStateNames = new ViolationStates();
        environmentConfig = {
            isMergeMATandVioOn: false
        };
        await TestBed
            .configureTestingModule({
                declarations: [OfferComponent],
                imports: [FormsModule],
                schemas: [NO_ERRORS_SCHEMA],
                providers: [
                    { provide: FrameComponent, useFactory: () => parent },
                    { provide: StateService, useFactory: () => stateService },
                    { provide: ViolationStates, useFactory: () => violationStateNames },
                    { provide: ENVIRON_CONFIG, useFactory: () => environmentConfig }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(OfferComponent);
        component = fixture.debugElement.componentInstance;

        component.landingPageInfo = {
            Title: 'Title',
            LongDescription: 'Long',
            ShortDescription: 'Short',
            subHeader: 'subheader'
        };

        component.plateContainer = {
            plate: {
                licensePlate: 'ABCD1234',
                licenseState: 'TX',
                discountProgramCode: 0,
                uninvoicedViolations: [],
                invoices: []
            }
        } as any;

    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

    it('can set current title and call parent.getPlateContainer', async () => {

        //Assemble

        component.plateContainer = {
            plate: {
                licensePlate: 'ABCD1234',
                licenseState: 'TX',
                discountProgramCode: 0,
                uninvoicedViolations: [],
                invoices: []
            }
        } as any;

        //Act
        await component.ngOnInit();

        //Assert
        expect(parent.stepNum).toBe(0);
        expect(parent.setFrameTitle).toHaveBeenCalled();
        expect(parent.setFrameTitle).toHaveBeenCalledWith('Title');
        expect(parent.getPlateContainer).toHaveBeenCalledTimes(1);
        expect(parent.getPlateContainer).toHaveBeenCalledWith();
    });


    it('can go to grid state', () => {

        //Assemble
        stateService.go.and.returnValue('FRP' as any);
        spyOn(component, 'goToGridPage').and.callThrough();

        //Act
        const call = component.goToGridPage();

        //Assert
        expect(stateService.go).toHaveBeenCalledTimes(1);
        expect(stateService.go).toHaveBeenCalledWith(violationStateNames.Grid, {}, { custom: { isExplicitlyAllowedTransition: true } });
        expect(call).toBe('FRP' as any);
    });

    it('can go to frp3 grid state', () => {

        //Assemble
        environmentConfig.isMergeMATandVioOn = true;
        stateService.go.and.returnValue('FRP' as any);
        spyOn(component, 'goToGridPage').and.callThrough();

        //Act
        const call = component.goToGridPage();

        //Assert
        expect(stateService.go).toHaveBeenCalledTimes(1);
        expect(stateService.go).toHaveBeenCalledWith(frp3States.Grid, {}, { custom: { isExplicitlyAllowedTransition: true } });
        expect(call).toBe('FRP' as any);
    });

    it('will go down choiceSelected=yes flow for goToNextPage', () => {

        //Assemble
        spyOn(component, 'goToGridPage');
        component.choiceSelected = 'yes';

        const nextState: StateConfig = {
            name: 'test'
        };

        //Act
        component.goToNextPage(nextState);

        //Assert
        expect(stateService.go).toHaveBeenCalledTimes(1);
        expect(component.goToGridPage).toHaveBeenCalledTimes(0);

    });

    it('will go down choiceSelected!=yes flow for goToNextPage', () => {

        //Assemble
        spyOn(component, 'goToGridPage');
        component.choiceSelected = 'no';

        const nextState: StateConfig = {
            name: 'test'
        };

        //Act
        component.goToNextPage(nextState);

        //Assert
        expect(component.goToGridPage).toHaveBeenCalledTimes(1);
        expect(stateService.go).toHaveBeenCalledTimes(0);
    });


    it('previous should call stateService.go', async () => {

        //Assemble
        const prevState: StateConfig = {
            name: 'test'
        };

        //Act
        await component.previous(prevState);

        //Assert
        expect(stateService.go)
            .toHaveBeenCalledWith(prevState, { custom: { isExplicitlyAllowedTransition: true } });
        expect(stateService.go).toHaveBeenCalledTimes(1);
    });

    it('previous should call stateService.go and go to frp3 landing page', async () => {

        //Assemble
        environmentConfig.isMergeMATandVioOn = true;

        const prevState: StateConfig = {
            name: 'test'
        };

        //Act
        await component.previous(prevState);

        //Assert
        expect(stateService.go)
            .toHaveBeenCalledWith(frp3States.Landing, { custom: { isExplicitlyAllowedTransition: true } });
        expect(stateService.go).toHaveBeenCalledTimes(1);
    });

    it('previous should call stateService.go', async () => {

        //Assemble
        const selectedOption = 'yes';

        //Act
        component.onOfferButtonSelectionChanged(selectedOption);

        //Assert
        expect(component.choiceSelected).toBe('yes');
    });
});
