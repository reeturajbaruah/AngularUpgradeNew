
import { TestBed } from '@angular/core/testing';
import { Prop } from 'account/create/models/current-step.model';
import { WebStorageService } from 'common/services';
import { } from 'jasmine';
import { StoreService } from './store.service';


describe('Navigation Service', () => {

    let service: StoreService;
    let webStorageServiceSpy: jasmine.SpyObj<WebStorageService>;


    beforeEach(() => {

        webStorageServiceSpy = jasmine.createSpyObj('webStorage', ['setKeyValue']);


        TestBed.configureTestingModule({
            providers: [
                StoreService,
                { provide: WebStorageService, useFactory: () => webStorageServiceSpy },
            ]
        });

        service = TestBed.inject(StoreService);

    });

    it('defines the service', () => {
        expect(service).toBeDefined();
    });

    it('sets the payload', () => {
        const data = {
            v: {

            }
        };
        service.dispatch(Prop.Vehicles, data);
        expect(service['state'].get(Prop.Vehicles)).toEqual(data);
    });

    it('sets the payload and call webstorage for delivery method', () => {
        const data = {
            d: {

            }
        };
        service.dispatch(Prop.DeliveryMethod, data);
        expect(service['state'].get(Prop.DeliveryMethod)).toEqual(data);
        expect(webStorageServiceSpy.setKeyValue).toHaveBeenCalled();
    });

    it('retrives the payload', () => {
        const data = {
            r: {

            }
        };
        service.dispatch(Prop.Review, data);
        expect(service.select(Prop.Review)).toEqual(data);
    });

    it('cleans the payload', () => {
        service.delete();
        expect(service['state'].get(Prop.Review)).toEqual(undefined);
        expect(service['state'].get(Prop.Vehicles)).toEqual(undefined);
        expect(service['state'].get(Prop.DeliveryMethod)).toEqual(undefined);
    });

});
