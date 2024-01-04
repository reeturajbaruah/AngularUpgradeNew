import { } from 'jasmine';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import {
    CommonModule as HctraCommonModule
} from 'common/module';


import { PipesModule } from 'pipes/module';
import { FormsModule } from '@angular/forms';

import { PlanDetailComponent } from './planDetail.component';
import { GridComponent } from './grid.component';
import { PaymentPlanInfo } from '../services';

import { DateWithTimeZoneService, DialogService, GenericRepoService } from 'common/services';

import { CmsIds } from '../constants';

import { MediaObserver } from '@angular/flex-layout';
import { PaymentDetailsComponent } from '../paymentDetails/paymentDetails.component';
import { OperatingSystemSnifferService } from 'common/services';

describe('PlanDetailComponent', () => {

    let grid: GridComponent;
    let dateWithTimeZoneService;
    let genericRepo: any;
    let cmsIds: CmsIds;
    let operatingSystemSnifferService;
    let mediaObserver: MediaObserver;
    let dialogService: DialogService;
    let fixture: ComponentFixture<PlanDetailComponent>;
    let component: PlanDetailComponent;

    beforeEach((() => {

        dialogService = jasmine.createSpyObj('dialogService', ['openSliderFilled']);
        dateWithTimeZoneService = jasmine.createSpyObj('DateWithTimeZoneService', ['withoutOffsetToCentral']);
        operatingSystemSnifferService = jasmine.createSpyObj('operatingSystemSnifferService', ['isDesktopOs']);

        mediaObserver = jasmine.createSpyObj('mediaObserver', ['isActive']);

        genericRepo = {
            dataFactory: {
                getCmsPageById: jasmine.createSpy('getCmsPageById'),
            }
        };
        genericRepo.dataFactory.getCmsPageById.and.resolveTo({
            cmsResponse: JSON.stringify({
                ShortDescription: ''
            })
        });
        

        grid = {
            onClickGrid: jasmine.createSpy() as any,
            cms: {
                data: {
                    paymentLatePopup: 'popup'
                },
                pdf: {}
            },
            selectPlan: jasmine.createSpy() as any
        } as GridComponent;
            
        cmsIds = new CmsIds();

        TestBed
            .configureTestingModule({
                declarations: [PlanDetailComponent],
                imports: [HctraCommonModule, PipesModule, FormsModule],
                providers: [
                    { provide: GridComponent, useFactory: () => grid },
                    { provide: DateWithTimeZoneService, useFactory: () => dateWithTimeZoneService },
                    { provide: GenericRepoService, useFactory: () => genericRepo },
                    { provide: CmsIds, useFactory: () => cmsIds },
                    { provide: OperatingSystemSnifferService, useFactory: () => operatingSystemSnifferService },
                    { provide: DialogService, useFactory: () => dialogService },
                    { provide: MediaObserver, useFactory: () => mediaObserver }
                ],
                //this will allow for nested components to be ignored. 
                //use when you don't need to interact with the sub component in the tests
                schemas: [NO_ERRORS_SCHEMA]
            })
            .compileComponents();

        fixture = TestBed.createComponent(PlanDetailComponent);
        component = fixture.debugElement.componentInstance;

        component.plate = {
            isActive: true,
            licPlateNumber: 'abc1234',
            licPlateState: 'TX',
            paymentPlans: []
        };
        component.alertContent = '';        
        component.isActive = true;        

        

        component.ngOnInit();
        fixture.detectChanges();
    }));
    
        
    describe('init', () => {

        it('should define call CMS to get data', () => {
            expect(genericRepo.dataFactory.getCmsPageById).toHaveBeenCalled();
        });

    });

    describe('infoIconText', () => {

        it('provided correct text', () => {
            const plan = {} as PaymentPlanInfo;

            plan.status = 'Anything';
            plan.nextInstallmentDate = '1/2/2021';
            component.currentDate = '1/1/2021';

            expect(component.infoIconText(plan)).toBeFalsy();

            plan.status = 'Open';
            plan.nextInstallmentDate = '1/2/2021';
            component.currentDate = '1/3/2021';//late

            expect(component.infoIconText(plan)).toBe(component.cms.data.paymentLatePopup);

            plan.status = 'Anything';
            plan.nextInstallmentDate = '1/2/2021';
            component.currentDate = '1/3/2021';//late

            expect(component.infoIconText(plan)).toBeFalsy();
        });

    });

    describe('viewDetails', () => {
        it('opens slider in mobile', () => {
            const plan = {} as PaymentPlanInfo;

            (mediaObserver.isActive as jasmine.Spy).and.returnValue(true);

            component.viewDetails(plan, 'lt-md');

            expect(dialogService.openSliderFilled).toHaveBeenCalled();

            const args = (dialogService.openSliderFilled as jasmine.Spy).calls.argsFor(0);

            expect(args[0]).toBe(PaymentDetailsComponent);
            expect(args[1]).toEqual({
                details: plan,
                cmsContent: component.cms,
                isEzTagFlow: component.isEzTagFlow
            });
            expect(args[2]).toEqual({
                title: 'Plan Details'
            });

        });

        it('does not open slider when not in mobile', () => {
            const plan = {} as PaymentPlanInfo;
            component.warningBoxFlag = false;
            (mediaObserver.isActive as jasmine.Spy).and.returnValue(false);

            component.viewDetails(plan, 'lt-md');

            expect(dialogService.openSliderFilled).not.toHaveBeenCalled();
        });
    });

    describe('getCorrectTimeZoneTime', () => {
        it('getCorrectTimeZoneTime should return values for contents', () => {
            const time = '2017-07-14T23:59:59';

            dateWithTimeZoneService.withoutOffsetToCentral.and.returnValue('some value');
            const value = component.getCorrectTimeZoneTime(time);
            expect(dateWithTimeZoneService.withoutOffsetToCentral).toHaveBeenCalled();
            expect(value).toEqual('some value');
        });
    });

    describe('isPassedDueDate', () => {
        it('isPassedDueDate return FALSE when currentDate is less than dueDate', () => {
            const currentDate = '2019-10-29';
            const dueDate = '2020-07-14';
            const value = component.isPassedDueDate(currentDate, dueDate);
            expect(value).toBe(false);
        });

        it('isPassedDueDate return FALSE if it"s the same date', () => {
            const currentDate = '2019-10-28';
            const dueDate = '2019-10-28';
            const value = component.isPassedDueDate(currentDate, dueDate);
            expect(value).toBe(false);
        });

        it('isPassedDueDate return TRUE when currentDate DATE ONLY is more than dueDate', () => {
            const currentDate = '2018-10-29';
            const dueDate = '2018-10-14';
            const value = component.isPassedDueDate(currentDate, dueDate);
            expect(value).toBe(true);
        });

        it('isPassedDueDate return TRUE when currentDate MONTH AND DATE ONLY is more than dueDate', () => {
            const currentDate = '2019-11-28';
            const dueDate = '2019-10-28';
            const value = component.isPassedDueDate(currentDate, dueDate);
            expect(value).toBe(true);
        });

        it('isPassedDueDate return TRUE when currentDate YEAR, MONTH AND DATE ONLY is more than dueDate', () => {
            const currentDate = '2020-11-28';
            const dueDate = '2019-10-28';
            const value = component.isPassedDueDate(currentDate, dueDate);
            expect(value).toBe(true);
        });
    });

    describe('onClick', () => {        

        const defaultPlan = {
            paymentPlanId: 1234
        } as PaymentPlanInfo;

        describe('Desktop', () => {
            it('should click because DESKTOP view', () => {                
                operatingSystemSnifferService.isDesktopOs.and.returnValue(true);
                
                component.onClickPlanDesktop(defaultPlan);
                component.onClickPlanMobile(defaultPlan);

                expect(grid.onClickGrid).toHaveBeenCalledWith(defaultPlan.paymentPlanId);
                expect(grid.onClickGrid).toHaveBeenCalledTimes(1);
            });
        });

        describe('Mobile', () => {
            it('should not click because DESKTOP view', () => {
                operatingSystemSnifferService.isDesktopOs.and.returnValue(false);

                component.onClickPlanDesktop(defaultPlan);
                component.onClickPlanMobile(defaultPlan);

                expect(grid.onClickGrid).toHaveBeenCalledWith(defaultPlan.paymentPlanId);
                expect(grid.onClickGrid).toHaveBeenCalledTimes(1);
            });
        });
    });

    describe('updateToggleFlag', () => {
        it('should toggle', () => {
            component.updateToggleFlag();
            expect(component.warningBoxFlag).toEqual(true);
            component.updateToggleFlag();
            expect(component.warningBoxFlag).toEqual(false);
        });
    });

    describe('setdeafultTooltip', () => {
        it('should check the tooltip string is returned', () => {
            component.cms.data.defaultedBody = 'plan Default body';

            const mockTooltip = component.cms.data.defaultedBody;
            const tooltip = component.setdeafultTooltip();

            expect(tooltip).toEqual(mockTooltip);
        });
    });
});
