import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { MaintenanceConfigService } from './maintenanceConfig.service';

describe('MaintenanceConfigService', () => {
  let service: MaintenanceConfigService;
  let httpClient: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClient = jasmine.createSpyObj('HttpClient', ['get']);

    httpClient.get.and.returnValue(of({}));

    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useFactory: () => httpClient }
      ]
    });

    service = TestBed.inject(MaintenanceConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call get', () => {
    const url = '/api/sessions/Maintenance/GetMaintenanceDetails';
   
    service.getMaintenanceDetails();

      expect(httpClient.get).toHaveBeenCalledWith(url);
  });
});
