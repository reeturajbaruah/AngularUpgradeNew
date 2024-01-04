
import { TestBed } from '@angular/core/testing';
import { States } from 'account/create/states';
import { } from 'jasmine';
import { NavigationService } from './navigation.service';


describe('Navigation Service', () => {

    let service: NavigationService;


    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                NavigationService
            ]
        });

        service = TestBed.inject(NavigationService);

    });

    it('defines the service', () => {
        expect(service).toBeDefined();
    });

    it('sets the order for Eztag user', () => {
        service['start'] = service['vehicles'];
        service.setOrder(false);
        expect(service['vehicles'].next).toEqual(service['payment']);
        expect(service['payment'].next).toEqual(service['delivery']);
        expect(service['delivery'].next).toEqual(service['review']);

    });

    it('checks the next state of vehicles for Eztag user', () => {
        service['start'] = service['vehicles'];
        service.setOrder(false);
        const nav = service.navigation(States.VehicleInfo);
        expect(nav.next).toEqual(service['payment']);

    });

    it('checks the next and prev state of payment step for Eztag user', () => {
        service['start'] = service['vehicles'];
        service.setOrder(false);
        const nav = service.navigation(States.PaymentInfo);
        expect(nav.next).toEqual(service['delivery']);
        expect(nav.prev).toEqual(service['vehicles']);


    });


    it('checks the next and prev state of delivery step for Eztag user', () => {
        service['start'] = service['vehicles'];
        service.setOrder(false);
        const nav = service.navigation(States.DeliveryMethod);
        expect(nav.next).toEqual(service['review']);
        expect(nav.prev).toEqual(service['payment']);


    });

    it('sets the order for flexpay user', () => {
        service['start'] = service['vehicles'];
        service.setOrder(true);
        expect(service['vehicles'].next).toEqual(service['delivery']);
        expect(service['delivery'].next).toEqual(service['payment']);
        expect(service['payment'].next).toEqual(service['review']);
    });

    it('checks the next state of vehicles for flexpay user', () => {
        service['start'] = service['vehicles'];
        service.setOrder(true);
        const nav = service.navigation(States.VehicleInfo);
        expect(nav.next).toEqual(service['delivery']);

    });

    it('checks the next and prev state of delivery step for flexpay user', () => {
        service['start'] = service['vehicles'];
        service.setOrder(true);
        const nav = service.navigation(States.DeliveryMethod);
        expect(nav.next).toEqual(service['payment']);
        expect(nav.prev).toEqual(service['vehicles']);


    });


    it('checks the next and prev state of payment step for flexpay user', () => {
        service['start'] = service['vehicles'];
        service.setOrder(true);
        const nav = service.navigation(States.PaymentInfo);
        expect(nav.next).toEqual(service['review']);
        expect(nav.prev).toEqual(service['delivery']);


    });

    it('skips the delivery method step flexpay user', () => {

        service['start'] = service['vehicles'];
        service.setOrder(true);

        const res = service.skipStep(States.DeliveryMethod);
        expect(res).toBeTrue();
        expect(service['vehicles'].next).toEqual(service['payment']);
        expect(service['payment'].prev).toEqual(service['vehicles']);

    });

    it('adds the delivery method step flexpay user after skipping it', () => {

        service['start'] = service['vehicles'];
        service.setOrder(true);

        service.skipStep(States.DeliveryMethod);

        service.addStep(States.DeliveryMethod, States.VehicleInfo);
        expect(service['vehicles'].next).toEqual(service['delivery']);
        expect(service['delivery'].next).toEqual(service['payment']);

    });
});
