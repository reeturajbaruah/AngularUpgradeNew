import { } from 'jasmine';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { PipesModule } from 'pipes/module';
import { DialogService } from 'common/services';
import { CAVVEModule } from 'cavve/module';

import { UnInvoicedComponent } from './unInvoiced.component';
import { UninvoicedDetailsModalComponent } from 'missedatoll/details/uninvoiced/uninvoicedDetailsModal.component';



describe('material paginator goto component', () => {

    let fixture: ComponentFixture<UnInvoicedComponent>;
    let component: UnInvoicedComponent;

    let dialogService: DialogService;

    beforeEach(() => {
        dialogService = jasmine.createSpyObj('dialogService', ['openSliderFilled']);

        TestBed
            .configureTestingModule({
                declarations: [UnInvoicedComponent],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [
                    CommonModule,
                    FlexLayoutModule,
                    PipesModule
                ],
                providers: [
                    { provide: DialogService, useFactory: () => dialogService }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(UnInvoicedComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {

        it('should pass', () => {

            expect(true).toBe(true);
        });
    });

    describe('onInit', () => {
        it('should set inital values', () => {
            //Assemble
            component.unInvoiced = {
                tollAmount: 99000,
                violationId: 123,
                agencyName: 'test name',
                location: 'test location',
                violationDate: 'asdf',
            } as any;
            
            //Act
            component.ngOnInit();

            //Assert
            expect(component.violationNumber).toBe(123);
            
        });

    });


    describe('openTollDetailsModal', () => {
        beforeEach(() => {
            component.unInvoiced = {
                tollAmount: 99000,
                violationId: 123,
                agencyName: 'test name',
                location: 'test location',
                violationDate: 'asdf',
            } as any;
        });

        it('should call dialogService', () => {
            const uninvoicedData = {
                agencyCode: 'test name',
                amountDue: 99000,
                location: 'test location',
                violationDate: 'asdf',
                violationNumber: '123'
            } as any;

            component.openTollDetailsModal();

            expect(dialogService.openSliderFilled).toHaveBeenCalledTimes(1);
            expect(dialogService.openSliderFilled).toHaveBeenCalledWith(UninvoicedDetailsModalComponent,
                { uninvoicedDetails: uninvoicedData },
                { title: 'Transaction Details', hasBack: true, hasClose: false });
        });
    });
});
