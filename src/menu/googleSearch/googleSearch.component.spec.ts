import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleSearchComponent } from './googleSearch.component';
import { WindowRef } from 'common/module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TransitionService } from '@uirouter/core';

describe('GoogleSearchComponent', () => {
  let component: GoogleSearchComponent;
  let fixture: ComponentFixture<GoogleSearchComponent>;
  let rootScope: jasmine.SpyObj<any>;
  let $window: jasmine.SpyObj<any>;
  let transitionService: jasmine.SpyObj<TransitionService>;
  let location: jasmine.SpyObj<Location>;
  // let rootScopeEventHandlers: any;

  beforeEach(async () => {
    rootScope = jasmine.createSpyObj('rootScope', ['$on', '$broadcast']);
    location = jasmine.createSpyObj('location', ['replaceState']);
    $window = jasmine.createSpyObj('$window', null, ['location', 'google']);
    transitionService = jasmine.createSpyObj('transitionService', ['onBefore']);

    await TestBed.configureTestingModule({
      declarations: [GoogleSearchComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: '$rootScope', useFactory: () => rootScope },
        { provide: '$location', useFactory: () => location },
        { provide: WindowRef, useFactory: () => $window },
        { provide: TransitionService, useFactory: () => transitionService },
        { provide: Location, useFactory: () => location }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    // rootScope.$on.and.callFake((key, func) => {

    //   rootScopeEventHandlers[key] = rootScopeEventHandlers[key] || [];
    //   rootScopeEventHandlers[key].push(func);

    //   return () => { };
    // });
    $window = {
      google: {
        search: {
          cse: {
            element: jasmine.createSpyObj('element', ['render'])
          }
        }
      },
      location: {
        hash: 'TO BE MOCKED'
      }
    } as any;
    location = jasmine.createSpyObj('location', ['path', 'hash']);

    fixture = TestBed.createComponent(GoogleSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('canary', () => {
    it('should pass', async () => {
      expect(true).toBe(true);
    });
  });

  describe('ngAfterViewInit()', () => {
    it('should call Google CSE library with readonly configurations', () => {
      //Act
      component.ngAfterViewInit();

      //Assert
      expect($window['google'].search.cse.element['render']).toHaveBeenCalled();
      expect($window['google'].search.cse.element['render']).toHaveBeenCalledWith(component['componentConfig'], component['optComponentConfig']);
    });
  });

    
  describe('ngOnInit()', () => {

    it('should broadcast to show global search bar', () => {
      //Act
      component.ngOnDestroy();

      //Assert
      expect(rootScope.$broadcast).toHaveBeenCalled();
      expect(rootScope.$broadcast).toHaveBeenCalledWith('showGlobalSearchBar', { shouldShow: false });
    });
  });

  describe('ngOnDestroy()', () => {

    it('should broadcast to show global search bar', () => {
      //Act
      component.ngOnDestroy();

      //Assert
      expect(rootScope.$broadcast).toHaveBeenCalled();
      expect(rootScope.$broadcast).toHaveBeenCalledWith('showGlobalSearchBar', { shouldShow: true });
    });
  });
});
