import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { PipesModule } from 'pipes/module';

import { CloseAccountReviewComponent } from './closeAccountReview.component';
import { CloseAccountFrameComponent } from '../closeAccountFrame/frame.component';
import { StateService } from '@uirouter/core';
import { MailingAddressService } from 'vehicles/shared';

describe('component: close-account-review', () => {

    let fixture: ComponentFixture<CloseAccountReviewComponent>;
    let component: CloseAccountReviewComponent;
    let parent: CloseAccountFrameComponent;
    let stateService: StateService;
    let mailingAddressService: jasmine.SpyObj<MailingAddressService>;

    beforeEach(async () => {
        parent = { stepNum: 0 } as CloseAccountFrameComponent;
        stateService = jasmine.createSpyObj('stateService', ['go']);
        mailingAddressService = jasmine.createSpyObj('MailingAddressService', ['clearData']);
        await TestBed
            .configureTestingModule({
                declarations: [
                    CloseAccountReviewComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: CloseAccountFrameComponent, useFactory: () => parent },
                    { provide: StateService, useFactory: () => stateService },
                    { provide: MailingAddressService, useFactory: () => mailingAddressService }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(CloseAccountReviewComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

    describe('ngOnInit', () => {
        it('should set stepNum to 3', () => {
            expect(parent.stepNum).not.toBe(3);

            component.ngOnInit();

            expect(parent.stepNum).toBe(3);
        });
    });

    describe('nextState', () => {
        it('should call stateService.go', () => {
            component.nextState({ name: 'testState' });

            expect(stateService.go).toHaveBeenCalledOnceWith('testState');
        });
    });
});
