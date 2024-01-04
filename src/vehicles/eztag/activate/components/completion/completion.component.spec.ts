import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletionComponent } from './completion.component';
import { CmsReplacementService } from 'cms/services';
import { StateService } from '@uirouter/angular';
import { FormsModule } from '@angular/forms';
import { PipesModule } from 'pipes/module';
import { AuthenticationService } from 'authentication/authenticationService/authentication.service';
import { WebStorageService } from '../../../../../common/services/webStorageService/webStorage.service';

describe('CompletionComponent', () => {
  let component: CompletionComponent;
  let fixture: ComponentFixture<CompletionComponent>;
  let cmsReplacementService: jasmine.SpyObj<CmsReplacementService>;
  let stateService: jasmine.SpyObj<StateService>;
  let webStorage: jasmine.SpyObj<any>;
  let authenticationService: jasmine.SpyObj<AuthenticationService>;

  beforeEach(async () => {
    cmsReplacementService = jasmine.createSpyObj('CmsReplacementService', ['transformTemplate']);
    stateService = jasmine.createSpyObj('StateService', ['go']);
    webStorage = jasmine.createSpyObj('webStorage', ['getValue', 'removeEntry']);
    authenticationService = jasmine.createSpyObj('AuthenticationService', ['isAuthenticated']);

    await TestBed.configureTestingModule({
      declarations: [ CompletionComponent ],
      imports: [FormsModule, PipesModule],
      providers: [
        { provide: CmsReplacementService, useFactory: () => cmsReplacementService },
          { provide: StateService, useFactory: () => stateService },
          { provide: WebStorageService, useFactory: () => webStorage },
        { provide: AuthenticationService, useFactory: () => authenticationService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletionComponent);
    component = fixture.componentInstance;
    component.pageCms = {
      CompletionTitle: undefined,
      EzTagList: 'Test label',
      Agreement: undefined,
      CancelLoggedIn: undefined
    } as any;
    fixture.detectChanges();
  });

  describe('canary', () => {
    it('should pass', () => {
      expect(true).toBeTrue();
    });
  });

  describe('onInit', () => {
    beforeEach(() => {
      (webStorage['getValue'] as jasmine.Spy).and.returnValue({listOfVehicles: [{fullTagId: 'HctraTest1'}, {fullTagId: 'HctraTest2'}]});
    cmsReplacementService.transformTemplate.and.returnValue('HctraTest1, HctraTest2');

    });

    it('should pageCms.EzTagList string ,', () => {
      component.pageCms['EzTagList'] = '';
      component.ngOnInit();
      expect(component.pageCms.EzTagList).toContain(',');
    });
  });

  describe('nextStep', () => {
    beforeEach(() => {
      stateService.go.and.resolveTo({} as any);
    });

    it('should call stateService.go', () => {
      component.nextStep({});
      expect(stateService.go).toHaveBeenCalled();
    });
  });

  describe('cancel', () => {
    beforeEach(() => {
      stateService.go.and.resolveTo({} as any);
    });

    it('should call stateService.go', () => {
      component.cancel({});
      expect(stateService.go).toHaveBeenCalled();
    });
  });
});
