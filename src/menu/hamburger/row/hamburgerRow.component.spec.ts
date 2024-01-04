import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, } from '@angular/core';
import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { PipesModule } from 'pipes/module';
import { MatIconAvailabilityService } from 'common/services';
import { EMPTY, NEVER, Observable, of, Subject, timer } from 'rxjs';
import { wait } from 'common/utilities';
import { HamburgerRowComponent } from './hamburgerRow.component';
import { reduce, take } from 'rxjs/operators';

describe('component: menu-header-component', () => {

    let fixture: ComponentFixture<HamburgerRowComponent>;
    let component: HamburgerRowComponent;

    let matIcon: jasmine.SpyObj<MatIconAvailabilityService>;

    beforeEach(async () => {
        matIcon = jasmine.createSpyObj('matIconAvailabilityService', ['whenAvailable']);
        
        await TestBed
            .configureTestingModule({
                declarations: [
                    HamburgerRowComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: MatIconAvailabilityService, useFactory: () => matIcon },
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(HamburgerRowComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

    describe('ngOnInit', () => {

        it(`showRightArrow$ should emit true when matIcon.whenAvailable emits`, async () => {

            const subject = new Subject<void>();
            matIcon.whenAvailable.and.returnValue(subject.asObservable());

            expect(component.showRightArrow$).toBeUndefined();

            component.ngOnInit();

            expect(component.showRightArrow$).toBeInstanceOf(Observable);

            const result = component.showRightArrow$
                .pipe(
                    take(3),
                    reduce((acc, curr) => [...acc, curr], [])
                )
                .toPromise();

            subject.next();
            subject.next();
            subject.complete();
            subject.next();
            subject.next();
            subject.complete();

            expect(await result).toEqual([true, true]);
            expect(matIcon.whenAvailable).toHaveBeenCalledOnceWith('right-arrow');
        });
    });
});
