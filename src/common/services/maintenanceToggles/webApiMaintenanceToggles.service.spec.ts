import { TestBed, waitForAsync } from '@angular/core/testing';
import { WebApiMaintenanceToggles } from './webApiMaintenanceToggles.service';
import { HttpService } from 'common/services';

describe('WebApiMaintenanceToggles', () => {
    let service: WebApiMaintenanceToggles;
    let httpService: jasmine.SpyObj<HttpService>;

    beforeEach(() => {
        httpService = jasmine.createSpyObj('httpService', ['post']);

        TestBed.configureTestingModule({
            providers: [
                WebApiMaintenanceToggles,
                { provide: HttpService, useFactory: () => httpService },
            ]
        });

        service = TestBed.inject(WebApiMaintenanceToggles);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('GetViolationMaintenanceStatus', () => {
        beforeEach(() => {
            httpService.post.and.resolveTo({ errors: [] });
        });

        it('should call post and return error free', waitForAsync(() => {
            service.GetViolationMaintenanceStatus({ ToggleName: '', ToggleStatus: false, MaintenanceToggles: false }).then(res => {
                expect(res.errors.length).toEqual(0);
            });
        }));
    });
});
