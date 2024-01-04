import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ReceiptModalComponent, InjectionValues } from './receiptModal.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StateService } from '@uirouter/angular';
import { stateNames as violationStates } from 'violations/constants';
import { ViolationInformationDTO } from '../interfaces';
import { CmsUtilService } from 'cms/services';
import { changesStable } from 'testing';

describe('ReceiptModalComponent tests', () => {

    let fixture: ComponentFixture<ReceiptModalComponent>;
    let component: ReceiptModalComponent;
    let dialogData: InjectionValues;

    let dialog: jasmine.SpyObj<MatDialogRef<ReceiptModalComponent>>;
    let state: StateService;
    let cmsUtilService: CmsUtilService;
   
    beforeEach(async () => {
        dialog = jasmine.createSpyObj('MatDialogRef', ['close']);
        dialogData = {
            cmsContent: 'fake cmsContent',
            closeImage: '/Content/icons/pdf.gif'
        } as any;

        //StateService Mock
        state = jasmine.createSpyObj('state', ['go']);

        cmsUtilService = jasmine.createSpyObj('cmsUtilService', ['parseAllImageAttributes']);
        (cmsUtilService.parseAllImageAttributes as jasmine.Spy).and.returnValues({ image: '/Content/icons/pdf.gif' });

        await TestBed
            .configureTestingModule({
                declarations: [
                    ReceiptModalComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [],
                providers: [
                    { provide: dialog, useFactory: () => dialog },
                    { provide: MatDialogRef, useFactory: () => dialog },
                    { provide: MAT_DIALOG_DATA, useFactory: () => dialogData },
                    { provide: StateService, useFactory: () => state },
                    { provide: CmsUtilService, useFactory: () => cmsUtilService }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(ReceiptModalComponent);
        component = fixture.debugElement.componentInstance;

        component.cmsContent = { Title: '', LongDescription: '', ShortDescription: '' };
        component.closeImage = { Image: '/Content/icons/pdf.gif' };
        component.cmsImage = { image: '', alt: '', height: '', width: '' };

        await changesStable(fixture);
    });


    it('is a canary test', async () => {

        expect(true).toEqual(true);
    });

    describe('ngOnInit', () => {
        it('should set data to injection values', () => {
            expect(component.cmsContent).toEqual('fake cmsContent' as any);
            expect(component.cmsImage).toEqual({ image: '/Content/icons/pdf.gif' } as any);
        });
    });

    describe('payInvoiceClick', () => {

        it('should call state.go and call dialog.close', async () => {

            await component.payInvoiceClick();
            expect(state.go).toHaveBeenCalledWith(violationStates.Landing);
            expect(state.go).toHaveBeenCalledTimes(1);
            expect(dialog.close).toHaveBeenCalledTimes(1);
        });

    });

    describe('close', () => {

        it('should call matDialog.open() 1 times', () => {

            component['close']();
            expect(dialog.close).toHaveBeenCalledTimes(1);
        });

    });

});
