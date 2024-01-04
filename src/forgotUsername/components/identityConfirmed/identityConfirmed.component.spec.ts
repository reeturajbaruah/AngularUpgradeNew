import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IdentityConfirmedComponent } from './identityConfirmed.component';
import { StateService, UIRouterGlobals } from '@uirouter/angular';
import { stateNames as forgotPasswordStateNames } from 'forgotPassword/constants';

describe('IdentityConfirmedComponent', () => {
  let component: IdentityConfirmedComponent;
  let fixture: ComponentFixture<IdentityConfirmedComponent>;
  let uiRouterGlobals: jasmine.SpyObj<UIRouterGlobals>;
  let stateService: jasmine.SpyObj<StateService>;

  beforeEach(async () => {
    uiRouterGlobals = jasmine.createSpyObj('UIRouterGlobals', null, { params: { loginId: 'test' } });
    stateService = jasmine.createSpyObj('StateService', ['go']);

    stateService.go.and.resolveTo({} as any);

    await TestBed.configureTestingModule({
      declarations: [IdentityConfirmedComponent],
      providers: [
        { provide: UIRouterGlobals, useValue: uiRouterGlobals },
        { provide: StateService, useValue: stateService }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentityConfirmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('goToForgetPassword', () => {
    it('should call stateService.go', () => {
      component.goToForgetPassword();

      expect(stateService.go).toHaveBeenCalledWith(forgotPasswordStateNames.FindAccount);
    });
  });
});
