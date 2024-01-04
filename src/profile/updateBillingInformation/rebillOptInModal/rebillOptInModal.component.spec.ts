import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogService } from 'common/services';
import { PipesModule } from 'pipes/module';
import { createFormWrap } from 'testing/utilities';
import {
    RebillOptInModalComponent,
    RebillOptInModalContent
} from './rebillOptInModal.component';

describe('PaymentSelect Component', () => {
    let fixture: ComponentFixture<RebillOptInModalComponent>;
    let component: RebillOptInModalComponent;
    let dialogService: DialogService;
    let form: NgForm;
    let dialog: jasmine.SpyObj<MatDialogRef<RebillOptInModalComponent>>;
    let dialogData: RebillOptInModalContent;

    beforeEach(async () => {
        dialog = jasmine.createSpyObj('MatDialogRef', ['close']);
        dialogData = {
            Title: 'test',
            optInBtn: 'optIn',
            CancelBtn: 'cancel',
            MainContent: 'main',
            success: 'success'
        };

        dialogService = jasmine.createSpyObj('dailogService', ['openSliderCentered']);

        await TestBed
            .configureTestingModule({
                declarations: [RebillOptInModalComponent],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [FormsModule, MatDialogModule, PipesModule],
                providers: [
                    NgForm,
                    { provide: DialogService, useFactory: () => dialogService },
                    { provide: MatDialogRef, useFactory: () => dialog },
                    { provide: MAT_DIALOG_DATA, useFactory: () => dialogData }
                ]
            })
            .compileComponents();

        const construct = await createFormWrap(RebillOptInModalComponent, () => { });

        fixture = construct.fixture;
        component = construct.component;
        form = construct.form;

    });


    describe('canary', () => {
        it('should pass', async () => {
            expect(component).toBeDefined();
        });
    });

    describe('acceptButtonClick', () => {

        it('should call dialog.close with true', async () => {
            await component.acceptButtonClick();
            expect(dialog.close).toHaveBeenCalledOnceWith(true);
        });
    });

    describe('cancelButtonClick', () => {

        it('should call dialog.close with false', async () => {

            await component.cancelButtonClick();
            expect(dialog.close).toHaveBeenCalledOnceWith(false);
        });
    });

});
