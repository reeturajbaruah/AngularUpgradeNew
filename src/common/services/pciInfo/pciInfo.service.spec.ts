import { TestBed } from '@angular/core/testing';
import { VantivDto } from '../../models';
import { VantivPaymentService } from '../vantivPayment/vantivPayment.service';
import { PciInfoService } from './pciInfo.service';

describe('FeatureToggleResolverService', () => {

    let pciInfoService: PciInfoService;
    let vantivPaymentService: jasmine.SpyObj<any>;

    beforeEach(() => {
        vantivPaymentService = jasmine.createSpyObj('vantivPaymentService', ['vantivPay']);

        TestBed.configureTestingModule({
            providers: [
                PciInfoService,
                {
                    provide: VantivPaymentService,
                    useFactory: () => vantivPaymentService
                }
            ]
        });

        pciInfoService = TestBed.inject(PciInfoService);
    });

    it('should create service', () => {
        expect(PciInfoService).toBeDefined();
    });

    describe('non-array input', () => {

        it('should resolve a single object w/ values returned by vantivPay', ((done) => {
            vantivPayValue({
                lastFour: '1234',
                paypageRegistrationId: 'qwerty'
            });
            pciInfoService.registerCard('4111111111111234').then((res: VantivDto) => {
                expect(res.lastFour).toBe('1234');
                expect(res.paypageRegistrationId).toBe('qwerty');
                expect(vantivPaymentService.vantivPay).toHaveBeenCalled();
                done();
            });
        }));

        it('should resolve with last four of masked value and undefined paypageRegistrationId', ((done) => {
            vantivPayValue({
                lastFour: '5555',
                paypageRegistrationId: 'asdfghj'
            });
            pciInfoService.registerCard('************-1234').then((res) => {
                expect((res as VantivDto).lastFour).toBe('1234');
                expect((res as VantivDto).paypageRegistrationId).toBe(null);
                expect(vantivPaymentService.vantivPay).not.toHaveBeenCalled();
                done();
            });
        }));

        it('should resolve with the four input digits and null paypageRegistrationId', ((done) => {
            vantivPayValue({
                lastFour: '5555',
                paypageRegistrationId: 'asdfghj'
            });
            pciInfoService.registerCard('1234').then((res) => {
                expect((res as VantivDto).lastFour).toBe('1234');
                expect((res as VantivDto).paypageRegistrationId).toBe(null);
                expect(vantivPaymentService.vantivPay).not.toHaveBeenCalled();
                done();
            });
        }));
    });

    describe('single element array input', () => {

        it('should resolve single element array w/ values returned by vantivPay', ((done) => {
            vantivPayValue({
                lastFour: '3333',
                paypageRegistrationId: 'poiuy'
            });
            pciInfoService.registerCard(['4111111111111234']).then((res) => {
                expect((res as VantivDto[])[0].lastFour).toBe('3333');
                expect((res as VantivDto[])[0].paypageRegistrationId).toBe('poiuy');
                expect(vantivPaymentService.vantivPay).toHaveBeenCalled();
                done();
            });
        }));

        it('should resolve with single element array w/ last four of masked value and undefined paypageRegistrationId', ((done) => {
            vantivPayValue({
                lastFour: '5555',
                paypageRegistrationId: 'asdfghj'
            });
            pciInfoService.registerCard(['************-1234']).then((res) => {
                expect((res as VantivDto[])[0].lastFour).toBe('1234');
                expect((res as VantivDto[])[0].paypageRegistrationId).toBe(null);
                expect(vantivPaymentService.vantivPay).not.toHaveBeenCalled();
                done();
            });
        }));

        it('should resolve with the four input digits and null paypageRegistrationId', ((done) => {
            vantivPayValue({
                lastFour: '5555',
                paypageRegistrationId: 'asdfghj'
            });
            pciInfoService.registerCard(['1234']).then((res) => {
                expect((res as VantivDto[])[0].lastFour).toBe('1234');
                expect((res as VantivDto[])[0].paypageRegistrationId).toBe(null);
                expect(vantivPaymentService.vantivPay).not.toHaveBeenCalled();
                done();
            });
        }));
    });

    describe('multi element array input', () => {

        it('should resolve multi element array w/ values returned by vantivPay', ((done) => {
            vantivPayValue({
                lastFour: '3333',
                paypageRegistrationId: 'poiuy'
            });
            pciInfoService.registerCard(['4111111111111234', '4111111111115678']).then((res) => {
                expect((res as VantivDto[])[0].lastFour).toBe('3333');
                expect((res as VantivDto[])[0].paypageRegistrationId).toBe('poiuy');
                expect((res as VantivDto[])[1].lastFour).toBe('3333');
                expect((res as VantivDto[])[1].paypageRegistrationId).toBe('poiuy');
                expect(vantivPaymentService.vantivPay).toHaveBeenCalled();
                done();
            });
        }));

        it('should resolve with single element array w/ last four of masked value and undefined paypageRegistrationId', ((done) => {
            vantivPayValue({
                lastFour: '5555',
                paypageRegistrationId: 'asdfghj'
            });
            pciInfoService.registerCard(['************-1234', '************-5678']).then((res) => {
                expect((res as VantivDto[])[0].lastFour).toBe('1234');
                expect((res as VantivDto[])[0].paypageRegistrationId).toBe(null);
                expect((res as VantivDto[])[1].lastFour).toBe('5678');
                expect((res as VantivDto[])[1].paypageRegistrationId).toBe(null);
                expect(vantivPaymentService.vantivPay).not.toHaveBeenCalled();
                done();
            });
        }));

        it('should resolve with the four input digits and null paypageRegistrationId', ((done) => {
            vantivPayValue({
                lastFour: '5555',
                paypageRegistrationId: 'asdfghj'
            });
            pciInfoService.registerCard(['1234', '5678']).then((res) => {
                expect((res as VantivDto[])[0].lastFour).toBe('1234');
                expect((res as VantivDto[])[0].paypageRegistrationId).toBe(null);
                expect((res as VantivDto[])[1].lastFour).toBe('5678');
                expect((res as VantivDto[])[1].paypageRegistrationId).toBe(null);
                expect(vantivPaymentService.vantivPay).not.toHaveBeenCalled();
                done();
            });
        }));
    });

    const vantivPayValue = (vantivResponse: { lastFour: string; paypageRegistrationId: string }) => {
        vantivPaymentService.vantivPay.and.returnValue(Promise.resolve(vantivResponse));
    };
});



