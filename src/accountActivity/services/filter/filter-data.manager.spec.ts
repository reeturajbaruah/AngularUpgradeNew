import { TestBed, waitForAsync } from '@angular/core/testing';
import { FilterDataManager } from './filter-data.manager';
import { AccountActivityService, WebApisService } from 'accountActivity/services';

describe('FilterDataManager', () => {
    let service: FilterDataManager;
    let webApisService: jasmine.SpyObj<WebApisService>;
    let accountActivityService: jasmine.SpyObj<AccountActivityService>;
    const response: any = { transactionListItems: [], vehicleNickName: [] };

    beforeEach(() => {
        webApisService = jasmine.createSpyObj('WebApisService', ['setupSearchTransactions']);
        accountActivityService = jasmine.createSpyObj('AccountActivityService', ['getDefaultFromDate']);

        webApisService.setupSearchTransactions.and.resolveTo(response);
        accountActivityService.getDefaultFromDate.and.returnValue(new Date());

        TestBed.configureTestingModule({
            providers: [
                FilterDataManager,
                { provide: WebApisService, useValue: webApisService },
                { provide: AccountActivityService, useValue: accountActivityService }
            ]
        });
        service = TestBed.inject(FilterDataManager);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('setFiltersData', () => {
        it('should call setupSearchTransactions', waitForAsync(() => {
            service.setFiltersData().then(res => {
                const transactionFilterData = service.getTransactionFilterData();
                const vehicleFilterData = service.getVehicleFilterData();

                expect(webApisService.setupSearchTransactions).toHaveBeenCalled();
                expect(transactionFilterData).toEqual([]);
                expect(vehicleFilterData).toEqual([]);
            });
        }));
    });

    describe('getDateSortFilterDate', () => {
        it('should return array', () => {
            const dateSortFilterDate: any[] = service.getDateSortFilterDate();

            expect(dateSortFilterDate).toEqual([
                {
                    text: 'Transaction Date',
                }
                ,
                {
                    text: 'Posted Date'
                }
            ]);
        });
    });
});
