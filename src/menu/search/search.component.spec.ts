
import { } from 'jasmine';
import { NO_ERRORS_SCHEMA, } from '@angular/core';
import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { PipesModule } from 'pipes/module';
import { toArray } from 'rxjs/operators';
import { urlPaths as menuRoutes } from '../constants';
import { SearchComponent, InjectionValues, Google } from './search.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UrlService } from '@uirouter/core';
import { WindowRef } from '../../common/module';

describe('component: menu-account-dropdown-component', () => {

    let fixture: ComponentFixture<SearchComponent>;
    let component: SearchComponent;
    let dialogRef: jasmine.SpyObj<MatDialogRef<SearchComponent>>;
    let dialogData: InjectionValues;
    let urlService: jasmine.SpyObj<UrlService>;
    let windowMock: Window;
    let google: Google;
    let googleSearchElement: any;

    beforeEach(async () => {
        googleSearchElement = jasmine.createSpyObj(['prefillQuery']);
        google = {
            search: {
                cse: {
                    element: jasmine.createSpyObj(['render', 'getElement'])
                }
            }
        };
        windowMock = {} as Window;
        dialogData = { right: 55,  scrollY: 97 };
        dialogRef = jasmine.createSpyObj('MatDialogRef', ['close']);
        urlService = jasmine.createSpyObj(['url', 'path']);
        urlService.url.and.returnValue('fakeurl/bla?what=1');
        urlService.path.and.returnValue('/bla');

        (google.search.cse.element as jasmine.SpyObj<any>).getElement.and.returnValue(googleSearchElement);

        await TestBed
            .configureTestingModule({
                declarations: [
                    SearchComponent
                ],
                schemas: [NO_ERRORS_SCHEMA],
                imports: [PipesModule],
                providers: [
                    { provide: UrlService, useFactory: () => urlService },
                    { provide: MatDialogRef, useFactory: () => dialogRef },
                    { provide: MAT_DIALOG_DATA, useFactory: () => dialogData },
                    { provide: WindowRef, useFactory: () => windowMock },
                ]
            })
            .compileComponents();


        fixture = TestBed.createComponent(SearchComponent);
        component = fixture.debugElement.componentInstance;
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

    describe('ngOnInit', () => {

        it(`should set right`, async () => {

            component.ngOnInit();

            expect(component.right).toBe(55);
        });

        it(`should set scrollY`, async () => {

            component.ngOnInit();

            expect(component.scrollY).toBe(97);
        });

        it(`should close dialog if google not available withing 10 seconds`, fakeAsync(() => {

            component.ngOnInit();
            component.show$.subscribe();
            try {
                tick(10000);

            } catch {}

            expect(dialogRef.close).toHaveBeenCalledOnceWith();
        }));

        it(`should render google search if google available withing 10 seconds`, fakeAsync(() => {

            component.ngOnInit();
            component.show$.subscribe();

            tick(5000);

            windowMock['google'] = google;

            tick(6000);

            expect(dialogRef.close).not.toHaveBeenCalled();
            expect(google.search.cse.element.render).toHaveBeenCalledOnceWith({
                div: 'global-search-parent',
                tag: 'searchbox-only',
                gname: 'globalSearchBox',
                attributes: {
                    queryParameterName: 'searchQuery',
                    resultsUrl: 'fakeurl' + menuRoutes.Search,
                    autoCompleteMatchType: 'any',
                    autoCompleteMaxCompletions: 10,
                    filter: '1'
                }
            });
            expect(google.search.cse.element.getElement).not.toHaveBeenCalled();

            tick(5000);
        }));

        it(`should add placeholder and inputmode to google search input and call prefillQuery with ''`, fakeAsync(() => {

            const querySelectorSpy = jasmine.createSpy();
            const htmlElement = jasmine.createSpyObj(['setAttribute']);
            querySelectorSpy.and.returnValue(htmlElement);
            component.ngOnInit();
            component.show$.subscribe();

            tick(5000);

            windowMock['google'] = google;

            tick(6000);

            component['searchParent'] = {
                nativeElement: {
                    querySelector: querySelectorSpy
                }
            };

            tick(1000);

            expect(querySelectorSpy).toHaveBeenCalledWith('.gsc-input input');
            expect(htmlElement.setAttribute).toHaveBeenCalledTimes(2);
            expect(htmlElement.setAttribute).toHaveBeenCalledWith('placeholder', 'Search');
            expect(htmlElement.setAttribute).toHaveBeenCalledWith('inputmode', 'search');
            expect(google.search.cse.element.getElement).toHaveBeenCalledOnceWith('globalSearchBox');
            expect(googleSearchElement.prefillQuery).toHaveBeenCalledOnceWith('');
        }));
    });
});



