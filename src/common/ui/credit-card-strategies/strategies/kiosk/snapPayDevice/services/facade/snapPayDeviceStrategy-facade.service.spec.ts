import { TestBed, waitForAsync } from '@angular/core/testing';
import { SnapPayDeviceStrategyFacadeService } from './snapPayDeviceStrategy-facade.service';
import { SnapPayDeviceStrategyService } from '../api/snapPayDeviceStrategy-api.service';
import { of } from 'rxjs';

describe('SnapPayDeviceStrategyFacadeService', () => {
  let service: SnapPayDeviceStrategyFacadeService;
  let snapPayDeviceStrategyService: jasmine.SpyObj<SnapPayDeviceStrategyService>;
  const result: any = {};

  beforeEach(() => {
    snapPayDeviceStrategyService = jasmine.createSpyObj('SnapPayDeviceStrategyService', ['postRequestCard', 'postRequestPinPad', 'postCreateSession', 'postEndSession', 'GetStatus']);

    snapPayDeviceStrategyService.postRequestCard.and.returnValue(of(result) as any);
    snapPayDeviceStrategyService.postRequestPinPad.and.returnValue(of(result) as any);
    snapPayDeviceStrategyService.postCreateSession.and.returnValue(of(result) as any);
    snapPayDeviceStrategyService.postEndSession.and.returnValue(of(result) as any);
    snapPayDeviceStrategyService.GetStatus.and.returnValue(of(result) as any);

    TestBed.configureTestingModule({
      providers: [
        SnapPayDeviceStrategyFacadeService,
        { provide: SnapPayDeviceStrategyService, useValue: snapPayDeviceStrategyService }
      ]
    });
    service = TestBed.inject(SnapPayDeviceStrategyFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('postRequestCard', () => {
    it('should call postRequestCard', waitForAsync(() => {
        service.postRequestCard('', '').then(res => {
          expect(res).toEqual(result);
          expect(snapPayDeviceStrategyService.postRequestCard).toHaveBeenCalled();
        });
      }));
  });

  describe('postPinPad', () => {
    it('should call postRequestPinPad', waitForAsync(() => {
        service.postPinPad('', '').then(res => {
          expect(res).toEqual(result);
          expect(snapPayDeviceStrategyService.postRequestPinPad).toHaveBeenCalled();
        });
      }));
  });

  describe('postCreateSession', () => {
    it('should call postCreateSession', waitForAsync(() => {
        service.postCreateSession('').then(res => {
          expect(res).toEqual(result);
          expect(snapPayDeviceStrategyService.postCreateSession).toHaveBeenCalled();
        });
      }));
  });

  describe('postEndSession', () => {
    it('should call postEndSession', waitForAsync(() => {
        service.postEndSession('', '').then(res => {
          expect(res).toEqual(result);
          expect(snapPayDeviceStrategyService.postEndSession).toHaveBeenCalled();
        });
      }));
  });

  describe('GetStatus', () => {
    it('should call GetStatus', waitForAsync(() => {
        service.GetStatus('').then(res => {
          expect(res).toEqual(result);
          expect(snapPayDeviceStrategyService.GetStatus).toHaveBeenCalled();
        });
      }));
  });
});
