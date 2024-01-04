import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { PipesModule } from 'pipes/module';
import { CharmsComponent } from './charms.component';
import { take } from 'rxjs/operators';


describe('component: menu-charms-component', () => {

    let fixture: ComponentFixture<CharmsComponent>;
    let component: CharmsComponent;

    beforeEach(async () => {

        await TestBed
            .configureTestingModule({
                declarations: [
                    CharmsComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [

                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(CharmsComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

    describe('ngOnInit', () => {

        it('should emit exists true', async () => {

            const exists = component.exists.pipe(take(1)).toPromise();

            component.ngOnInit();

            expect(await exists).toBe(true);
        });
    });

    describe('ngOnDestroy', () => {

        it('should emit exists false', async () => {

            const exists = component.exists.pipe(take(1)).toPromise();

            component.ngOnDestroy();

            expect(await exists).toBe(false);
        });
    });
});
