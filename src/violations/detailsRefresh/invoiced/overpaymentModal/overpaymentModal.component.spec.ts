import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { OverpaymentModalComponent, InjectionValues } from './overpaymentModal.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CmsUtilService } from 'cms/services';
import { changesStable } from 'testing';

describe('OverpaymentModal component tests', () => {

    let fixture: ComponentFixture<OverpaymentModalComponent>;
    let component: OverpaymentModalComponent;
    let dialogData: InjectionValues;

    let dialog: jasmine.SpyObj<MatDialogRef<OverpaymentModalComponent>>;
    let cmsUtilService: CmsUtilService;

    beforeEach(async () => {
        dialog = jasmine.createSpyObj('MatDialogRef', ['close']);
        dialogData = {
            cmsContent: { Title: '', PrimaryContent: '' },
            amountDue: 12345
        };

        cmsUtilService = jasmine.createSpyObj('cmsUtilService', ['parseAllImageAttributes']);
        (cmsUtilService.parseAllImageAttributes as jasmine.Spy).and.returnValues({ image: '/Content/icons/pdf.gif' });

        await TestBed
            .configureTestingModule({
                declarations: [
                    OverpaymentModalComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [],
                providers: [
                    { provide: dialog, useFactory: () => dialog },
                    { provide: MatDialogRef, useFactory: () => dialog },
                    { provide: MAT_DIALOG_DATA, useFactory: () => dialogData },
                    { provide: CmsUtilService, useFactory: () => cmsUtilService },
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(OverpaymentModalComponent);
        component = fixture.debugElement.componentInstance;

        await changesStable(fixture);
    });


    it('is a canary test', async () => {

        expect(true).toEqual(true);
    });

    describe('ngOnInit', () => {
        it('should set data to injection values', () => {
            expect(component.cmsContent).toEqual({ Title: '', PrimaryContent: '' });
        });
    });

    describe('close', () => {

        it('should call matDialog.open() 1 times', () => {

            component['close']();
            expect(dialog.close).toHaveBeenCalledTimes(1);
        });

    });

});
