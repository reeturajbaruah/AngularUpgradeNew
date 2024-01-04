import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { PipesModule } from 'pipes/module';

import { CloseAccountRefundComponent } from './closeAccountRefund.component';
import { CloseAccountFrameComponent } from '../closeAccountFrame/frame.component';
import { StateService } from '@uirouter/core';
import { DialogService } from '../../common/services';
import { Routes } from '../constants';
import { MailingAddressService } from 'vehicles/shared';
import { WebStorageService } from '../../common/services/webStorageService/webStorage.service';

describe('component: close-account-refund', () => {

    let fixture: ComponentFixture<CloseAccountRefundComponent>;
    let component: CloseAccountRefundComponent;
    let parent: CloseAccountFrameComponent;
    let stateService: StateService;
    let dialogService: DialogService;
    let webStorage: any;
    let mailingAddressService: jasmine.SpyObj<MailingAddressService>;

    beforeEach(async () => {
        parent = jasmine.createSpyObj('parent', ['onCloseContinue']);
        parent.closeAccountRefund = {
            mailingInfo: {
            },
            currentBalance: 0,
            date: new Date()
        } as any;
        stateService = jasmine.createSpyObj('stateService', ['go']);
        webStorage = jasmine.createSpyObj('webStorage', ['removeEntry', 'validateOnValue']);
        dialogService = jasmine.createSpyObj('dialogService', ['openSliderCentered', 'openGenericModal']);
        (dialogService.openGenericModal as jasmine.Spy).and.resolveTo(true);
        mailingAddressService = jasmine.createSpyObj('MailingAddressService', ['setMailingAddress', 'onMailingAddressEdit']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    CloseAccountRefundComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: CloseAccountFrameComponent, useFactory: () => parent },
                    { provide: StateService, useFactory: () => stateService },
                    { provide: WebStorageService, useFactory: () => webStorage },
                    { provide: DialogService, useFactory: () => dialogService },
                    Routes,
                    { provide: MailingAddressService, useFactory: () => mailingAddressService }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(CloseAccountRefundComponent);
        component = fixture.debugElement.componentInstance;

        component.cmsContent = {
            ACCOUNT_CLOSURE_HEADER: 'Account Closure Header',
            MODAL_HEADER: 'Modal Header',
            MODAL_TITLE: 'Modal Title',
            UPDATE_MODAL_CONTENT: 'Update Modal Content',
            UPDATE_MODAL_TITLE: 'Update Modal Title',
            REFUND_METHOD_HEADER: 'Refund Method Header',
            VALIDATE_HEADER: 'Validate Header',
            LongDescription: 'Long Description',
            ShortDescription: 'Short Description',
            mailingAddressMissing: 'address'
        };
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

    describe('ngOnInit', () => {
        beforeEach(() => {
            const mockResolve = {
                mailingInfo: {
                    address1: 'test 123',
                    city: 'Houston',
                    state: 'TX',
                    international: false,
                    zip: '12345'
                }
            };
            (dialogService.openSliderCentered as jasmine.Spy).and.resolveTo(mockResolve);
        });
        it('should set parent stepnum to 2', () => {
            expect(parent.stepNum).not.toBe(2);

            component.ngOnInit();

            expect(parent.stepNum).toBe(2);
        });

        it('should call validateOnValue', () => {
            component.ngOnInit();

            expect(webStorage.validateOnValue).toHaveBeenCalledTimes(1);
            expect(webStorage.validateOnValue).toHaveBeenCalledWith('closeAgreed', '/CloseAccount/Agreement');
        });

        it('should set accountClosureCmsParams', () => {
            const mockDate = new Date();
            parent.closeAccountRefund.currentBalance = 5;
            parent.closeAccountRefund.date = mockDate;

            component.ngOnInit();

            expect(component.accountClosureCmsParams).toEqual({balance: 5, date: mockDate});
        });
    });

    describe('onMailingAddressEdit', () => {
        it('should call mailingAddressService.onMailingAddressEdit', async () => {
            const mockResolve = {
                mailingInfo: {
                    address1: 'test 123',
                    city: 'Houston',
                    state: 'TX',
                    international: false,
                    zip: '12345'
                }
            };
            (dialogService.openSliderCentered as jasmine.Spy).and.resolveTo(mockResolve);

            await component.onMailingAddressEdit();

            expect(mailingAddressService.onMailingAddressEdit).toHaveBeenCalledTimes(1);
        });
    });

    describe('onCancel', () => {
        it('should call removeEntry', () => {
            component.onCancel({ name: 'stateName' });

            expect(webStorage.removeEntry).toHaveBeenCalledTimes(1);
            expect(webStorage.removeEntry).toHaveBeenCalledWith('closeAgreed');
        });

        it('should call stateService.go', () => {
            component.onCancel({ name: 'stateName' });

            expect(stateService.go).toHaveBeenCalledTimes(1);
            expect(stateService.go).toHaveBeenCalledWith('stateName');
        });
    });

    describe('onContinue', () => {
        it('should call parent.onCloseContinue', () => {
            component.onContinue();

            expect(parent.onCloseContinue).toHaveBeenCalledTimes(1);
        });
    });
});
