import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { PipesModule } from 'pipes/module';
import { StateService, UIRouterGlobals } from '@uirouter/angular';
import { DeliveryMethodComponent } from './delivery-method.component';
import { ReplacementStateService } from 'vehicles/eztag/replacement/services';
import { ReplacementHelperService } from 'vehicles/eztag/replacement/services/helper/helper-service';
import { MailingAddressService } from 'vehicles/shared';
import { IEZTag } from 'vehicles/interfaces';
import { IDeliveryMethodContent } from './model';
import { IState } from 'vehicles/eztag/replacement/services/state/model';

describe('Replacement Delivery Method', () => {

    let fixture: ComponentFixture<DeliveryMethodComponent>;
    let component: DeliveryMethodComponent;
    let form: NgForm;
    let stateServiceSpy: jasmine.SpyObj<StateService>;
    let replacementStateServiceSpy: jasmine.SpyObj<ReplacementStateService>;
    let replacementHelperServiceSpy: jasmine.SpyObj<ReplacementHelperService>;
    let mailingService: jasmine.SpyObj<MailingAddressService>;
    let uiRouterGlobals: UIRouterGlobals;

    beforeEach(async () => {
        stateServiceSpy = jasmine.createSpyObj('state', ['go']);
        replacementStateServiceSpy = jasmine.createSpyObj('replacementStateService', ['getState', 'setState']);
        replacementHelperServiceSpy = jasmine.createSpyObj('helperService', ['cancel']);
        mailingService = jasmine.createSpyObj('mailingService', ['onMailingAddressEdit', 'getMailingAddress']);
        uiRouterGlobals = {
            params: {

            }
        } as UIRouterGlobals;

        await TestBed
            .configureTestingModule({
                declarations: [
                    DeliveryMethodComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [FormsModule, PipesModule],
                providers: [
                    { provide: StateService, useFactory: () => stateServiceSpy },
                    { provide: ReplacementStateService, useFactory: () => replacementStateServiceSpy },
                    { provide: ReplacementHelperService, useFactory: () => replacementHelperServiceSpy },
                    { provide: MailingAddressService, useFactory: () => mailingService },
                    { provide: UIRouterGlobals, useFactory: () => uiRouterGlobals },

                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(DeliveryMethodComponent);
        component = fixture.debugElement.componentInstance;

        const reasons = '[ {\"key\":\"WR\",\"value\":\"Replaced car windshield\"} ]';

        component.cmsContent = {
            reasons,
            summaryTitle: 'test title',
            summaryDescription: 'test desc'

        } as IDeliveryMethodContent;

        form = fixture.debugElement.query(By.directive(NgForm)).references.Form as NgForm;
    });

    it('defines the component', async () => {
        expect(component).toBeDefined();
    });

    it('loads the component and checks if the user has come from the landing page', async () => {
        uiRouterGlobals.params.vehicle = {} as IEZTag;

        await component.ngOnInit();
        expect(component.data.details[0].tags[0]).toEqual(uiRouterGlobals.params.vehicle);
    });

    it('checks if the user has come from the replacement review order step via previous link', async () => {
        replacementStateServiceSpy.getState.and.returnValue({
            replaceTag: {} as IEZTag,
            reason: 'WR'
        } as IState);

        await component.ngOnInit();

        expect(replacementStateServiceSpy.getState).toHaveBeenCalled();
    });

    it('checks the cancel functionality', async () => {
        await component.cancel({});
        expect(replacementHelperServiceSpy.cancel).toHaveBeenCalled();
    });

    it('checks if the user wants to proceed to next step', async () => {

        await component.nextStep({});
        expect(replacementStateServiceSpy.setState).toHaveBeenCalled();
        expect(stateServiceSpy.go).toHaveBeenCalled();
    });

    describe('onMailingAddressEdit', () => {

        it('should call mailingService.onMailingAddressEdit', async () => {

            await component.onMailingAddressEdit('Edit');

            expect(mailingService.onMailingAddressEdit).toHaveBeenCalled();
        });

    });

});
