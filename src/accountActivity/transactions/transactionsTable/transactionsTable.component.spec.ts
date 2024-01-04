import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';
import { DialogService } from 'common/services';
import { AccountActivityService, WebApisService } from 'accountActivity/services';
import { LocationCoordinatesResponse } from 'accountActivity/interfaces';
import { TransactionRecord } from 'accountDashboard/services';
import { } from 'jasmine';
import { TransactionDetailsModalComponent } from '../transactionDetailsModal/transactionDetailsModal.component';
import { TransactionsTableComponent } from './transactionsTable.component';
import { WindowRef } from 'common/providers';
import { CopyToExcelService } from 'common/services/copyToExcel/copyToExcel.service';
import { changesStable } from 'testing/utilities';
import { By } from '@angular/platform-browser';
import { DateWithTimeZonePipe } from 'pipes/dateWithTimeZone/dateWithTimeZone.pipe';

describe('component: transactionsTableComponent', () => {

    let dialogService: jasmine.SpyObj<DialogService>;
    let webApi: jasmine.SpyObj<WebApisService>;
    let sanitizer: jasmine.SpyObj<DomSanitizer>;
    let accountActivityService: jasmine.SpyObj<AccountActivityService>;

    let fixture: ComponentFixture<TransactionsTableComponent>;
    let component: TransactionsTableComponent;

    let copyToExcelServiceSpy: jasmine.SpyObj<CopyToExcelService>;


    beforeEach(async () => {

        dialogService = jasmine.createSpyObj('dialogService', ['openSliderFilled']);
        webApi = jasmine.createSpyObj('webApi', ['locationCoordinates']);
        sanitizer = jasmine.createSpyObj('sanitizer', ['bypassSecurityTrustResourceUrl']);
        sanitizer.bypassSecurityTrustResourceUrl.and.callFake(val => val);
        accountActivityService = jasmine.createSpyObj('accountActivityService', ['hasLocationCoordinates', 'getLocationNameWithoutAgencyOrPhone']);
        copyToExcelServiceSpy = jasmine.createSpyObj('copyToExcelService', ['getDataForExcel']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    TransactionsTableComponent,
                    DateWithTimeZonePipe
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [],
                providers: [
                    { provide: DialogService, useFactory: () => dialogService },
                    { provide: WebApisService, useFactory: () => webApi },
                    { provide: DomSanitizer, useFactory: () => sanitizer },
                    { provide: AccountActivityService, useFactory: () => accountActivityService },
                    { provide: WindowRef, useFactory: () => window },
                    { provide: CopyToExcelService, useFactory: () => copyToExcelServiceSpy },

                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(TransactionsTableComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });
    });

    describe('test for copy to excel to verify the dom structure ', () => {
        it('should test copy to excel dom', async () => {
            component.transactionRecords = [
                {
                    licensePlate: 'test',
                    licenseState: 'tx',
                    transType: 'test desc',
                    trxnDate: new Date(),
                    locationName: 'test location',
                    agencyName: 'test agency',
                    amount: 10

                } as TransactionRecord
            ];

            await changesStable(fixture);

            const de = fixture.debugElement;
            expect(de).toBeDefined();

            const divNewrowDe = de.queryAll(By.css('div[name="newRow"]'));
            expect(divNewrowDe.length).toEqual(1);

            const fxrowDe = divNewrowDe[component.transactionRecords.length - 1].query(By.css('fx-row'));
            expect(fxrowDe).toBeDefined();

            const sectionTrnsrowDe = fxrowDe.query(By.css('section[name="transaction-row"]'));
            expect(sectionTrnsrowDe).toBeDefined();

            const divTrnxdateDe = sectionTrnsrowDe.query(By.css('div[name="transaction date"]'));
            expect(divTrnxdateDe).toBeDefined();

            const divLicplateDe = sectionTrnsrowDe.query(By.css('div[name="lic. plate"]'));
            expect(divLicplateDe).toBeDefined();

            const divNicknameDe = sectionTrnsrowDe.query(By.css('div[name="nickname"]'));
            expect(divNicknameDe).toBeDefined();

            const divLocationDe = sectionTrnsrowDe.query(By.css('div[name="location"]'));
            expect(divLocationDe).toBeDefined();

            const divDescriptionDe = sectionTrnsrowDe.query(By.css('div[name="description"]'));
            expect(divDescriptionDe).toBeDefined();

            const sectionAmtDe = fxrowDe.query(By.css('section[name="amount"]'));
            expect(sectionAmtDe).toBeDefined();



        });
    });

    describe('openTransactionRecordDetailsModal', () => {

        beforeEach(() => {
            (webApi.locationCoordinates as jasmine.Spy).and.
                resolveTo(
                    { coordinates: { latitude: 1, longitude: 2 } } as LocationCoordinatesResponse
                );

            (accountActivityService.hasLocationCoordinates as jasmine.Spy).and.
                returnValue(true);

            (accountActivityService.getLocationNameWithoutAgencyOrPhone as jasmine.Spy).and.
                returnValue('');
        });


        it('should open a sliding modal with transaction details', async () => {

            await component.openTransactionRecordDetailsModal({} as any);

            expect(dialogService.openSliderFilled).toHaveBeenCalledWith(TransactionDetailsModalComponent,
                {
                    transactionRecord: { latitude: 1, longitude: 2 },
                    googleMapSrc: 'https://www.google.com/maps?q=1,2&output=embed',
                    hasLocationCoordinates: true,
                    locationNameWithoutAgencyOrPhone: ''
                },
                { title: jasmine.any(String) });
        });



        it('should call locationCoordinates API when location coordinates are not available', async () => {

            spyOn(component as any, 'decorateWithLocationCoordinates');
            spyOn(component as any, 'getMapSrcFor');

            await component.openTransactionRecordDetailsModal({} as any);

            expect(component['decorateWithLocationCoordinates']).toHaveBeenCalledTimes(1);
            expect(component['getMapSrcFor']).toHaveBeenCalledTimes(1);
        });
    });

    describe('getMapSrcFor', () => {

        [
            {
                record: { latitude: 5, longitude: 1 },
                hasLocationCoordinates: true,
                expected: 'https://www.google.com/maps?q=5,1&output=embed'
            },
            {
                record: { latitude: 25, longitude: 17 },
                hasLocationCoordinates: true,
                expected: 'https://www.google.com/maps?q=25,17&output=embed'
            },
            {
                record: { latitude: 25, longitude: 17 },
                hasLocationCoordinates: false,
                expected: ''
            },
            {
                record: {},
                hasLocationCoordinates: false,
                expected: ''
            },

            {
                record: undefined,
                expected: ''
            }
        ].forEach(({ record, hasLocationCoordinates, expected }) => {
            it('should return map src', () => {
                accountActivityService.hasLocationCoordinates.and.returnValue(hasLocationCoordinates);

                expect(component['getMapSrcFor'](record as TransactionRecord)).toBe(expected);
            });
        });
    });

    describe('decorateWithLocationCoordinates', () => {

        it('should decorate the transactions with latitude and longitude information', async () => {
            webApi.locationCoordinates.and.resolveTo({ coordinates: { latitude: 1, longitude: 2 } } as LocationCoordinatesResponse);
            accountActivityService.hasLocationCoordinates.and.returnValue(true);

            const record = { amount: 10 } as TransactionRecord;
            const recordReturned = await component['decorateWithLocationCoordinates'](record);

            expect(record).toEqual({ amount: 10 } as TransactionRecord);
            expect(recordReturned).toEqual({ amount: 10, latitude: 1, longitude: 2 } as any);
        });

        it('should return the record as is if no data returned', async () => {
            webApi.locationCoordinates.and.resolveTo({ coordinates: { latitude: 1, longitude: 2 } } as LocationCoordinatesResponse);
            accountActivityService.hasLocationCoordinates.and.returnValue(false);

            const record = { amount: 10 } as TransactionRecord;
            const recordReturned = await component['decorateWithLocationCoordinates'](record);

            expect(record).toEqual({ amount: 10 } as TransactionRecord);
            expect(recordReturned).toEqual({ amount: 10 } as any);
        });
    });

});
