//import { DatePipe, TitleCasePipe } from '@angular/common';
//import { NO_ERRORS_SCHEMA } from '@angular/core';
//import { ComponentFixture, TestBed } from '@angular/core/testing';
//import { PageEvent } from '@angular/material/paginator';
//import { StateService, UIRouterGlobals } from '@uirouter/angular';
//import { stateNames as accountActiviyStates } from 'accountActivity/constants';
//import { FrameComponent } from 'accountActivity/frame/frame.component';
//import { SearchAccountActivityRequest } from 'accountActivity/interfaces';
//import { AccountActivityService, WebApisService } from 'accountActivity/services';
//import { ENVIRON_CONFIG, SF_UTILITY } from 'common/module';
//import { DownloadService } from 'common/services';
//import { } from 'jasmine';
//import { TransactionsComponent } from './transactions.component';


//describe('component: transactionsComponent', () => {

//    let uiRouterGlobals: UIRouterGlobals;
//    let datePipe: jasmine.SpyObj<DatePipe>;
//    let titleCasePipe: jasmine.SpyObj<TitleCasePipe>;
//    let accountActivityService: jasmine.SpyObj<AccountActivityService>;
//    let downloadService: jasmine.SpyObj<DownloadService>;
//    let webApi: jasmine.SpyObj<WebApisService>;
//    let stateService: jasmine.SpyObj<StateService>;
//    let environmentConfig: any;
//    let storefrontUtilityService: any;

//    let fixture: ComponentFixture<TransactionsComponent>;
//    let component: TransactionsComponent;
//    let parent: FrameComponent;

//    beforeEach(async () => {

//        datePipe = jasmine.createSpyObj('datePipe', ['transform']);
//        titleCasePipe = jasmine.createSpyObj('titleCasePipe', ['transform']);
//        accountActivityService = jasmine.createSpyObj('accountActivityService',
//            ['createWebsiteLinksDictionary', 'createAgencyPhoneNumberDictionary', 'createAgencyFullNameDictionary', 'getDictionaryValueForAgency'],
//            ['DEFAULT_LATEST_ACTIVITY_SEARCH']);

//        downloadService = jasmine.createSpyObj('downloadService', ['download']);
//        webApi = jasmine.createSpyObj('webApi', ['searchAccountActivity']);
//        webApi.searchAccountActivity.and.resolveTo({
//            records: [],
//            totalRecordsCount: 0,
//            totalAmount: 0,
//            hasTollWaivers: false
//        } as any);
//        stateService = jasmine.createSpyObj('state', ['go']);

//        environmentConfig = {
//            paginationConfig: {
//                transactions: {
//                    PageSize: 25,
//                    LimitToStart: 100
//                }
//            }
//        };
//        storefrontUtilityService = {
//            isRunningAsKiosk: false
//        };
//        uiRouterGlobals = {
//            params: {
//                searchCriteria: {
//                    dateFrom: new Date(1992, 11),
//                    dateTo: new Date(1992, 12),
//                    vehicle: 'fakeVehicle',
//                    transaction: 'fakeTransaction',
//                    dateRangeType: 'POSTED',
//                    vehicleNickNameType: 'L'
//                } as SearchAccountActivityRequest
//            }
//        } as any;

//        parent = {} as FrameComponent;

//        await TestBed
//            .configureTestingModule({
//                declarations: [
//                    TransactionsComponent
//                ],
//                schemas: [NO_ERRORS_SCHEMA],
//                imports: [],
//                providers: [
//                    { provide: FrameComponent, useFactory: () => parent },
//                    { provide: UIRouterGlobals, useFactory: () => uiRouterGlobals },
//                    { provide: DatePipe, useFactory: () => datePipe },
//                    { provide: TitleCasePipe, useFactory: () => titleCasePipe },
//                    { provide: AccountActivityService, useFactory: () => accountActivityService },
//                    { provide: DownloadService, useFactory: () => downloadService },
//                    { provide: WebApisService, useFactory: () => webApi },
//                    { provide: StateService, useFactory: () => stateService },
//                    { provide: ENVIRON_CONFIG, useFactory: () => environmentConfig },
//                    { provide: SF_UTILITY, useFactory: () => storefrontUtilityService }
//                ]
//            })
//            .compileComponents();

//        fixture = TestBed.createComponent(TransactionsComponent);
//        component = fixture.debugElement.componentInstance;
//    });

//    describe('canary', () => {
//        it('should pass', () => {
//            expect(true).toBe(true);
//        });
//    });

//    describe('ngOnInit', () => {

//        it('set the default search criteria tags', () => {

//            //Assemble
//            datePipe.transform.and.returnValue('fakeDate');
//            titleCasePipe.transform.and.returnValue('fakeDateRangeType');

//            //Act
//            component.ngOnInit();

//            //Assert
//            expect(component.searchCriteriaTags).toEqual([
//                'fakeDate - Present',
//                'fakeVehicle',
//                'fakeTransaction',
//                'fakeDateRangeType Date'
//            ]);
//        });

//        it('should set the websiteLinksDictionary', () => {

//            //Assemble
//            accountActivityService.createWebsiteLinksDictionary.and.returnValue({ key: 'fakeDictionary' });
//            accountActivityService.createAgencyPhoneNumberDictionary.and.returnValue({ key: 'fakeDictionary' });
//            accountActivityService.createAgencyFullNameDictionary.and.returnValue({ key: 'fakeDictionary' });

//            //Act
//            component.ngOnInit();

//            //Assert
//            expect(component['agencyWebsiteLinksDictionary']).toEqual({ key: 'fakeDictionary' });
//            expect(component['agencyPhoneNumberDictionary']).toEqual({ key: 'fakeDictionary' });
//            expect(component['agencyFullNameDictionary']).toEqual({ key: 'fakeDictionary' });
//        });

//        it('should call the search transactions', () => {

//            //Assemble
//            spyOn(component as any, 'searchTransactions');

//            //Act
//            component.ngOnInit();

//            //Assert
//            expect(component['searchTransactions']).toHaveBeenCalled();
//        });
//    });

//    describe('clearFilter', () => {
//        it('should reload the state with no params', () => {

//            //Act
//            component.clearFilterClicked();

//            //Assert
//            expect(stateService.go).toHaveBeenCalled();
//        });
//    });

//    describe('searchTransactions', () => {
//        beforeEach(() => {
//            accountActivityService.getDictionaryValueForAgency.and.returnValue('fakeWebsite');
//        });

//        it('should set some bounded values from the response', async () => {

//            //Assemble
//            webApi.searchAccountActivity.and.resolveTo({
//                totalRecordsCount: 10,
//                totalAmount: 11,
//                hideLocationLink: true,
//                records: [{}]
//            } as any);

//            //Act
//            await component['searchTransactions']({} as any);

//            //Assert
//            expect(component.totalRecordsCount).toEqual(10);
//            expect(component.filteredTotal).toEqual(11);
//            expect(component.showLocationLink).toBeFalse();
//        });

//        it('should set the agency properties of the records', async () => {

//            //Assemble
//            webApi.searchAccountActivity.and.resolveTo({
//                records: [{}]
//            } as any);

//            //Act
//            await component['searchTransactions']({} as any);

//            //Assert
//            expect(component.listOfAllRecords).toEqual([{
//                agencyWebsite: 'fakeWebsite',
//                agencyPhoneNumber: 'fakeWebsite',
//                agencyFullName: 'fakeWebsite'
//            }] as any);
//        });

//        it('should set the desktop paginated records', async () => {

//            //Assemble
//            webApi.searchAccountActivity.and.resolveTo({
//                records: [
//                    { key: 1 }, { key: 2 }, { key: 3 }, { key: 4 }, { key: 5 }, { key: 6 }, { key: 7 }, { key: 8 }, { key: 9 }, { key: 10 },
//                    { key: 11 }, { key: 12 }, { key: 13 }, { key: 14 }, { key: 15 }, { key: 16 }, { key: 17 }, { key: 18 }, { key: 19 }, { key: 20 },
//                    { key: 21 }, { key: 22 }, { key: 23 }, { key: 24 }, { key: 25 }, { key: 26 }, { key: 27 }, { key: 28 }, { key: 29 }, { key: 30 }
//                ]
//            } as any);

//            //Act
//            await component['searchTransactions']({} as any);

//            //Assert
//            expect(component.paginatedRecords.length).toEqual(25);
//        });

//        it('should set the mobile load-more records', async () => {

//            //Assemble
//            webApi.searchAccountActivity.and.resolveTo({
//                records: [
//                    { key: 1 }, { key: 2 }, { key: 3 }, { key: 4 }, { key: 5 }, { key: 6 }, { key: 7 }, { key: 8 }, { key: 9 }, { key: 10 },
//                    { key: 11 }, { key: 12 }, { key: 13 }, { key: 14 }, { key: 15 }, { key: 16 }, { key: 17 }, { key: 18 }, { key: 19 }, { key: 20 },
//                    { key: 21 }, { key: 22 }, { key: 23 }, { key: 24 }, { key: 25 }, { key: 26 }, { key: 27 }, { key: 28 }, { key: 29 }, { key: 30 }
//                ]
//            } as any);

//            //Act
//            await component['searchTransactions']({} as any);

//            //Assert
//            expect(component.mobileLoadedRecords.length).toEqual(25);

//        });
//    });

//    describe('updateTransactionsTable', () => {
//        it('should change the paginated violations based on the pagination event: general', () => {
//            //Assemble
//            component.listOfAllRecords = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] as any;

//            //Act
//            component.updateTransactionsTable({ pageIndex: 0, pageSize: 10 } as PageEvent);

//            //Assert
//            expect(component.paginatedRecords).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as any);
//        });

//        it('should change the paginated violations based on the pagination event: end of array', () => {
//            //Assemble
//            component.listOfAllRecords = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] as any;

//            //Act
//            component.updateTransactionsTable({ pageIndex: 1, pageSize: 10 } as PageEvent);

//            //Assert
//            expect(component.paginatedRecords).toEqual([11] as any);
//        });
//    });

//    describe('mobileLoadMore', () => {
//        it('should change the load-more violations: general', () => {
//            //Assemble
//            component.listOfAllRecords = [
//                1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
//                11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
//                21, 22, 23, 24, 25, 26, 27, 28, 29, 30
//            ] as any;
//            component.mobileLoadedRecords = [];

//            //Act
//            component.mobileLoadMore();

//            //Assert
//            expect(component.mobileLoadedRecords).toEqual([
//                1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
//                11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
//                21, 22, 23, 24, 25
//            ] as any);
//        });

//        it('should change the load-more violations: end of array', () => {
//            //Assemble
//            component.listOfAllRecords = [
//                1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
//                11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
//                21, 22, 23, 24, 25, 26, 27, 28, 29, 30
//            ] as any;
//            component.mobileLoadedRecords = [];

//            //Act
//            component.mobileLoadMore();
//            component.mobileLoadMore();

//            //Assert
//            expect(component.mobileLoadedRecords).toEqual([
//                1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
//                11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
//                21, 22, 23, 24, 25, 26, 27, 28, 29, 30
//            ] as any);
//        });
//    });

//    describe('downloadReport', () => {
//        it('should call the downloadReport method when pdf method is called', async () => {
//            spyOn(component as any, 'downloadReport');
//            component.getTransactionsPdf();
//            expect(component['downloadReport']).toHaveBeenCalled();
//        });

//        it('should call the downloadReport method when pdf method is called', async () => {
//            spyOn(component as any, 'downloadReport');
//            component.getTransactionsExcel();
//            expect(component['downloadReport']).toHaveBeenCalled();
//        });
//    });

//});
