import { TestBed } from '@angular/core/testing';
import { Contact } from 'shipChannelBridge/ship-channel-bridge.model';
import { HttpService } from '../../../common/services/httpService/http.service';
import { ShipChannelBridgeService } from './ship-channel-bridge.service';

describe('ShipChannelBridgeService', () => {

    let shipChannelBridgeService: ShipChannelBridgeService;
    let httpService: jasmine.SpyObj<any>;
    beforeEach(() => {

        httpService = jasmine.createSpyObj('httpService', ['get', 'post']);

        TestBed.configureTestingModule({
            providers: [
                ShipChannelBridgeService,
                { provide: HttpService, useValue: httpService },
            ]
        });
        shipChannelBridgeService = TestBed.inject(ShipChannelBridgeService);
    });

    it('should define ship channel api service', () => {
        expect(shipChannelBridgeService).toBeDefined();
    });

    describe('saveContact', () => {
        it('should call httpService with url', async () => {
            httpService.post.and.resolveTo({});

            await shipChannelBridgeService.saveContact({} as Contact);
            expect(httpService.post).toHaveBeenCalledWith('api/sessions/HelpAndSupport/SendTopicEmail', {});
        });
    });

});

