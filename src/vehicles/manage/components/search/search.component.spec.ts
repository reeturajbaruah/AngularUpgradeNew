import { } from 'jasmine';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { changesStable } from 'testing/utilities';
import { wait } from 'common/utilities';



describe('component: SearchComponent', () => {

    let fixture: ComponentFixture<SearchComponent>;
    let component: SearchComponent;
    let searchSpy: jasmine.Spy;

    const init = (debounce = 500) => {
        fixture = TestBed.createComponent(SearchComponent);
        component = fixture.debugElement.componentInstance;

        component.placeHolder = 'placeholder';
        component.debounce = debounce;
        component.search.subscribe(searchSpy);
    };

    beforeEach(async () => {

        searchSpy = jasmine.createSpy('searchSpy');

        await TestBed
            .configureTestingModule({
                declarations: [
                    SearchComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [],
                providers: [

                ]
            })
            .compileComponents();
    });

    describe('canary', () => {
        beforeEach(async () => {
            init();

            component.ngOnDestroy();

            await changesStable(fixture);
        });

        it('should pass', () => {
            expect(component).toBeDefined();
        });
    });

    describe('ngAfterViewInit', () => {
        beforeEach(async () => {
            init(null);

            await changesStable(fixture);
        });

        it('emits search term on keyup', async () => {

            const element = fixture.debugElement.nativeElement as HTMLElement;
            const input = element.querySelector('input');

            input.value = 'searchTerm';
            input.dispatchEvent(new KeyboardEvent('keyup'));

            await wait(1000);

            expect(searchSpy).toHaveBeenCalledWith('searchTerm');

        });
        
    });
});
