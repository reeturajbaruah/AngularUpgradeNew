import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServerErrorInterceptor } from './serverError.interceptor';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ToasterService } from '../../../services';
import { ToggleButtonsService } from '../../../services/toggleButtons/toggleButtons.service';

describe('ServerErrorInterceptor', () => {
    let client: HttpClient;
    let controller: HttpTestingController;
    let toggleButtonsService: jasmine.SpyObj<ToggleButtonsService>;
    let toasterService: jasmine.SpyObj<ToasterService>;

    beforeEach(() => {
        toggleButtonsService = jasmine.createSpyObj('toggleButtonsService', ['enableButtonsGlobal']);
        toasterService = jasmine.createSpyObj('toasterService', ['show']);


        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
            ],
            providers: [
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: ServerErrorInterceptor,
                    multi: true
                },
                {
                    provide: ToggleButtonsService,
                    useFactory: () => toggleButtonsService
                },
                {
                    provide: ToasterService,
                    useFactory: () => toasterService
                }
            ],
        });

        client = TestBed.inject(HttpClient);
        controller = TestBed.inject(HttpTestingController);
    });

    it('should do do nothing', (done) => {
        const body = {};

        client.get('/test').subscribe(
            data => { expect(data).toEqual({}); done(); }
        );

        const request = controller.expectOne('/test');
        request.flush(body);
    });

    it('should ignore 3.x.x errors', (done) => {
        const body = {};

        client.get('/test').subscribe({
            error: () => { expect(toggleButtonsService.enableButtonsGlobal).not.toHaveBeenCalled(); done(); }
        });

        const request = controller.expectOne('/test');
        request.flush(body, { status: 304, statusText: 'Not Modified' });
    });

    it('should display error toaser', (done) => {
        const body = {};

        client.get('/test').subscribe({
            error: () => {
                expect(toggleButtonsService.enableButtonsGlobal).toHaveBeenCalled();
                expect(toasterService.show).toHaveBeenCalled();
                done();
            }
        });

        const request = controller.expectOne('/test');
        request.flush(body, { status: 400, statusText: 'Bad Request' });
    });

    it('should display error toaser', (done) => {
        const body = {};

        client.get('/test').subscribe({
            error: () => {
                expect(toggleButtonsService.enableButtonsGlobal).toHaveBeenCalled();
                expect(toasterService.show).toHaveBeenCalled();
                done();
            }
        });

        const request = controller.expectOne('/test');
        request.flush(body, { status: 500, statusText: 'Internal Server Error' });
    });
});
