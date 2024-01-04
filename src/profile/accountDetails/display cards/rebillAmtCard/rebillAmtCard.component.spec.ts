import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { StateService } from '@uirouter/angular';

import { RebillAmtCardComponent } from './rebillAmtCard.component';
import { CurrentUser, CurrentUserService } from '../../../../common/services';

describe('component: rebill-amt-card', () => {

    let fixture: ComponentFixture<RebillAmtCardComponent>;
    let component: RebillAmtCardComponent;
    let state: StateService;
    let currentUserSvc: jasmine.SpyObj<CurrentUserService>;

    beforeEach(async () => {
        state = jasmine.createSpyObj('uiStateService', ['go', 'get']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    RebillAmtCardComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [],
                providers: [
                    { provide: StateService, useFactory: () => state },
                    { provide: CurrentUserService, useFactory: () => currentUserSvc },
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(RebillAmtCardComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

    describe('goToUpdateRebillAmt', () => {
        ['hello', 2222, { fakeThing: 'fake val' }]
            .forEach(accountDataStateParam => {
                it(`should call state.go with profileStateNames.UpdateReplenishmentAmount and state param as ${accountDataStateParam}`,
                    async () => {
                        //assemble
                        component.accountData = accountDataStateParam as any;

                        //act
                        await component.goToUpdateRebillAmt();

                        //assert
                        expect(state.go).toHaveBeenCalledTimes(1);
                        expect(state.go).toHaveBeenCalledWith('UpdateReplenishAmount', Object({ accountData: accountDataStateParam }));
                    });
            });
    });
});
