import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CurrentUser, CurrentUserService } from 'common/services';
import { PipesModule } from 'pipes/module';
import { BillingCardComponent } from './billingCard.component';


describe('component: BillingCardComponent', () => {

    let fixture: ComponentFixture<BillingCardComponent>;
    let component: BillingCardComponent;

    let currentUserService: jasmine.SpyObj<CurrentUserService>;

    beforeEach(async () => {

        currentUserService = jasmine.createSpyObj('currentUserService', ['getCurrentUser']);

        await TestBed
            .configureTestingModule({
                declarations: [
                    BillingCardComponent
                ],
                imports: [PipesModule],
                schemas: [NO_ERRORS_SCHEMA],
                providers: [
                    { provide: CurrentUserService, useFactory: () => currentUserService }
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(BillingCardComponent);
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

    });

});
