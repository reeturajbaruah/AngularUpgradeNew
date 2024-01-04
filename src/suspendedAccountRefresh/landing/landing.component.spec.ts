import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StateService } from '@uirouter/core';
import { PipesModule } from 'pipes/module';
import { FrameComponent } from 'suspendedAccountRefresh/frame/frame.component';
import { IWithoutViolationsLandingCmsContent, LandingComponent } from './landing.component';
import { CurrentUserService } from 'common/services';

describe('Landing component: suspended without violations', () => {

    let fixture: ComponentFixture<LandingComponent>;
    let component: LandingComponent;
    let frameComponent: FrameComponent;
    let stateService: StateService;
    let currentUserService: CurrentUserService;
    let currentUser: any;

    beforeEach(async () => {
        frameComponent = {} as any;
        stateService = jasmine.createSpyObj('state', ['go']);
        currentUserService = jasmine.createSpyObj('currentUserService', ['getCurrentUser', 'getCurrentUserBalance']);

        (currentUserService.getCurrentUser as jasmine.Spy).and.callFake(()=> currentUser);

        await TestBed
            .configureTestingModule({
                declarations: [
                    LandingComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: StateService, useValue: stateService },
                    { provide: FrameComponent, useFactory: () => frameComponent },
                    { provide: CurrentUserService, useFactory: () => currentUserService }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(LandingComponent);
        component = fixture.debugElement.componentInstance;
    });

    it('should create component', async () => {

        expect(component).toBeDefined();
    });

    describe('ngOnInit', ()=>{
        it('should initialize component', async () => {
            component.cmsContentWithoutViolations = {} as IWithoutViolationsLandingCmsContent;
            component.cmsContentWithoutViolations.Title = 'test title';
            component.cmsContentWithoutViolations.LongDescription = 'test long desc';
    
            await component.ngOnInit();
    
            expect(frameComponent.showStepper).toBeFalse();
            expect(frameComponent.showTitleBanner).toBeTrue();
            expect(component.title).toEqual(component.cmsContentWithoutViolations.Title);
    
        });

        it('handles negative balance', async () => {

            currentUser = {
                currentBalanceObj: {
                    currentBalance: -1
                }
            };

            component.cmsContentWithoutViolations = {
                LongDescription: 'test long'
            } as IWithoutViolationsLandingCmsContent;

            await component.ngOnInit();
            expect(component.content).toContain(component.cmsContentWithoutViolations.LongDescription);
        });

        it('handles positive balance', async () => {

            currentUser = {
                currentBalanceObj: {
                    currentBalance: 1
                }
            };

            component.cmsContentWithoutViolations = {
                ShortDescription: 'test short'
            } as IWithoutViolationsLandingCmsContent;

            (currentUserService.getCurrentUserBalance as jasmine.Spy).and.
                returnValue(40);
            await component.ngOnInit();
            expect(component.content).toContain(component.cmsContentWithoutViolations.ShortDescription);
        });
    });


    it('goes to next step', async () => {
        const state = {} as any;
        await component.goToNextState(state);

        expect(stateService.go).toHaveBeenCalledWith(state);
    });

});
