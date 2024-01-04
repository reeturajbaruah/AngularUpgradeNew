import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CompletionModalComponent, CompletionModalInjectionValues } from './completionModal.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StateService } from '@uirouter/angular';
import { stateNames as FlowCompletionStateNames } from 'profile/constants';
import { changesStable } from 'testing';
import { PipesModule } from 'pipes/module';
import { environment } from 'environments/environment';

describe('FlowCompletionModalComponent tests', () => {

    let fixture: ComponentFixture<CompletionModalComponent>;
    let component: CompletionModalComponent;
    let dialogData: CompletionModalInjectionValues;

    let dialog: jasmine.SpyObj<MatDialogRef<CompletionModalComponent>>;
    let state: StateService;

    beforeEach(async () => {
        dialog = jasmine.createSpyObj('MatDialogRef', ['close']);
        dialogData = {
            cmsContent: { Title: '', PrimaryContent: '', AcceptButton: '' }
        };

        //StateService Mock
        state = jasmine.createSpyObj('state', ['go']);


        await TestBed
            .configureTestingModule({
                declarations: [
                    CompletionModalComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: dialog, useFactory: () => dialog },
                    { provide: MatDialogRef, useFactory: () => dialog },
                    { provide: MAT_DIALOG_DATA, useFactory: () => dialogData },
                    { provide: StateService, useFactory: () => state }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(CompletionModalComponent);
        component = fixture.debugElement.componentInstance;

        component.cmsContent = { Title: '', PrimaryContent: '', AcceptButton: '' };

        await changesStable(fixture);
    });


    it('is a canary test', async () => {

        expect(true).toEqual(true);
    });

    describe('ngOnInit', () => {
        it('should set data to injection values', () => {
            expect(component.cmsContent).toEqual({ Title: '', PrimaryContent: '', AcceptButton: '' });
        });
    });

    describe('acceptButtonClick', () => {

        it('should call state.go and call dialog.close', async () => {
            
            //act
            await component.acceptButtonClick();

            //assert
            expect(state.go).toHaveBeenCalledWith(FlowCompletionStateNames.AccountDetails);
            expect(state.go).toHaveBeenCalledTimes(1);
            expect(dialog.close).toHaveBeenCalledTimes(1);
        });

    });

});
