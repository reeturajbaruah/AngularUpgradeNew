import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ConfirmComponent } from './confirm.component';
import { CmsReplacementService } from 'cms/services';
import { StateService } from '@uirouter/angular';
import { ResponseErrorService } from 'common/services';
import { FormsModule } from '@angular/forms';
import { PipesModule } from 'pipes/module';
import { ActivateFacadeApiService } from '../../services/activate-facade-api/activate-facade-api.service';
import { stateNames as homeStateNames } from 'home/constants';
import { stateNames as rootStateNames } from 'constants/stateNames.constants';
import { WebStorageService } from '../../../../../common/services/webStorageService/webStorage.service';

describe('ConfirmComponent', () => {
  let component: ConfirmComponent;
  let fixture: ComponentFixture<ConfirmComponent>;
  let activateFacadeApiService: jasmine.SpyObj<ActivateFacadeApiService>;
  let cmsReplacementService: jasmine.SpyObj<CmsReplacementService>;
  let stateService: jasmine.SpyObj<StateService>;
  let responseErrorService: jasmine.SpyObj<ResponseErrorService>;
  let webStorage: jasmine.SpyObj<any>;

  beforeEach(async () => {
    activateFacadeApiService = jasmine.createSpyObj('ActivateFacadeApiService', ['finalizeTagActivation']);
    cmsReplacementService = jasmine.createSpyObj('CmsReplacementService', ['transformTemplate']);
    stateService = jasmine.createSpyObj('StateService', ['go']);
    responseErrorService = jasmine.createSpyObj('ResponseErrorService', ['displayAlertsFromResponse', 'displayErrorsFromResponse']);
    webStorage = jasmine.createSpyObj('webStorage', ['getValue', 'removeEntry']);

    await TestBed.configureTestingModule({
      declarations: [ConfirmComponent],
      imports: [FormsModule, PipesModule],
      providers: [
        { provide: ActivateFacadeApiService, useFactory: () => activateFacadeApiService },
        { provide: CmsReplacementService, useFactory: () => cmsReplacementService },
        { provide: StateService, useFactory: () => stateService },
        { provide: ResponseErrorService, useFactory: () => responseErrorService },
        { provide: WebStorageService, useFactory: () => webStorage }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmComponent);
    component = fixture.componentInstance;
    component.pageCms = {
      Title: 'Test title',
      ListLabel: 'Test label',
      Agreement: 'Test agreement',
      CheckboxLabel: 'Test label'
    } as any;
    fixture.detectChanges();
  });

  describe('canary', () => {
    it('should pass', () => {
      expect(true).toBeTrue();
    });
  });

  describe('ngOnInit', () => {
    beforeEach(() => {
      (webStorage.getValue as jasmine.Spy).and.returnValue({ transactionId: '123456', listOfVehicles: [] });
      cmsReplacementService.transformTemplate.and.returnValue('Test label 123456');
    });

    it('should call transformTemplate', () => {
      component.ngOnInit();

      expect(cmsReplacementService.transformTemplate).toHaveBeenCalled();
      expect(component.pageCms.ListLabel).toContain('123456');
    });
  });

  describe('onConfirmChange', () => {
    it('should set isConfirm to true', () => {
      component.onConfirmChange({ target: { checked: true } });
      expect(component.isConfirm).toBeTrue();
    });
  });

  describe('nextStep', () => {
    beforeEach(() => {
      activateFacadeApiService.finalizeTagActivation.and.resolveTo({ errors: [] });
    });

    it('should call finalizeTagActivation', () => {
      component.isConfirm = true;
      component.nextStep({});
      expect(activateFacadeApiService.finalizeTagActivation).toHaveBeenCalled();
    });
  });

  describe('nextStep with errors', () => {
    beforeEach(() => {
      activateFacadeApiService.finalizeTagActivation.and.resolveTo({ errors: [{}] });
      responseErrorService.displayErrorsFromResponse.and.resolveTo([]);
      responseErrorService.displayAlertsFromResponse.and.resolveTo([]);
    });

    it('should call displayErrorsFromResponse', fakeAsync(() => {
      component.isConfirm = true;
      component.nextStep({});
      tick();
      expect(responseErrorService.displayErrorsFromResponse).toHaveBeenCalled();
      expect(responseErrorService.displayAlertsFromResponse).toHaveBeenCalled();
    }));
  });

  describe('cancel', () => {
    beforeEach(() => {
      (webStorage.removeEntry as jasmine.Spy).and.returnValue(null);
      stateService.go.and.resolveTo({} as any);
    });

    it('should call removeEntry and stateService.go with rootStateNames.manageVehicles', () => {
      component.cancel(true);
      expect(webStorage.removeEntry).toHaveBeenCalled();
      expect(stateService.go).toHaveBeenCalledWith(rootStateNames.manageVehicles);
    });

    it('should call removeEntry and stateService.go with homeStateNames.Frame', () => {
      component.cancel(false);
      expect(webStorage.removeEntry).toHaveBeenCalled();
      expect(stateService.go).toHaveBeenCalledWith(homeStateNames.Frame);
    });
  });

  describe('prevStep', () => {
    beforeEach(() => {
      stateService.go.and.resolveTo({} as any);
    });

    it('should call go', () => {
      component.prevStep({});
      expect(stateService.go).toHaveBeenCalled();
    });
  });
});
