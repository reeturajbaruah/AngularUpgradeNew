import { } from 'jasmine';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexbookerComponent } from './flexbooker.component';
import { PipesModule } from 'pipes/module';
import { EventEmitter, NO_ERRORS_SCHEMA } from '@angular/core';
import { FlexbookerService } from './services/flexbooker.service';
import { take } from 'rxjs/operators';
import { WindowRef } from '../common/providers';

describe('component: Flexbooker', () => {

    let fixture: ComponentFixture<FlexbookerComponent>;
    let component: FlexbookerComponent;
    let flexbookerService: jasmine.SpyObj<FlexbookerService>;
    let windowRef: Window;

    beforeEach(async () => {

        flexbookerService = jasmine.createSpyObj('flexbookerService', ['getFlexbookerConfig']);
        windowRef = jasmine.createSpyObj('window', ['addEventListener']);
        (flexbookerService.getFlexbookerConfig as jasmine.Spy).and.returnValue({
            iframeBookingUrl: 'test URL',
            skipBooking: false,
            createAccountFlexbookerEnabled: false
        });

        TestBed.overrideComponent(
            FlexbookerComponent,
            {
                set: {
                    providers: [{
                        provide: FlexbookerService,
                        useValue: flexbookerService
                    }]
                }
            }
        );
        await TestBed
            .configureTestingModule({
                declarations: [
                    FlexbookerComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: WindowRef, useFactory: () => windowRef }
                ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(FlexbookerComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {
        it('should pass', () => {
            expect(true).toBe(true);
        });
    });

    describe('ngOnInit', () => {
        it('should receive config data', async () => {
            const event = new EventEmitter<string>();
            (windowRef.addEventListener as jasmine.Spy).and.returnValue(event.toPromise());
            const skipBooking = component.skipBooking.pipe(take(1)).toPromise();
            const bookingComplete = component.bookingComplete.pipe(take(1)).toPromise();
            //component.ngOnInit();

            const promise = component['ngOnInit']();
            event.emit('BookingComplete');
            event.complete();
            await promise;

            //Assert
            expect(flexbookerService.getFlexbookerConfig).toHaveBeenCalledTimes(1);
            expect(windowRef.addEventListener).toHaveBeenCalledTimes(1);
            expect(await skipBooking).toBe(false);
        });
    });

});
