import { } from 'jasmine';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PipesModule } from 'pipes/module';
import { DialogService } from 'common/services';
import { MissedATollModule } from 'missedatoll/module';

import { UninvoicedComponent } from './uninvoiced.component';
import { UninvoicedDetailsModalComponent } from './uninvoicedDetailsModal.component';


describe('material paginator goto component', () => {

    let fixture: ComponentFixture<UninvoicedComponent>;
    let component: UninvoicedComponent;

    let dialogService: DialogService;

    beforeEach(() => {
        dialogService = jasmine.createSpyObj('dialogService', ['openSliderFilled']);

        TestBed
            .configureTestingModule({
                declarations: [UninvoicedComponent],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [
                    FlexLayoutModule,
                    PipesModule
                ],
                providers: [
                    { provide: DialogService, useFactory: () => dialogService }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(UninvoicedComponent);
        component = fixture.debugElement.componentInstance;
    });


    describe('openTollDetailsModal', () => {
        it('should open a sliding modal with toll details', () => {
            component.openTollDetailsModal();

            expect(dialogService.openSliderFilled).toHaveBeenCalledWith(UninvoicedDetailsModalComponent,
                jasmine.any(Object),
                jasmine.objectContaining({ title: jasmine.any(String) }));
        });
    });
});
