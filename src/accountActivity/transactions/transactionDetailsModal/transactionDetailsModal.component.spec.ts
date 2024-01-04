import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogRef, DialogService } from 'common/services';
import { GenericCmsModalComponent } from 'common/ui';
import { } from 'jasmine';
import { LoggingService } from 'logging/module';
import { PipesModule } from 'pipes/module';
import { InjectionValues, TransactionDetailsModalComponent } from './transactionDetailsModal.component';


describe('component: transactionDetailsModalComponent', () => {

    let fixture: ComponentFixture<TransactionDetailsModalComponent>;
    let component: TransactionDetailsModalComponent;

    let dialogRef: jasmine.SpyObj<DialogRef<InjectionValues>>;
    let dialogService: jasmine.SpyObj<DialogService>;
    let loggingService: jasmine.SpyObj<LoggingService>;

    beforeEach(async () => {

        dialogRef = jasmine.createSpyObj('MatDialogRef', ['close'], ['data']);
        (Object.getOwnPropertyDescriptor(dialogRef, 'data').get as jasmine.Spy).and.returnValue({
            transactionRecord: { key: 'fake value' } as any
        });
        dialogService = jasmine.createSpyObj('dialogService', ['openGenericModal']);
        loggingService = jasmine.createSpyObj('loggingService', ['logMessage']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    TransactionDetailsModalComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: DialogRef, useFactory: () => dialogRef },
                    { provide: DialogService, useFactory: () => dialogService },
                    { provide: LoggingService, useFactory: () => loggingService }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(TransactionDetailsModalComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });
    });

    describe('close', () => {
        it('should close dialogRef', () => {

            component.close();

            expect(dialogRef.close).toHaveBeenCalledTimes(1);
        });
    });

    describe('ngOnInit', () => {
        it('should set data to injection values', () => {

            component.ngOnInit();

            expect(component.transactionRecord).toEqual({
                key: 'fake value'
            } as any);

        });

        [
            { record: null, expected: false },
            { record: { bla: 'bla' }, expected: false },
            { record: { agencyName: 'GREAT', agencyWebsite: 'a website' }, expected: false },
            { record: { agencyName: 'MEH', agencyWebsite: '' }, expected: true },
            { record: { agencyName: 'MEH', agencyWebsite: undefined }, expected: true }
        ].forEach(({ record, expected }) => {

            it('should call message logging when agency exists, no website link', () => {

                (Object.getOwnPropertyDescriptor(dialogRef, 'data').get as jasmine.Spy).and.returnValue({
                    transactionRecord: record
                });

                component.ngOnInit();

                expect(loggingService.logMessage).toHaveBeenCalledTimes(expected ? 1 : 0);

                if (expected) {
                    expect(loggingService.logMessage).toHaveBeenCalledWith('Website link not available for agency: MEH.');
                }
            });
        });

    });

    describe('openAgencyDetailsModal', () => {

        it('should open a generic modal', async () => {
            component.openAgencyDetailsModal();

            expect(dialogService.openGenericModal).toHaveBeenCalledWith(GenericCmsModalComponent, jasmine.any(Object));
        });
    });

});
