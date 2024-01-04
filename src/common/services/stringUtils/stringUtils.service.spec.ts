import { TestBed } from '@angular/core/testing';

import { StringUtilsService } from './stringUtils.service';

describe('StringUtilsService', () => {
  let service: StringUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StringUtilsService]
    });
    service = TestBed.inject(StringUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('includes', () => {
    it('should return false', () => {
      expect(service.includes('', 'test', null)).toBe(false);
      expect(service.includes('', null, null)).toBe(false);
    });

    it('should return true', () => {
      expect(service.includes('test', 'test', 0)).toBe(true);
    });
  });

  describe('getUrlParameter', () => {
    it('should be created', () => {
      const qs = 'MAPP_Login_Android=test_android_message&MAPP_Login_IOS=test_ios_message&MAPP_Login_Other=test_other_message&MAPP_Login_Browser=test_browser_message';
      expect(service.getUrlParameter('MAPP_Login_Android', qs)).toBe('test_android_message');
    });
  });


  describe('getParameterArray', () => {
    it('should return array', () => {
      expect(service.getParameterArray('2 Axles (Cash)=1.52')).toBeInstanceOf(Array);
    });
  });

  describe('getParameterObject', () => {
    it('should return empty object', () => {
      expect(service.getParameterObject('')).toEqual({});
    });

    it('should return object', () => {
      expect(service.getParameterObject('test1=test&test2=test')).toEqual({ test1: 'test', test2: 'test' });
    });
  });
});
