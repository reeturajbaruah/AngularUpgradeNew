import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { changesStable } from 'testing';
import { PipesModule } from 'pipes/module';
import { GenericCmsModalComponent, GenericCmsModalInjectionValues } from './genericCmsModal.component';

describe('GenericCmsModal tests', () => {

    let fixture: ComponentFixture<GenericCmsModalInjectionValues>;
    let component: GenericCmsModalComponent;
    let dialogData: GenericCmsModalInjectionValues;

    let dialog: jasmine.SpyObj<MatDialogRef<GenericCmsModalComponent>>;

    beforeEach(async () => {
        dialog = jasmine.createSpyObj('MatDialogRef', ['close']);
        dialogData = {
            cmsContent: { Title: '', PrimaryContent: '', AcceptBtn: '' }
        };

        await TestBed
            .configureTestingModule({
                declarations: [
                    GenericCmsModalComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: dialog, useFactory: () => dialog },
                    { provide: MatDialogRef, useFactory: () => dialog },
                    { provide: MAT_DIALOG_DATA, useFactory: () => dialogData }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(GenericCmsModalComponent);
        component = fixture.debugElement.componentInstance;

        component.cmsContent = { Title: '', PrimaryContent: '', AcceptBtn: '' };

        await changesStable(fixture);
    });


    it('is a canary test', async () => {

        expect(true).toEqual(true);
    });

    describe('ngOnInit', () => {
        it('should set data to injection values', () => {
            expect(component.cmsContent).toEqual({ Title: '', PrimaryContent: '', AcceptBtn: '' });
        });
    });

    describe('acceptButtonClick', () => {

        it('should call dialog.close', async () => {

            await component.acceptButtonClick();
            expect(dialog.close).toHaveBeenCalledOnceWith(true);
        });
    });

    describe('cancelButtonClick', () => {

        it('should call dialog.close', async () => {

            await component.cancelButtonClick();
            expect(dialog.close).toHaveBeenCalledOnceWith(false);
        });
    });

});
