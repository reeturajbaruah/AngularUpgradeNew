import { TestBed } from '@angular/core/testing';
import { MaintenanceService } from './maintenance.service';
import { MaintenanceResponse } from 'common/models';
import { MaintenanceFeature } from 'constants/module';
import { MaintenanceConfigService } from '../maintenanceService/maintenanceConfig.service';
import { ArrayUtilService } from '../arrayUtil/arrayUtil.service';
import { StateService } from '@uirouter/core';
import { ResponseErrorService } from '../responseErrorService/responseError.service';
import { DialogService } from '../dialogService/dialog.service';
import { SERVER_CONSTANTS } from 'common/upgrades';
import { Subject } from 'rxjs';
import { OperatingSystemSnifferService } from 'common/services';

describe('MaintenanceService', () => {
  let service: MaintenanceService;
  let maintenanceConfigService: jasmine.SpyObj<MaintenanceConfigService>;
  let arrayUtilService: jasmine.SpyObj<ArrayUtilService>;
  let stateService: jasmine.SpyObj<StateService>;
  let responseErrorService: jasmine.SpyObj<ResponseErrorService>;
  let dialogService: jasmine.SpyObj<DialogService>;
  let osSnifferService: jasmine.SpyObj<any>;
  let serverConstants: jasmine.SpyObj<any>;

  const maintenanceResponse = new MaintenanceResponse();
  const maintenanceDetails$ = new Subject<any>();

  beforeEach(() => {
    maintenanceConfigService = jasmine.createSpyObj('MaintenanceConfigService', ['getMaintenanceDetails']);
    arrayUtilService = jasmine.createSpyObj('ArrayUtilService', ['intersect']);
    stateService = jasmine.createSpyObj('StateService', ['go']);
    responseErrorService = jasmine.createSpyObj('ResponseErrorService', ['displayErrorsFromResponse']);
    dialogService = jasmine.createSpyObj('DialogService', ['openGenericModal']);
    osSnifferService = jasmine.createSpyObj('osSnifferService', ['isDesktopOs']);
    serverConstants = jasmine.createSpyObj('serverConstants', null, { maintenanceKey: 'MAINTENANCE_KEY' });

    maintenanceConfigService.getMaintenanceDetails.and.returnValue(maintenanceDetails$.asObservable());
    arrayUtilService.intersect.and.returnValue([{
      feature: MaintenanceFeature.Account,
      inMaintenance: false,
      message: 'ERROR MESSAGE'
    }]);
    stateService.go.and.resolveTo();
    responseErrorService.displayErrorsFromResponse.and.resolveTo([]);
    dialogService.openGenericModal.and.resolveTo();
    osSnifferService.isDesktopOs.and.returnValue(true);


    TestBed.configureTestingModule({
      providers: [
        MaintenanceService,
        { provide: MaintenanceConfigService, useFactory: () => maintenanceConfigService },
        { provide: ArrayUtilService, useFactory: () => arrayUtilService },
        { provide: StateService, useFactory: () => stateService },
        { provide: ResponseErrorService, useFactory: () => responseErrorService },
        { provide: DialogService, useFactory: () => dialogService },
        { provide: OperatingSystemSnifferService, useFactory: () => osSnifferService },
        { provide: SERVER_CONSTANTS, useFactory: () => serverConstants }
      ]
    });
    service = TestBed.inject(MaintenanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getMostRecentFeatureMainenanceList', () => {
    let navFeatures: MaintenanceFeature[];

    beforeEach(() => {
      navFeatures = [
        MaintenanceFeature.Account
      ];

      maintenanceResponse.errors = [];
      maintenanceResponse.featureStates = [];
      maintenanceResponse.featureStates = maintenanceResponse.featureStates.concat([
        {
          feature: MaintenanceFeature.Account,
          inMaintenance: false,
          message: 'ERROR MESSAGE'
        }
      ]);
    });

    it('mostRecentResolvedFeatures not null should return array with one empty item', () => {
      expect(service.getMostRecentFeatureMainenanceList()).toEqual([]);
    });

    it('mostRecentResolvedFeatures not null should return array with one empty item', done => {
      maintenanceResponse.featureStates[0].inMaintenance = true;

      service.resolveMaintenanceStatus(navFeatures, 'somePreviousState').then((/*resolve: any*/) => { },
        () => {
          const mostRecentResolvedFeatures = service.getMostRecentFeatureMainenanceList();
          expect(mostRecentResolvedFeatures).toEqual(maintenanceResponse.featureStates);
          done();
        });

      maintenanceDetails$.next(maintenanceResponse);
    });
  });

  describe('resolveMaintenanceStatus', () => {

    let navFeatures: MaintenanceFeature[];

    beforeEach(() => {
      navFeatures = [
        MaintenanceFeature.Account
      ];

      maintenanceResponse.errors = [];
      maintenanceResponse.featureStates = [];
      maintenanceResponse.featureStates = maintenanceResponse.featureStates.concat([
        {
          feature: MaintenanceFeature.Account,
          inMaintenance: false,
          message: 'ERROR MESSAGE'
        },
        {
          feature: MaintenanceFeature.MobileApp,
          inMaintenance: false,
          message: 'ERROR MESSAGE'
        }
      ]);
    });

    it('should resolve successfully if none of the nav features are in maintenance', done => {
      spyOn(service, 'resolveMaintenanceStatus').and.resolveTo();
      service.resolveMaintenanceStatus(navFeatures, '').then(
        (/*resolve: any*/) => {

          expect(true).toBeTruthy();
          expect(responseErrorService.displayErrorsFromResponse).not.toHaveBeenCalled();
          done();
        },
        (/*reject: any*/) => {

          expect(false).toBeTruthy();
          done();
        });

      maintenanceDetails$.next(maintenanceResponse);
    });

    it('should resolve successfully if there are no nav features even if features in maintenance', done => {
      spyOn(service, 'resolveMaintenanceStatus').and.resolveTo();
      navFeatures = [];
      maintenanceResponse.featureStates[0].inMaintenance = true;

      service.resolveMaintenanceStatus(navFeatures, '').then(
        (/*resolve: any*/) => {

          expect(true).toBeTruthy();
          expect(responseErrorService.displayErrorsFromResponse).not.toHaveBeenCalled();
          done();
        },
        (/*reject: any*/) => {

          expect(false).toBeTruthy();
          done();
        });

      maintenanceDetails$.next(maintenanceResponse);
    });

    it('should reject if a nav feature is in maintenance', done => {

      maintenanceResponse.featureStates[0].inMaintenance = true;

      service.resolveMaintenanceStatus(navFeatures, '').then(
        (/*resolve: any*/) => {

          expect(false).toBeTruthy();
          done();
        },
        (/*reject: any*/) => {

          expect(true).toBeTruthy();
          expect(responseErrorService.displayErrorsFromResponse).toHaveBeenCalled();
          done();
        });

      maintenanceDetails$.next(maintenanceResponse);
    });

    it('should reject if a nav feature is in maintenance and navigate home if previousState is unknown (empty string)', done => {

      maintenanceResponse.featureStates[0].inMaintenance = true;

      service.resolveMaintenanceStatus(navFeatures, '').then(
        (/*resolve: any*/) => {

          expect(false).toBeTruthy();
          done();
        },
        (/*reject: any*/) => {

          expect(true).toBeTruthy();
          expect(responseErrorService.displayErrorsFromResponse).toHaveBeenCalled();
          expect(stateService.go).toHaveBeenCalledWith('Home');
          done();
        });

      maintenanceDetails$.next(maintenanceResponse);
    });

    it('should reject if a nav feature is in maintenance and navigate home if previousState is unknown (undefined)', done => {

      maintenanceResponse.featureStates[0].inMaintenance = true;

      service.resolveMaintenanceStatus(navFeatures, undefined).then(
        (/*resolve: any*/) => {

          expect(false).toBeTruthy();
          done();
        },
        (/*reject: any*/) => {

          expect(true).toBeTruthy();
          expect(responseErrorService.displayErrorsFromResponse).toHaveBeenCalled();
          expect(stateService.go).toHaveBeenCalledWith('Home');
          done();
        });

      maintenanceDetails$.next(maintenanceResponse);
    });

    it('should reject if a nav feature is in maintenance and navigate home if previousState is unknown (null)', done => {

      maintenanceResponse.featureStates[0].inMaintenance = true;

      service.resolveMaintenanceStatus(navFeatures, null).then(
        (/*resolve: any*/) => {

          expect(false).toBeTruthy();
          done();
        },
        (/*reject: any*/) => {

          expect(true).toBeTruthy();
          expect(responseErrorService.displayErrorsFromResponse).toHaveBeenCalled();
          expect(stateService.go).toHaveBeenCalledWith('Home');
          done();
        });

      maintenanceDetails$.next(maintenanceResponse);
    });

    it('should reject if a nav feature is in maintenance and navigate to previousState if previousState is known', done => {

      maintenanceResponse.featureStates[0].inMaintenance = true;

      service.resolveMaintenanceStatus(navFeatures, 'somePreviousState').then(
        (/*resolve: any*/) => {

          expect(false).toBeTruthy();
          done();
        },
        (/*reject: any*/) => {

          expect(true).toBeTruthy();
          expect(responseErrorService.displayErrorsFromResponse).toHaveBeenCalled();
          expect(stateService.go).toHaveBeenCalledWith('somePreviousState');
          done();
        });

      maintenanceDetails$.next(maintenanceResponse);
    });
  });

  describe('considerMaintenancePopup', () => {
    beforeEach(() => {
      maintenanceResponse.errors = [];
      maintenanceResponse.featureStates = [];
      maintenanceResponse.showMaintenancePopup = true;
    });

    it('should call showMaintenanceModal', done => {
      service.considerMaintenancePopup();

      setTimeout(() => {
        expect(dialogService.openGenericModal).toHaveBeenCalled();
        done();
      }, 100);

      maintenanceDetails$.next(maintenanceResponse);
    });
  });
});
