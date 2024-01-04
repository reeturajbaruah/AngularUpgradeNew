import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { stateNames as accountActivityStates } from 'accountActivity/constants';
import { FrameComponent } from 'accountActivity/frame/frame.component';
import { AccountActivityService, WebApisService } from 'accountActivity/services';
import { } from 'jasmine';
import { GetYearlySummaryInfoRequest, SetupYearlyPageResponse, GetYearlySummaryInfoResponse, AccountSummaryInfo, EZTAGSummaryInfo } from 'accountActivity/interfaces';
import { YearlyComponent } from './yearly.component';
import { CurrentUserService, DownloadService, ResponseErrorService } from 'common/services';
import { SiteCoreItem } from '../../cms/cms.module';
import { ENVIRON_CONFIG } from 'common/upgrades';

describe('component: yearlyComponent', () => {

    let accountActivityService: jasmine.SpyObj<AccountActivityService>;
    let service: jasmine.SpyObj<WebApisService>;
    let fixture: ComponentFixture<YearlyComponent>;
    let component: YearlyComponent;
    let parent: FrameComponent;
    let currentUserService: CurrentUserService;
    let responseErrorService: ResponseErrorService;
    let environmentConfig: {
        heedLargeAccountFlag: boolean;
    };

    beforeEach(async () => {
        currentUserService = jasmine.createSpyObj('currentUserService', ['getCurrentUser']);
        responseErrorService = jasmine.createSpyObj('responseErrorService', ['displayToast']);            
        (responseErrorService.displayToast as jasmine.Spy).and.returnValue(true);

        service = jasmine.createSpyObj('service', ['setupYearlyPage', 'getYearlySummary']);
        const fakeResponse: SetupYearlyPageResponse = {
            dates: ['2020'],
            accountStatus: '',
            errors: [],
            alerts: [],
            exception: '',
            sessionTimedOut: true
        };
        const fakeResponse2: GetYearlySummaryInfoResponse = {
            acctSummary: [],
            tagSummary: [],
            accountStatus: '',
            errors: [],
            alerts: [],
            exception: '',
            sessionTimedOut: true
        };

        service.setupYearlyPage.and.resolveTo(fakeResponse);
        service.getYearlySummary.and.resolveTo(fakeResponse2);
        parent = {} as FrameComponent;
        environmentConfig = { heedLargeAccountFlag: true };

        await TestBed
            .configureTestingModule({
                declarations: [
                    YearlyComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [],
                providers: [
                    { provide: FrameComponent, useFactory: () => parent },
                    { provide: AccountActivityService, useFactory: () => accountActivityService },
                    { provide: WebApisService, useFactory: () => service },
                    { provide: CurrentUserService, useFactory: () => currentUserService },
                    { provide: ResponseErrorService, useFactory: () => responseErrorService },
                    { provide: ENVIRON_CONFIG, useFactory: () => environmentConfig }
                ]
            })
            .compileComponents();
        fixture = TestBed.createComponent(YearlyComponent);
        component = fixture.debugElement.componentInstance;
        component.cmsContent = {
            ShortDescription: ''
        };   

    });

    it('changing dropdown value should update selectedYear', () => {

        //Assemble
        const selectedOption = 2019;

        //Act
        component.onYearSelectionChanged(selectedOption);

        //Assert
        expect(component.selectedValue).toBe(2019);
    });

    
    it('should get list of years', waitForAsync(() => {
        component.selectedYear = 2021;
        component.getYearlySummaryInfoData(2021);
        const request: GetYearlySummaryInfoRequest = {
            year: 2021
        };
        service.getYearlySummary(request).then(() => {
            expect(service.getYearlySummary).toHaveBeenCalled();
        });
    }));
    

    //describe('getYearlySummary', () => {

    //    //beforeEach(() => {
    //    //    spyOn<any>(service, 'getYearlySummary').and.callFake(() => { });
    //    //});

    //    it('should call infoSearch 1 time', () => {
    //        //act
    //        const request: GetYearlySummaryInfoRequest = {
    //            year: 2021
    //        };
    //        //component.getYearlySummaryInfoData(2021);
    //        service.getYearlySummary(request);
    //        //const result = spyOn<any>(service, 'getYearlySummary').and.callFake(() => { });
    //        //assert
    //        expect(service.getYearlySummary).toHaveBeenCalledTimes(1);

    //    });
    //});

    describe('getYearlySummaryInfoData', () => {

        beforeEach(() => {
            spyOn<any>(component, 'getYearlySummaryInfoData').and.callFake(() => { });
        });

        it('should call infoSearch 1 time', () => {
            //act
            component.getYearlySummaryInfoData(2021);
            
            //assert
            expect(component.getYearlySummaryInfoData).toHaveBeenCalledTimes(1);
           
        });
    });

    describe('ngOnInit', () => {

        it('should call getYearlySummaryInfoData', waitForAsync (() => {
            spyOn(component, 'getYearlySummaryInfoData');

            component.ngOnInit().then(() => {


            expect(component.getYearlySummaryInfoData).toHaveBeenCalled();
             });
        }));
    });

});
