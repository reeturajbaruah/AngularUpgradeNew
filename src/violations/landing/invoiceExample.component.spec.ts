import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InvoiceExampleComponent } from './invoiceExample.component';
import { DialogRef } from 'common/services';
import { CmsUtilService } from 'cms/services';

describe('InvoiceExampleComponent', () => {
    let component: InvoiceExampleComponent;
    let fixture: ComponentFixture<InvoiceExampleComponent>;
    let dialogRef: jasmine.SpyObj<DialogRef<any>>;
    let cmsUtilService: jasmine.SpyObj<CmsUtilService>;
    const data: any = { pageData: { Children: [{ Image: '', ShortDescription: '' }], ShortDescription: '' } };

    beforeEach(async () => {
        dialogRef = jasmine.createSpyObj('DialogRef', [], { data });
        cmsUtilService = jasmine.createSpyObj('CmsUtilService', ['generateFileSrc']);

        cmsUtilService.generateFileSrc.and.returnValue('test');

        await TestBed.configureTestingModule({
            declarations: [InvoiceExampleComponent],
            providers: [
                { provide: DialogRef, useValue: dialogRef },
                { provide: CmsUtilService, useValue: cmsUtilService }
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(InvoiceExampleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});