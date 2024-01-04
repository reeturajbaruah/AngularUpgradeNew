import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { PipesModule } from 'pipes/module';
import { StateService } from '@uirouter/angular';
import { ReplacementStateService } from 'vehicles/eztag/replacement/services';
import { MailingAddressService } from 'vehicles/shared';
import { IState } from 'vehicles/eztag/replacement/services/state/model';
import { ReceiptComponent } from './receipt.component';
import { ReceiptDataHelperService } from 'vehicles/shared/services/receipt-data-helper/receipt-data-helper.service';
import { States as SharedStates } from 'vehicles/shared';
import { StorefrontUtilityService } from '../../../../../storefront/services/storefrontUtility.service';

describe('Replacement Receipt Component', () => {

    let fixture: ComponentFixture<ReceiptComponent>;
    let component: ReceiptComponent;
    let stateServiceSpy: jasmine.SpyObj<StateService>;
    let replacementStateServiceSpy: jasmine.SpyObj<ReplacementStateService>;
    let receiptDataHelperServiceSpy: jasmine.SpyObj<ReceiptDataHelperService>;
    let storefrontUtilityService: jasmine.SpyObj<any>;
    let mailingService: jasmine.SpyObj<MailingAddressService>;


    beforeEach(async () => {
        stateServiceSpy = jasmine.createSpyObj('state', ['go']);
        replacementStateServiceSpy = jasmine.createSpyObj('replacementStateService', ['getState', 'setState']);
        receiptDataHelperServiceSpy = jasmine.createSpyObj('receiptDataHelper', ['getData']);
        mailingService = jasmine.createSpyObj('mailingService', ['clearData']);

        storefrontUtilityService = { isRunningAsKiosk: false };

        await TestBed
            .configureTestingModule({
                declarations: [
                    ReceiptComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [FormsModule, PipesModule],
                providers: [
                    { provide: StateService, useFactory: () => stateServiceSpy },
                    { provide: ReplacementStateService, useFactory: () => replacementStateServiceSpy },
                    { provide: ReceiptDataHelperService, useFactory: () => receiptDataHelperServiceSpy },
                    { provide: StorefrontUtilityService, useFactory: () => storefrontUtilityService },
                    { provide: MailingAddressService, useFactory: () => mailingService }

                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(ReceiptComponent);
        component = fixture.debugElement.componentInstance;


    });

    it('defines the component', async () => {
        expect(component).toBeDefined();
    });

    it('initializes the component', async () => {

        replacementStateServiceSpy.getState.and.returnValue({} as IState);
        receiptDataHelperServiceSpy.getData.and.returnValue({

        } as any);
        await component.ngOnInit();
        expect(receiptDataHelperServiceSpy.getData).toHaveBeenCalled();
        expect(mailingService.clearData).toHaveBeenCalled();
    });

    it('tests the route to link manage my vehicles', async () => {

        await component.viewVehiclesClick();
        expect(stateServiceSpy.go).toHaveBeenCalledWith(SharedStates.Root);

    });

    it('tests the route to account dashboard', async () => {

        await component.nextStep({});
        expect(stateServiceSpy.go).toHaveBeenCalled();

    });



});
