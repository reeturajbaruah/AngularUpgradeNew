import { of } from 'rxjs';
import { SnapPayIframeStrategyService } from '../api/snapPayIframe-api.service';
import { SnapPayIframeStrategyFacadeService } from './snapPayIframe-facade.service';


describe('snapPay IFrameFacadeService', () => {
    let service: SnapPayIframeStrategyFacadeService;
    let snapPayIframeStrategyService: SnapPayIframeStrategyService;
    beforeEach(() => {
        snapPayIframeStrategyService = jasmine.createSpyObj('snapPayIframeStrategyService', ['getSnapPayConfiguration']);

        service = new SnapPayIframeStrategyFacadeService(snapPayIframeStrategyService);
    });

    describe('getSnapPayConfiguration', () => {
        beforeEach(() => {
            (snapPayIframeStrategyService.getSnapPayConfiguration as jasmine.Spy).and.returnValue(of(''));
        });
        it('should check post method is being invoked', () => {

            service.getSnapPayIframeData();

            expect(snapPayIframeStrategyService.getSnapPayConfiguration).toHaveBeenCalled();
        });
    });
});
