import { DatePipe } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StateService } from '@uirouter/angular';
import { FrameComponent } from 'accountActivity/frame/frame.component';
import { AccountActivityService, WebApisService } from 'accountActivity/services';
import { DialogService } from 'common/services';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { } from 'jasmine';
import { PipesModule } from 'pipes/module';
import { ReceiptDetailsComponent } from './receiptDetails.component';
import { ReceiptsComponent } from './receipts.component';

describe('component: ReceiptsComponent', () => {

    let fixture: ComponentFixture<ReceiptsComponent>;
    let component: ReceiptsComponent;
    let service: jasmine.SpyObj<WebApisService>;
    let parent: FrameComponent;
    let state: StateService;
    let datePipe: jasmine.SpyObj<DatePipe>;
    let accountActivityService: jasmine.SpyObj<AccountActivityService>;
    let dialogService: jasmine.SpyObj<DialogService>;
    let environmentConfig: any;

    beforeEach(async () => {
        parent = {} as FrameComponent;
        state = jasmine.createSpyObj('state', ['go']);
        service = jasmine.createSpyObj('webApisService', ['setupReceipts', 'receiptDetails']);
        datePipe = jasmine.createSpyObj('datePipe', ['transform']);
        datePipe.transform.and.returnValue('2022/01/04');
        dialogService = jasmine.createSpyObj('dialogService', ['openSliderFilled']);
        accountActivityService = jasmine.createSpyObj('accountActivityService', ['DEFAULT_LATEST_ACTIVITY_SEARCH']);

        const fakeResponse: any = {
            accountStatus: '',
            alerts: [],
            errors: [],
            exception: '',
            receiptHeaders: [0, '2021-08-04T11:11:38', 40240433449, 'ADD VEHICLE'],
            securityIssue: false,
            sessionTimedOut: true,
            webVersion: '1.0.0.7982.30144'
        };
        const fakeRequest: any = {
            fmonth: '1',
            fday: '21',
            fyear: '2021',
            tmonth: '12',
            tday: '21',
            tyear: '2021'
        };

        service.setupReceipts.and.resolveTo(fakeResponse);

        const fakeResponse2: any = {
            accountStatus: '',
            accountTrans: [],
            alerts: [],
            companyName: '',
            csrId: '-24057',
            depositTrans: [],
            errors: [],
            exception: '',
            homePhoneNumber: '',
            mobilePhoneNumber: '',
            name: '',
            paymentDetail: [],
            receiptDate: '',
            securityIssue: false,
            sessionTimedOut: false,
            userAddress: {
                addressOne: ''
            } as any,
            username: '',
            webVersion: '1.0.0.7982.30144',
            workPhoneNumber: ''


        };

        service.receiptDetails.and.resolveTo(fakeResponse2);

        environmentConfig = { accountActivityMaxDaysInSearch: 10, accountActivityDefaultDaysInSearch: 7 };

        await TestBed
            .configureTestingModule({
                declarations: [
                    ReceiptsComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: StateService, useFactory: () => state },
                    { provide: WebApisService, useFactory: () => service },
                    { provide: FrameComponent, useFactory: () => parent },
                    { provide: DialogService, useFactory: () => dialogService },
                    { provide: AccountActivityService, useFactory: () => accountActivityService },
                    { provide: DatePipe, useFactory: () => datePipe },
                    { provide: ENVIRON_CONFIG, useFactory: () => environmentConfig }
                ]
            })
            .compileComponents();
        fixture = TestBed.createComponent(ReceiptsComponent);
        component = fixture.debugElement.componentInstance;

    });


    describe('openTollDetailsModal', () => {
        it('should open a sliding modal with toll details', async () => {
            await component.openDetailsReceipt('40242428268');

            expect(dialogService.openSliderFilled).toHaveBeenCalledWith(ReceiptDetailsComponent,
                jasmine.any(Object),
                jasmine.objectContaining({ title: jasmine.any(String) }));
        });

        it('should call receiptDetails', async () => {
            await component.openDetailsReceipt('40242428268');

            expect(service.receiptDetails).toHaveBeenCalled();
        });

    });


    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });
    });


    describe('ngOnInit', () => {

        it('should call infoSearch', async () => {
            spyOn(component, 'infoSearch');

            await component.ngOnInit();

            expect(component.infoSearch).toHaveBeenCalled();
        });
    });


    it('should call infoSearch', async () => {
        component.infoSearch('01/01/2020', '12/01/2021');
        expect(service.setupReceipts).toHaveBeenCalled();
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
