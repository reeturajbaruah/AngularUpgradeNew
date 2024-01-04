import { } from 'jasmine';

import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';

import { FrameComponent } from './frame.component';
import { MissedATollService } from '../services';
import { WindowRef } from 'common/providers';


describe('MissedATollFrameComponent', () => {

    let fixture: ComponentFixture<FrameComponent>;
    let component: FrameComponent;

    // Injected into the component
    let missedATollService: MissedATollService;
    let windowRef: jasmine.SpyObj<Window>;

    beforeEach(async () => {
        missedATollService = jasmine.createSpyObj('missedATollService', ['setUserIsInWizardFlag', 'destroyViolationInformation']);
        windowRef = jasmine.createSpyObj('window', ['scrollTo']);

        await TestBed
            .configureTestingModule({
                declarations: [FrameComponent],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [FlexLayoutModule,
                    MatDividerModule],
                providers: [
                    { provide: MissedATollService, useFactory: () => missedATollService },
                    { provide: WindowRef, useFactory: () => windowRef }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(FrameComponent);
        component = fixture.debugElement.componentInstance;

        component.stateList = [{ stateCode: 'AR' }, { stateCode: 'TX' }];
        component.countryList = [{ countryCode: 'USA', displayName: 'USA' }, { countryCode: 'UGY', displayName: 'URAGUAY' }];
        component.cms = {
            Title: 'fakeTitle',
            Step1: 'fakeStep1',
            Step2: 'fakeStep2',
            Step3: 'fakeStep3',
            Step4: 'fakeStep4'
        };
    });


    describe('ngOnInit', () => {
        it('should have default values set from construction', () => {
            expect(component.cms.Title).toEqual('fakeTitle');
            expect(component.stepNum).toEqual(0);
            expect(component.emailAddress).toBeUndefined();
        });
    });

    describe('ngOnDestroy', () => {
        it('should clean up with some function calls', () => {
            component.ngOnDestroy();

            expect(missedATollService.destroyViolationInformation).toHaveBeenCalledTimes(1);
        });
    });

    describe('scrollToTop', () => {
        it('should toggle hidden flag and scroll to top of page', async () => {
            await component.scrollToTop();

            expect(component.isHidden).toBe(false);
            expect(windowRef.scrollTo).toHaveBeenCalledWith(0, 0);
        });
    });
});
