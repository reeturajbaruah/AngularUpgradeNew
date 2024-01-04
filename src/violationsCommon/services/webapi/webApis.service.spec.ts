import { } from 'jasmine';
import { HttpService } from '../../../common/services';
import { WebApisService } from './webApis.service';


describe('webApisService', () => {

    let service: WebApisService;
    let httpService: jasmine.SpyObj<HttpService>;

    beforeEach(() => {

        httpService = jasmine.createSpyObj('httpService', ['get', 'post']);

        service = new WebApisService(httpService);
    });

    describe('canary', () => {

        
        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

    describe('getPdfURL', () => {
        
        [true, false].forEach(isSuspendedAccount => {
            it(`should return url with the pdf link when not mailed (isSuspended = ${isSuspendedAccount})`, async () => {
            
                const result = service.getPdfURL({
                    mailedDate: '',
                    invoiceNum: '8641',
                    agencyId: 9967,
                    licensePlate: 'plate number',
                    licenseState: 'plate state',
                    isSuspendedAccount
                });
    
                expect(result).toBe(`/api/violator${isSuspendedAccount ? '/suspended': ''}/plate/PLATE NUMBER-PLATE STATE/invoices/8641-9967/report`);
            });
    
            it(`should return url with the pdf link when mailed (isSuspended = ${isSuspendedAccount})`, async () => {
    
                const result = service.getPdfURL({
                    mailedDate: 'some date string',
                    invoiceNum: '8641',
                    agencyId: 9967,
                    licensePlate: 'plate number',
                    licenseState: 'plate state',
                    isSuspendedAccount
                });
    
                expect(result).toBe(`/api/violator${isSuspendedAccount ? '/suspended': ''}/plate/PLATE NUMBER-PLATE STATE/invoices/8641-9967/pdf`);
            });
        });

        
    });

    describe('makePayment', () => {

        it('should call httpService.post with the payment url', async () => {

            service.makePayment({
                plate: {
                    licensePlate: 'plate number',
                    licenseState: 'plate state'
                },
                someOtherProp: 'some other prop'
            } as any);

            expect(httpService.post)
                .toHaveBeenCalledWith('/api/violator/plate/PLATE NUMBER-PLATE STATE/payment', {
                    plate: {
                        licensePlate: 'plate number',
                        licenseState: 'plate state'
                    },
                    someOtherProp: 'some other prop'
                });
            expect(httpService.post).toHaveBeenCalledTimes(1);
        });
    });

    describe('makeMultiPayment', () => {

        it('should call httpService.post with the payment url', async () => {

            service.makeMultiPayment({
                plate: {
                    licensePlate: 'plate number',
                    licenseState: 'plate state'
                },
                someOtherProp: 'some other prop'
            } as any);

            expect(httpService.post)
                .toHaveBeenCalledWith('/api/violator/account/PLATE NUMBER-PLATE STATE/payment/multi', {
                    plate: {
                        licensePlate: 'plate number',
                        licenseState: 'plate state'
                    },
                    someOtherProp: 'some other prop'
                });
            expect(httpService.post).toHaveBeenCalledTimes(1);
        });
    });

    describe('searchForViolations', () => {

        it('should call httpService.get', async () => {

            service.searchForViolations({
                invoiceNumber: '8641',
                licensePlate: 'plate number',
                licenseState: 'plate state'
            });

            expect(httpService.get)
                .toHaveBeenCalledWith('/api/violator/plate/PLATE NUMBER-PLATE STATE?invoiceNum=8641');
            expect(httpService.get).toHaveBeenCalledTimes(1);
        });
    });
    describe('searchForViolationAcct', () => {

        it('should call httpService.get', async () => {

            service.searchForViolationAcct({
                invoiceNumber: '8641',
                licensePlate: 'plate number',
                licenseState: 'plate state'
            });

            expect(httpService.get)
                .toHaveBeenCalledWith('/api/violator/account/PLATE NUMBER-PLATE STATE?invoiceNum=8641&research=false');
            expect(httpService.get).toHaveBeenCalledTimes(1);
        });
        it('should call httpService.get with empty invoice number', async () => {

            service.searchForViolationAcct({
                invoiceNumber: '',
                licensePlate: 'plate number',
                licenseState: 'plate state'
            });

            expect(httpService.get)
                .toHaveBeenCalledWith('/api/violator/account/PLATE NUMBER-PLATE STATE?invoiceNum=""&research=false');
            expect(httpService.get).toHaveBeenCalledTimes(1);
        });
        it('should call httpService.get with research == true', async () => {

            service.searchForViolationAcct({
                invoiceNumber: '',
                licensePlate: 'plate number',
                licenseState: 'plate state',
                research: true
            });

            expect(httpService.get)
                .toHaveBeenCalledWith('/api/violator/account/PLATE NUMBER-PLATE STATE?invoiceNum=""&research=true');
            expect(httpService.get).toHaveBeenCalledTimes(1);
        });
    });
});
