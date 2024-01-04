import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogRef } from '@angular/material/dialog';
import { StateService } from '@uirouter/core';
import { ListItems } from 'accountActivity/interfaces';
import { WebApisService } from 'accountActivity/services';
import { CmsResolverService } from 'cms/services';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { } from 'jasmine';
import { PipesModule } from 'pipes/module';
import { SearchTransactionsComponent } from './searchTransactions.component';


describe('component: SearchTransactionsComponent', () => {
    let fixture: ComponentFixture<SearchTransactionsComponent>;
    let component: SearchTransactionsComponent;
    let matDialogRef: jasmine.SpyObj<MatDialogRef<SearchTransactionsComponent, any>>;
    let cmsResolverService: jasmine.SpyObj<CmsResolverService>;
    let stateService: jasmine.SpyObj<StateService>;
    let apiService: jasmine.SpyObj<WebApisService>;
    let environmentConfig: any;

    beforeEach(async () => {
        matDialogRef = jasmine.createSpyObj('matDialogRef', ['close']);
        cmsResolverService = jasmine.createSpyObj('cmsResolverService', ['resolve']);
        cmsResolverService.resolve.and.resolveTo({ ShortDescription: 'fakeDescription' });
        stateService = jasmine.createSpyObj('state', ['go']);
        apiService = jasmine.createSpyObj('webApisService', ['setupSearchTransactions']);
        const fakeResponse = {
            maxDaysAllowedInSearch: 7,
            errors: [],
            transactionListItems: [],
            vehicleNickName: [],
            accountStatus: '',
            alerts: [],
            exception: '',
            sessionTimedOut: true
        };

        apiService.setupSearchTransactions.and.resolveTo(fakeResponse);
        environmentConfig = { accountActivityDefaultDaysInSearch: 7 };

        await TestBed
            .configureTestingModule({
                declarations: [
                    SearchTransactionsComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule, MatAutocompleteModule],
                providers: [
                    { provide: MatDialogRef, useFactory: () => matDialogRef },
                    { provide: CmsResolverService, useFactory: () => cmsResolverService },
                    { provide: StateService, useFactory: () => stateService },
                    { provide: ENVIRON_CONFIG, useFactory: () => environmentConfig },
                    { provide: WebApisService, useFactory: () => apiService }
                ]
            })
            .compileComponents();
        fixture = TestBed.createComponent(SearchTransactionsComponent);
        component = fixture.debugElement.componentInstance;


    });

    describe('close', () => {
        it('should close dialogRef', () => {

            component.close();

            expect(matDialogRef.close).toHaveBeenCalledTimes(1);
        });
    });


    describe('clearAll', () => {

        it('should clear variables', () => {
            component.licensePlate = '';
            component.dateTo = new Date();
            component.dateFrom = new Date();
            component.dateRangeType = ['TRANSACTION', 'POSTED'];            
            //act
            component.clearAll();
            //assert            
            expect(component.currentDateRangeType).toEqual(component.dateRangeType[0]);
        });
    });


    it('should call onSelectionChanged', async () => {

        //Assemble
        const selectedOption: ListItems = { hierarchy: 0, text: 'All Transactions', value: '' };

        //Act
        component.onSelectionChanged(selectedOption);

        //Assert
        expect(component.selection).toBe(selectedOption);
    });

    describe('ngOnInit', () => {

        beforeEach(() => {
            spyOn(component, 'setDefaultDateAndCms');
        });

        it('should call setDefaultDateAndCms 1 time', () => {

            //act
            component.ngOnInit();

            //assert
            expect(component.setDefaultDateAndCms).toHaveBeenCalledTimes(1);
        });
    });


    describe('infoSearch', () => {

        beforeEach(() => {
            spyOn<any>(component, 'infoSearch').and.callFake(() => { });
        });

        it('should call infoSearch 1 time', () => {
            //act
            component['infoSearch']();

            //assert
            expect(component.infoSearch).toHaveBeenCalledTimes(1);
        });
    });


    describe('setDefaultDateAndCms', () => {


        it('should call getInfo 1 time', () => {
            const spyOnInfo = spyOn(component, 'setDefaultDateAndCms');

            //act
            component.setDefaultDateAndCms();

            //assert
            expect(spyOnInfo).toHaveBeenCalledTimes(1);
        });
    });

    describe('autocorrectDateFrom', () => {
        it('should change to minimum date as needed', () => {
            component.minDate = new Date(2019, 1, 1);
            component.maxDate = new Date(2021, 4, 4);
            component.dateFrom = new Date(2018, 2, 2);
            component.dateTo = new Date(2020, 3, 3);

            //act
            component.autocorrectDateFrom();

            //assert
            expect(component.dateFrom.getTime()).toEqual(component.minDate.getTime());
        });

        it('should change to maximium date as needed', () => {
            component.minDate = new Date(2019, 1, 1);
            component.maxDate = new Date(2021, 4, 4);
            component.dateFrom = new Date(2022, 2, 2);
            component.dateTo = new Date(2023, 3, 3);

            //act
            component.autocorrectDateFrom();

            //assert
            expect(component.dateFrom.getTime()).toEqual(component.maxDate.getTime());
        });

        it('should change to to-date as needed', () => {
            component.minDate = new Date(2019, 1, 1);
            component.maxDate = new Date(2021, 4, 4);
            component.dateFrom = new Date(2020, 4, 4);
            component.dateTo = new Date(2020, 3, 3);

            //act
            component.autocorrectDateFrom();

            //assert
            expect(component.dateFrom.getTime()).toEqual(component.dateTo.getTime() - (7 * 24 * 60 * 60 * 1000));
        });
    });

    describe('autocorrectDateTo', () => {
        it('should change to minimum date as needed', () => {
            component.minDate = new Date(2019, 1, 1);
            component.maxDate = new Date(2021, 4, 4);
            component.dateFrom = new Date(2018, 2, 2);
            component.dateTo = new Date(2018, 3, 3);

            //act
            component.autocorrectDateTo();

            //assert
            expect(component.dateTo.getTime()).toEqual(component.minDate.getTime());
        });

        it('should change to maximium date as needed', () => {
            component.minDate = new Date(2019, 1, 1);
            component.maxDate = new Date(2021, 4, 4);
            component.dateFrom = new Date(2020, 2, 2);
            component.dateTo = new Date(2023, 3, 3);

            //act
            component.autocorrectDateTo();

            //assert
            expect(component.dateTo.getTime()).toEqual(component.maxDate.getTime());
        });

        it('should change to from-date as needed', () => {
            component.minDate = new Date(2019, 1, 1);
            component.maxDate = new Date(2021, 4, 4);
            component.dateFrom = new Date(2020, 4, 4);
            component.dateTo = new Date(2020, 3, 3);

            //act
            component.autocorrectDateTo();

            //assert
            expect(component.dateTo.getTime()).toEqual(component.dateFrom.getTime() + (7 * 24 * 60 * 60 * 1000));
        });
    });
});
