import { } from 'jasmine';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { PipesModule } from 'pipes/module';
import { DialogService } from 'common/services';
import { CAVVEModule } from 'cavve/module';

import { InvoicedComponent } from './invoiced.component';

import { InvoicedDetailsComponent } from 'violationsCommon/components/violationsDetails/invoiced/invoicedDetails/invoicedDetails.component';
import { InjectionValues, EOViolationInvoice } from 'frp3/interfaces';


describe('material paginator goto component', () => {

    let fixture: ComponentFixture<InvoicedComponent>;
    let component: InvoicedComponent;

    let dialogService: DialogService;

    beforeEach(() => {
        dialogService = jasmine.createSpyObj('dialogService', ['openSliderFilled']);

        TestBed
            .configureTestingModule({
                declarations: [InvoicedComponent],
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

        fixture = TestBed.createComponent(InvoicedComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {

        it('should pass', () => {

            expect(true).toBe(true);
        });
    });

    describe('openTollDetailsModal', () => {
        it('should open a sliding modal with toll details', () => {
            component.openTollDetailsModal();

            expect(dialogService.openSliderFilled).toHaveBeenCalledWith(InvoicedDetailsComponent,
                {
                    invoiced: component.invoiced,
                    plate: component.plate, isPreviousPaid: false
                } as InjectionValues,
                jasmine.objectContaining({ title: 'Invoice Details', hasBack: true, hasClose: false }));
        });
    });
});
