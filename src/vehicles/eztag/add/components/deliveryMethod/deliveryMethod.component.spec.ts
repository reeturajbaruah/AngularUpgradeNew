import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { PipesModule } from 'pipes/module';
import { StateDeclaration, StateService } from '@uirouter/angular';
import { AddTagDeliveryMethodComponent } from './deliveryMethod.component';
import { MailingAddressService, VehiclesManagerService } from 'vehicles/shared';
import { AccountService, DialogService } from 'common/services';
import { SiteCoreItem } from 'cms/cms.module';
import { AddTagFrameComponent } from '../frame/frame.component';
import { IDeliveryMethodData } from 'vehicles/interfaces';
import { IMailingInfo } from 'common/models';

describe('AddTagDeliveryMethodComponent', () => {

    let fixture: ComponentFixture<AddTagDeliveryMethodComponent>;
    let component: AddTagDeliveryMethodComponent;
    let form: NgForm;
    let mailingService: jasmine.SpyObj<MailingAddressService>;
    let dialogService: DialogService;
    let stateService: StateService;
    let parent: AddTagFrameComponent;
    let manager: jasmine.SpyObj<VehiclesManagerService>;

    beforeEach(async () => {

        stateService = jasmine.createSpyObj('state', ['go']);
        dialogService = jasmine.createSpyObj('dialogService', ['openSliderCentered', 'openGenericModal']);

        manager = jasmine.createSpyObj('manager',
            ['setDeliveryMethod', 'getDeliveryMethod', 'clearData']);
        mailingService = jasmine.createSpyObj('mailingService', ['onMailingAddressEdit', 'getMailingAddress']);

        parent = jasmine.createSpyObj('parent', ['stateList', 'countryList']);
        

        await TestBed
            .configureTestingModule({
                declarations: [
                    AddTagDeliveryMethodComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [FormsModule, PipesModule],
                providers: [
                    { provide: StateService, useFactory: () => stateService },
                    { provide: AddTagFrameComponent, useFactory: () => parent },
                    { provide: VehiclesManagerService, useFactory: () => manager },
                    { provide: DialogService, useFactory: () => dialogService },
                    { provide: MailingAddressService, useFactory: () => mailingService }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(AddTagDeliveryMethodComponent);
        component = fixture.debugElement.componentInstance;
        component.deliveryMethod = { deliveryMethod: 'By Mail' };
        component.cancellationModal = {} as SiteCoreItem;

        form = fixture.debugElement.query(By.directive(NgForm)).references.Form as NgForm;
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });
    });

    describe('ngOnInit()', () => {
        it('should call manager.getDeliveryMethod', async () => {

            manager.getDeliveryMethod.and.returnValue({ deliveryMethod: 'mail' } as IDeliveryMethodData);
            await component.ngOnInit();

            expect(manager.getDeliveryMethod).toHaveBeenCalledTimes(1);
        });
    });

    describe('nextStep', () => {

        it('should call manager.setDeliveryMethod', async () => {
            const state = {} as StateDeclaration;

            await component.nextStep(state);

            expect(manager.setDeliveryMethod).toHaveBeenCalledTimes(1);
        });

        it('goes to next step', async () => {

            const state = {} as StateDeclaration;

            await component.nextStep(state);

            expect(stateService.go).toHaveBeenCalledWith(state);
        });

    });

    describe('onMailingAddressEdit', () => {

        it('should call mailingService.setMailingAddress with result', async () => {

            await component.onMailingAddressEdit('Edit');

            expect(mailingService.onMailingAddressEdit).toHaveBeenCalled();
        });

    });

    describe('cancel', () => {
        it('calls clearData', async () => {
            (dialogService.openGenericModal as jasmine.Spy).and.returnValue(null);

            await component.cancel({} as StateDeclaration);

            expect(manager.clearData).toHaveBeenCalled();
            expect(stateService.go).toHaveBeenCalled();
        });

        it('doesnt call clearData', async () => {
            (dialogService.openGenericModal as jasmine.Spy).and.returnValue(true);

            await component.cancel({} as StateDeclaration);

            expect(manager.clearData).not.toHaveBeenCalled();
            expect(stateService.go).not.toHaveBeenCalled();
        });
    });

});
