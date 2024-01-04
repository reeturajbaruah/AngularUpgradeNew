import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { PipesModule } from 'pipes/module';
import { DownloadService, DialogRef } from 'common/services';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { InvoicedDetailsComponent } from './invoicedDetails.component';
import { IInjectionValues } from './interfaces/injectionvalues.interface';
import { PdfUrlService } from 'violationsCommon/services/pdfUrl.service';

describe('component: violations-invoiced-details', () => {

    let fixture: ComponentFixture<InvoicedDetailsComponent>;
    let component: InvoicedDetailsComponent;

    let dialogRef: DialogRef<IInjectionValues>;
    let pdfUrlService: jasmine.SpyObj<PdfUrlService>;
    let downloadService: jasmine.SpyObj<DownloadService>;
    let environmentConfig: {
        isMergeMATandVioOn: boolean;
    };

    beforeEach(async () => {
        dialogRef = {} as any;
        (dialogRef.data as IInjectionValues) = {
            invoiced: { something: 1 } as any,
            plate: {
                state: 'TX',
                // eslint-disable-next-line id-blacklist
                number: '123'
            },
            isPreviousPaid: false,
            isSuspendedAccount: false
        };
        pdfUrlService = jasmine.createSpyObj('webApisService', ['getPdfURL']);
        downloadService = jasmine.createSpyObj('downloadService', ['download']);
        environmentConfig = { isMergeMATandVioOn: false };

        await TestBed
            .overrideComponent(InvoicedDetailsComponent, {
                set: {
                    providers: [
                        { provide: DownloadService, useFactory: () => downloadService }
                    ]
                }
            });

        await TestBed
            .configureTestingModule({
                declarations: [
                    InvoicedDetailsComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: PdfUrlService, useFactory: () => pdfUrlService },
                    { provide: DownloadService, useFactory: () => downloadService },
                    { provide: DialogRef, useFactory: () => dialogRef },
                    { provide: ENVIRON_CONFIG, useFactory: () => environmentConfig }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(InvoicedDetailsComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {

        it('should pass', () => {

            expect(true).toBe(true);
        });
    });

    describe('ngOnInit', () => {
        [
            { discount: 10, excusal: 10, isPrev: false, result: true },
            { discount: 0, excusal: 10, isPrev: false, result: true },
            { discount: 10, excusal: 0, isPrev: false, result: false },
            { discount: 10, excusal: 10, isPrev: true, result: true },
            { discount: 0, excusal: 10, isPrev: true, result: true },
            { discount: 10, excusal: 0, isPrev: true, result: true },
            { discount: 0, excusal: 0, isPrev: true, result: false }
        ]
            .forEach(({ discount, excusal, isPrev, result }) => {
                it(`should set showAdjustment to ${result}`, () => {
                    (dialogRef.data as IInjectionValues) = {
                        invoiced: {
                            invoiceLevelDiscount: discount,
                            excusalAmt: excusal,
                            invoiceNum: ''
                        } as any,
                        plate: {
                            state: 'TX',
                            // eslint-disable-next-line id-blacklist
                            number: '123'
                        },
                        isPreviousPaid: isPrev,
                        isSuspendedAccount: false
                    };

                    component.ngOnInit();

                    expect(component.showAdjustments).toBe(result);
                });
            });

        [
            { discount: 10, excusal: 10, isPrev: false, result: -10 },
            { discount: 0, excusal: 10, isPrev: false, result: -10 },
            { discount: 10, excusal: 0, isPrev: false, result: 0 },
            { discount: 10, excusal: 10, isPrev: true, result: -20 },
            { discount: 0, excusal: 10, isPrev: true, result: -10 },
            { discount: 10, excusal: 0, isPrev: true, result: -10 },
            { discount: 0, excusal: 0, isPrev: true, result: 0 }
        ]
            .forEach(({ discount, excusal, isPrev, result }) => {
                it(`should set adjustmentAmt to ${result}`, () => {
                    (dialogRef.data as IInjectionValues) = {
                        invoiced: {
                            invoiceLevelDiscount: discount,
                            excusalAmt: excusal
                        } as any,
                        plate: {
                            state: 'TX',
                            // eslint-disable-next-line id-blacklist
                            number: '123'
                        },
                        isPreviousPaid: isPrev,
                        isSuspendedAccount: false
                    };

                    component.ngOnInit();

                    expect(component.adjustmentAmt).toBe(result);
                });
            });
    });

    describe('getInvoicePdf', () => {

        it('should call webApisService.getPdfURL', () => {

            component.data.invoiced = {
                invoiceNum: '8641',
                agencyId: 9967,
                mailedDate: 'fake mailed date'
            } as any;
            component.data.plate = {
                // eslint-disable-next-line id-blacklist
                number: 'plate number',
                state: 'plate state'
            };

            component.data.isSuspendedAccount = false;

            component.getInvoicePdf();

            expect(pdfUrlService.getPdfURL)
                .toHaveBeenCalledWith({
                    mailedDate: 'fake mailed date',
                    invoiceNum: '8641',
                    agencyId: 9967,
                    licensePlate: 'plate number',
                    licenseState: 'plate state',
                    isSuspendedAccount: false
                } as any);
            expect(pdfUrlService.getPdfURL).toHaveBeenCalledTimes(1);
        });

        it('should call downloadService.download with url retruned by getPdfUrl', () => {

            pdfUrlService.getPdfURL.and.returnValue('fake pdf url');
            component.data.invoiced = {
                invoiceNum: '8641',
                agencyId: 9967,
                mailedDate: 'fake mailed date'
            } as any;
            component.data.plate = {
                // eslint-disable-next-line id-blacklist
                number: 'plate number',
                state: 'plate state'
            };
            component.data.isSuspendedAccount = false;
            component.getInvoicePdf();

            expect(downloadService.download).toHaveBeenCalledWith('fake pdf url', true);
            expect(downloadService.download).toHaveBeenCalledTimes(1);
        });
    });
});