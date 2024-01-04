import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { SnapPayIframeStrategyService } from '../api/snapPayIframe-api.service';


describe('snapPay IFrameService', () => {
    let httpClient: HttpClient;
    let service: SnapPayIframeStrategyService;
    beforeEach(() => {
        httpClient = jasmine.createSpyObj('httpClient', ['post']);

        service = new SnapPayIframeStrategyService(
            httpClient
        );
    });

    describe('getSnapPayConfiguration', () => {
        beforeEach(() => {
            (httpClient.post as jasmine.Spy).and.returnValue(of(''));
        });
        it('should check post method is being invoked', () => {

            service.getSnapPayConfiguration({});

            expect(httpClient.post).toHaveBeenCalled();
        });
    });
});
