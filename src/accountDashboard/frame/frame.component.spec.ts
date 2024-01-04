import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { PipesModule } from 'pipes/module';
import { UserRoles } from 'constants/module';

import { FrameComponent } from './frame.component';
import { CurrentUser, CurrentUserService } from 'common/services';
import { SessionService } from 'common/services/session/session.service';

describe('component: account-dashboard-frame', () => {

    let fixture: ComponentFixture<FrameComponent>;
    let component: FrameComponent;

    let userRoles: UserRoles;
    let session: jasmine.SpyObj<any>;

    let currentUserService: jasmine.SpyObj<CurrentUserService>;

    beforeEach(async () => {

        session = jasmine.createSpyObj('session', ['userRole']);
        //session.userRole = 'fake user role';
        userRoles = new UserRoles();
        currentUserService = jasmine.createSpyObj('currentUserService', ['getCurrentUser']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    FrameComponent
                ],
                imports: [PipesModule],
                schemas: [NO_ERRORS_SCHEMA],
                providers: [
                    { provide: UserRoles, useFactory: () => userRoles },
                    { provide: SessionService, useFactory: () => session },
                    { provide: CurrentUserService, useFactory: () => currentUserService }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(FrameComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

    describe('ngOnInit', async () => {

        it('should set isAccountInvoiced to True if currentUserService.isAccountInvoiced returns true', async () => {

            currentUserService.getCurrentUser.and.returnValue({ isInvoiced: true } as CurrentUser);

            await component['ngOnInit']();

            expect(component.isAccountInvoiced).toBeTrue();
        });

        it('should set isPendingClosure to True if session.userRole = userRoles.pendingClosure', () => {

            //spyOn<any>(isInvoicedService, 'isAccountInvoiced').and.callFake(() => { true });

            //(session.userRole as jasmine.Spy).and.callFake(() => { return userRoles.pendingClosure; });
            session.userRole = userRoles.pendingClosure;

            //act
            component['ngOnInit']();
            //expect(session.userRole).toBe(userRoles.pendingClosure);
            //assert
            expect(component.isPendingClosure).toBeTrue();
        });

    });

});
