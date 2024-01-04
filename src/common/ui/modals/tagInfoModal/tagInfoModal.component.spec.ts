import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { DialogRef } from 'common/services';
import { TagInfoModalComponent } from './tagInfoModal.component';
import { ITagInfoInjectionValues } from './tagInfoModal.interface';
import { TestingModule } from 'testing';
import { PipesModule } from 'pipes/module';

describe('TagInfoModalComponent', () => {

    let fixture: ComponentFixture<TagInfoModalComponent>;
    let component: TagInfoModalComponent;
    let dialogRef: DialogRef<ITagInfoInjectionValues>;

    beforeEach(async () => {

        dialogRef = {
            data: {
                modalCms: {
                    FIRST_REG_TAGS_DESC: 'First 8 Regular EZ TAGs',
                    FIRST_REG_TAGS_FEE: '$0.00',
                    MORE_THAN_TAGS_DESC: 'More than 8 Regular EZ TAGs',
                    MORE_THAN_TAGS_FEE: '$2.00/each',
                    MOTO_TAGS_DESC: 'Motorcycle TAGs',
                    MOTO_TAGS_FEE: '$15.00/each'
                }
            } as ITagInfoInjectionValues,
            close: jasmine.createSpy('close') as () => void
        } as DialogRef<ITagInfoInjectionValues>;

        await TestBed
            .configureTestingModule({
                declarations: [
                    TagInfoModalComponent
                ],
                imports: [TestingModule, PipesModule],
                schemas: [NO_ERRORS_SCHEMA],
                providers: [
                    { provide: DialogRef, useFactory: () => dialogRef }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(TagInfoModalComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {
        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

    describe('ngOnInit', () => {
        it('should set tagTable', () => {
            component.ngOnInit();

            expect(component.tagTable).toEqual([
                {
                    desc: 'First 8 Regular EZ TAGs',
                    fee: '$0.00'
                },
                {
                    desc: 'More than 8 Regular EZ TAGs',
                    fee: '$2.00/each'
                },
                {
                    desc: 'Motorcycle TAGs',
                    fee: '$15.00/each'
                }
            ]);
        });
    });

    describe('cancel', () => {
        it('should close the modal', () => {
            component.cancel();

            expect(dialogRef.close).toHaveBeenCalled();
        });
    });
});
