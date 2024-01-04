import { TestBed, waitForAsync } from '@angular/core/testing';
import { ForgotUsernameService } from './forgotUsername.service';
import { TwoFAService } from '2FA/services/2FA.service';

describe('ForgotUsernameService', () => {
  let service: ForgotUsernameService;
  let twoFAService: jasmine.SpyObj<TwoFAService>;
  const result: any = {};

  beforeEach(() => {
    twoFAService = jasmine.createSpyObj('TwoFAService', ['sendVerificationCode']);

    twoFAService.sendVerificationCode.and.resolveTo(result);

    TestBed.configureTestingModule({
      providers: [
        ForgotUsernameService,
        { provide: TwoFAService, useValue: twoFAService }
      ]
    });
    service = TestBed.inject(ForgotUsernameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call sendVerificationCode', waitForAsync(() => {
    service.sendCode({ to: '' } as any).then(res => {
      expect(res).toEqual(result);
    });
  }));
});
