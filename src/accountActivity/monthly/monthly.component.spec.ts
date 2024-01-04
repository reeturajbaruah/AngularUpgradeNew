import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FrameComponent } from 'accountActivity/frame/frame.component';
import { WebApisService, AccountActivityService } from 'accountActivity/services';
import { CurrentUserService, DownloadService, ResponseErrorService } from 'common/services';
import { SetUpStatementsPageResponse } from 'accountActivity/interfaces';
import { ENVIRON_CONFIG } from 'common/upgrades';
import { } from 'jasmine';
import { MonthlyComponent } from './monthly.component';


describe('component: monthlyComponent', () => {

    let fixture: ComponentFixture<MonthlyComponent>;
    let component: MonthlyComponent;
    let parent: FrameComponent;
    let webApiService: jasmine.SpyObj<WebApisService>;
    let currentUserService: CurrentUserService;
    let responseErrorService: ResponseErrorService;
    let downloadService: jasmine.SpyObj<DownloadService>;
    let accountActivityService: jasmine.SpyObj<AccountActivityService>;
    let environmentConfig: {
        heedLargeAccountFlag: boolean;
    };
    let moment;

    beforeEach(async () => {
        parent = {} as FrameComponent;
        webApiService = jasmine.createSpyObj('webApiService', ['setUpStatementsPage','getMonthlyStatement']);
        downloadService = jasmine.createSpyObj('downloadService', ['download']);
        environmentConfig = { heedLargeAccountFlag: true };
        currentUserService = jasmine.createSpyObj('currentUserService', ['getCurrentUser']);

        
        const fakeResponse: SetUpStatementsPageResponse = {
            dates: ['March 2022', 'February 2022', 'January 2022', 'December 2021', 'November 2021', 'May 2021'],
            accountStatus: '',
            errors: [],
            alerts: [],
            exception: '',
            sessionTimedOut: true
        };

        webApiService.setUpStatementsPage.and.resolveTo(fakeResponse);

        await TestBed
            .configureTestingModule({
                declarations: [
                    MonthlyComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [],
                providers: [
                    { provide: FrameComponent, useFactory: () => parent },
                    { provide: WebApisService, useFactory: () => webApiService },
                    { provide: CurrentUserService, useFactory: () => currentUserService },
                    { provide: ResponseErrorService, useFactory: () => responseErrorService },
                    { provide: DownloadService, useFactory: () => downloadService },
                    { provide: AccountActivityService, useFactory: () => accountActivityService },
                    { provide: ENVIRON_CONFIG, useFactory: () => environmentConfig }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(MonthlyComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });
    });

    it('should get list of months', waitForAsync (() => {
        component.currentMonth = 'September 2021';
        component.monthSearch().then(() => {

        expect(webApiService.getMonthlyStatement).toHaveBeenCalled();
    });
}));
it('should call the download pdf method', waitForAsync (() => {
        component.getMonthlyStatementPdf().then(() => {
        expect(downloadService.download).toHaveBeenCalled();
    });
}));
it('should call the download excel method', waitForAsync (() => {
    component.getMonthlyStatementExcel().then(() => {
        expect(downloadService.download).toHaveBeenCalled();
    });
}));
    describe('monthSearch', () => {

        beforeEach(() => {
            spyOn<any>(component, 'monthSearch').and.callFake(() => { });
        });

        it('should call infoSearch 1 time', () => {
            //act
            component.monthSearch();

            //assert
            expect(component.monthSearch).toHaveBeenCalledTimes(1);

        });
    });

    describe('ngOnInit', () => {

        it('should call monthSearch', waitForAsync (() => {
            spyOn(component, 'monthSearch');

            component.ngOnInit().then(() => {

                expect(component.monthSearch).toHaveBeenCalled();
            });
        }));
    });


    describe('getTagId', () => {

        it('should test getTagId', () => {

            //assert

            expect(component.getTagId(0, 1, 'HCTR11940784')).toEqual('Total');

        });

        it('should test etTagId', () => {

            //assert

            expect(component.getTagId(0, 2, 'HCTR11940784')).toEqual('HCTR11940784');

        });
    });
   
});
