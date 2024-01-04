import { ResponseErrorService, ToasterService } from 'common/services';
import { wait } from 'common/utilities';
import { } from 'jasmine';
import { DownloadService } from './download.service';
import { HttpHeaders } from '@angular/common/http';


describe('downloadService', () => {

    let service: DownloadService;
    let serverConstants;
    let httpService;
    let responseErrorService: ResponseErrorService;
    let currentUser;
    let windowMock;
    let storefrontUtilityService;
    let storefrontModalService;
    let uiRouterGlobals;
    let toasterService: jasmine.SpyObj<ToasterService>;
    let mockEnvironmentConfig: any;

    beforeEach(() => {

        serverConstants = {
            currentlyDownloadedWebUiVersion: 'fakeVersion'
        };
        httpService = jasmine.createSpyObj('httpService', ['get']);
        responseErrorService = jasmine.createSpyObj('responseErrorService', ['displayErrorsFromResponse']);
        currentUser = jasmine.createSpyObj('currentUser', ['currentUserIsInSyncAcrossTabs']);
        windowMock = jasmine.createSpyObj('window', ['open', 'Blob']);
        windowMock.location = jasmine.createSpyObj('location', ['reload']);
        windowMock.document = jasmine.createSpyObj('document', ['createElement']);
        windowMock.URL = jasmine.createSpyObj('URL', ['createObjectURL', 'revokeObjectURL']);
        windowMock.navigator = {};
        storefrontUtilityService = {
            isRunningAsKiosk: true
        };
        storefrontModalService = jasmine.createSpyObj('StorefrontModalService', ['showExternalPage']);
        uiRouterGlobals = {
            current: { name: 'fakeState' }
        };
        toasterService = jasmine.createSpyObj('toasterService', ['removeAll', 'show']);
        mockEnvironmentConfig = {
            storefrontConfigs: {
                version: '2.0.0'
            }
        };

        service = new DownloadService(
            serverConstants,
            httpService,
            responseErrorService,
            currentUser,
            windowMock,
            storefrontUtilityService,
            storefrontModalService,
            uiRouterGlobals,
            toasterService,
            mockEnvironmentConfig
        );
    });

    describe('canary', () => {

        it('should pass', async () => {

            expect(true).toBe(true);
        });
    });

    describe('openInNewWindow', () => {

        it('should call window.open when currentUserIsInSyncAcrossTabs', async () => {

            currentUser.currentUserIsInSyncAcrossTabs.and.returnValue(true);

            service['openInNewWindow']('fake url');

            expect(windowMock.location.reload).toHaveBeenCalledTimes(0);
            expect(windowMock.open).toHaveBeenCalledTimes(1);
            expect(windowMock.open).toHaveBeenCalledWith('fake url', '_blank');
        });

        it('should call location.reload when not currentUserIsInSyncAcrossTabs', async () => {

            currentUser.currentUserIsInSyncAcrossTabs.and.returnValue(false);

            service['openInNewWindow']('fake url');

            expect(windowMock.open).toHaveBeenCalledTimes(0);
            expect(windowMock.location.reload).toHaveBeenCalledTimes(1);
            expect(windowMock.location.reload).toHaveBeenCalledWith();
        });
    });

    describe('addParamsToUrl', () => {

        [
            {
                url: 'fakehost',
                params: {},
                expected: 'fakehost?angularState=fakeState&clientVersion=fakeVersion'
            },
            {
                url: 'fakehost',
                params: { bla: null, lab: undefined },
                expected: 'fakehost?angularState=fakeState&clientVersion=fakeVersion'
            },
            {
                url: 'fakehost',
                params: { a: 1, b: 'great', c: false },
                expected: 'fakehost?a=1&b=great&c=false&angularState=fakeState&clientVersion=fakeVersion'
            }
        ].forEach(({ url, params, expected }) => {

            it('should return url with params', async () => {

                const result = service['addParamsToUrl'](url, params);

                expect(result).toBe(expected);
            });
        });
    });

    describe('getFileNameFromHeader', () => {

        [
            { disposition: null, expected: '' },
            { disposition: '', expected: '' },
            { disposition: 'whatever', expected: '' },
            { disposition: 'attachment', expected: '' },
            { disposition: 'filename=fake1234.pdf', expected: '' },
            { disposition: 'attachment; filename=fake1234.pdf', expected: 'fake1234.pdf' },
            { disposition: 'attachment; filename=Fake1234.xls', expected: 'Fake1234.xls' }
        ].forEach(({ disposition, expected }) => {

            it('should return url with params', () => {
                const headers = new HttpHeaders();

                spyOn(headers, 'get').and.returnValue(disposition);

                const result = service['getFileNameFromHeader'](headers);

                expect(headers.get).toHaveBeenCalledTimes(1);
                expect(headers.get).toHaveBeenCalledWith('Content-Disposition');
                expect(result).toBe(expected);
            });
        });
    });

    describe('createAndClickDownloadLink', () => {

        let aTag;
        beforeEach(() => {

            aTag = jasmine.createSpyObj('a', ['click']);
            windowMock.document.createElement.and.returnValue(aTag);
            windowMock.URL.createObjectURL.and.returnValue('fakeUrl');
        });

        it('should create an a link and click it', async () => {

            aTag.click.and.callFake(() => {

                expect(aTag).toEqual(jasmine.objectContaining({
                    href: 'fakeUrl',
                    download: 'fakename'
                }));
            });

            const result = service['createAndClickDownloadLink']('fakeblob' as any, 'fakename');

            expect(aTag.click).toHaveBeenCalledTimes(1);
            expect(aTag.click).toHaveBeenCalledWith();
        });

        it('should call create element with argument a', async () => {

            const result = service['createAndClickDownloadLink']('fakeblob' as any, 'fakename');

            expect(windowMock.document.createElement).toHaveBeenCalledWith('a');
            expect(windowMock.document.createElement).toHaveBeenCalledTimes(1);
        });

        it('should call createObjectURL with blob', async () => {

            const result = service['createAndClickDownloadLink']('fakeblob' as any, 'fakename');

            expect(windowMock.URL.createObjectURL).toHaveBeenCalledWith('fakeblob');
            expect(windowMock.URL.createObjectURL).toHaveBeenCalledTimes(1);
        });

        it('should call revokeObjectURL with url returned by createObjectURL', async () => {

            aTag.click.and.callFake(() => {

                expect(windowMock.URL.revokeObjectURL).toHaveBeenCalledTimes(0);
            });

            const result = service['createAndClickDownloadLink']('fakeblob' as any, 'fakename');

            expect(windowMock.URL.revokeObjectURL).toHaveBeenCalledWith('fakeUrl');
            expect(windowMock.URL.revokeObjectURL).toHaveBeenCalledTimes(1);
        });
    });

    describe('downloadBlob', () => {

        beforeEach(() => {

            spyOn(service as any, 'createAndClickDownloadLink');
        });

        it('should call createAndClickDownloadLink', async () => {
            const blob = new Blob(['fakeblob']);
            const result = service['downloadBlob'](blob, 'fakename');

            expect(service['createAndClickDownloadLink']).toHaveBeenCalledTimes(1);
            expect(service['createAndClickDownloadLink']).toHaveBeenCalledWith(blob, 'fakename');
        });
    });

    describe('processDownload', () => {

        let getFileNameFromHeadersSpy;
        let downloadBlobSpy;
        beforeEach(() => {

            getFileNameFromHeadersSpy = spyOn(service as any, 'getFileNameFromHeader');
            downloadBlobSpy = spyOn(service as any, 'downloadBlob');
        });

        [true, false].forEach(isPdf => {

            it('should call getFileNameFromHeader with response.headers', async () => {

                service['processDownload']({ headers: 'fake headers' }, isPdf, {} as any);

                expect(getFileNameFromHeadersSpy).toHaveBeenCalledTimes(1);
                expect(getFileNameFromHeadersSpy).toHaveBeenCalledWith('fake headers');
            });
        });

        [
            { isPdf: true, type: 'application/pdf' },
            { isPdf: false, type: 'application' },
        ].forEach(({ isPdf, type }) => {

            it('should call window.Blob to create new blob', async () => {

                service['processDownload']({ headers: 'fake headers' }, isPdf, {} as any);

                expect(windowMock.Blob).toHaveBeenCalledTimes(1);
                expect(windowMock.Blob)
                    .toHaveBeenCalledWith([{ headers: 'fake headers' }], { type });
            });
        });

        [
            { fileName: '', expectedFileName: 'default.pdf', isPdf: true, type: 'application/pdf' },
            { fileName: '', expectedFileName: 'default.xls', isPdf: false, type: 'application' },
            { fileName: 'blabla', expectedFileName: 'blabla', isPdf: true, type: 'application/pdf' },
            { fileName: 'pumpkin', expectedFileName: 'pumpkin', isPdf: false, type: 'application' }
        ].forEach(({ fileName, expectedFileName, isPdf, type }) => {

            it('should call downloadBlob with blob and fileName', async () => {

                getFileNameFromHeadersSpy.and.returnValue(fileName);
                const fakeBlob = function(arg1, arg2) {
                    this.arg1 = arg1;
                    this.arg2 = arg2;
                };
                windowMock.Blob = fakeBlob;

                service['processDownload']({ headers: 'fake headers' }, isPdf, {} as any);

                expect(downloadBlobSpy).toHaveBeenCalledTimes(1);
                expect(downloadBlobSpy)
                    .toHaveBeenCalledWith(new fakeBlob([{ headers: 'fake headers' }], { type }), expectedFileName);
            });
        });

        [true, false].forEach(isPdf => {

            it('should call toaster display with success message', async () => {

                service['processDownload']({} as any, isPdf, { success: 'fake success message' } as any);

                expect(toasterService.show).toHaveBeenCalledTimes(1);
                expect(toasterService.show).toHaveBeenCalledWith('Success', 'fake success message');
            });
        });
    });

    describe('tryDownload', () => {

        let messages;

        beforeEach(() => {

            messages = {
                success: 'fake success message',
                failure: 'fake failure message',
                busy: 'fake busy message'
            };
            httpService.get.and.returnValue(new Promise(() => { }));
        });

        [true, false].forEach(isPdf => {

            it('should set isBusy to true', async () => {

                service['tryDownload']('', isPdf, messages as any, 579);

                expect(service.isBusy).toBe(true);
            });
        });

        [true, false].forEach(isPdf => {

            it('should call toaster display with busy message', async () => {

                service['tryDownload']('', isPdf, messages as any, 579);

                expect(toasterService.show).toHaveBeenCalledWith('Success', 'fake busy message');
                expect(toasterService.show).toHaveBeenCalledTimes(1);
            });
        });


        [true, false].forEach(isPdf => {

            it('should call httpService.get', async () => {

                service['tryDownload']('fake url', isPdf, messages as any, 579);

                expect(httpService.get).toHaveBeenCalledWith('fake url', true, { responseType: 'arraybuffer' }, true);
                expect(httpService.get).toHaveBeenCalledTimes(1);
            });
        });

        [true, false].forEach(isPdf => {

            it('should dispaly failure toast when timeout', async () => {

                httpService.get.and.returnValue(wait(3000));

                service['tryDownload']('', isPdf, messages, 50);

                await wait(1);

                expect(toasterService.show).toHaveBeenCalledTimes(1);
                expect(service.isBusy).toBe(true);

                await wait(100);

                expect(toasterService.show).toHaveBeenCalledWith('Error', 'fake failure message');
                expect(toasterService.show).toHaveBeenCalledTimes(2);
                expect(service.isBusy).toBe(false);
            });
        });

        [true, false].forEach(isPdf => {

            it('should dispaly failure toast when httpService.get fails', async () => {

                httpService.get.and.returnValue(Promise.reject());

                const promise = service['tryDownload']('', isPdf, messages, 25);

                expect(toasterService.show).toHaveBeenCalledTimes(1);
                expect(service.isBusy).toBe(true);

                await promise;

                expect(toasterService.show).toHaveBeenCalledWith('Error', 'fake failure message');
                expect(toasterService.show).toHaveBeenCalledTimes(2);
                expect(service.isBusy).toBe(false);
            });
        });

        [true, false].forEach(isPdf => {

            it('should call responseErrorService.displayErrorsFromResponse when errors', async () => {

                httpService.get.and.returnValue(Promise.resolve({ errors: [1, 2] }));
                const processDownloadSpy = spyOn(service as any, 'processDownload');

                const promise = service['tryDownload']('', isPdf, messages, 25);

                expect(service.isBusy).toBe(true);

                await promise;

                expect(responseErrorService.displayErrorsFromResponse).toHaveBeenCalledWith({ errors: [1, 2] } as any);
                expect(responseErrorService.displayErrorsFromResponse).toHaveBeenCalledTimes(1);
                expect(processDownloadSpy).toHaveBeenCalledTimes(0);
                expect(service.isBusy).toBe(false);
            });
        });

        [true, false].forEach(isPdf => {

            it('should call processDownload when no errors', async () => {

                httpService.get.and.returnValue(Promise.resolve({ errors: [] }));
                const processDownloadSpy = spyOn(service as any, 'processDownload');

                const promise = service['tryDownload']('', isPdf, messages, 25);

                expect(service.isBusy).toBe(true);

                await promise;

                expect(processDownloadSpy).toHaveBeenCalledWith({ errors: [] }, isPdf, messages);
                expect(processDownloadSpy).toHaveBeenCalledTimes(1);
                expect(responseErrorService.displayErrorsFromResponse).toHaveBeenCalledTimes(0);
                expect(service.isBusy).toBe(false);
            });
        });
    });

    describe('downloadOnSameTab', () => {

        let tryDownloadSpy;

        beforeEach(() => {

            tryDownloadSpy = spyOn(service as any, 'tryDownload');
        });

        [true, false].forEach(isPdf => {
            it('should clear toast and display busy message when busy', async () => {

                service['isBusyValue'] = true;

                service['downloadOnSameTab']('fake url', isPdf, { busy: 'fake busy message' } as any, 14);

                expect(toasterService.removeAll).toHaveBeenCalledTimes(1);
                expect(toasterService.removeAll).toHaveBeenCalledWith();
                expect(toasterService.show).toHaveBeenCalledTimes(1);
                expect(toasterService.show).toHaveBeenCalledWith('Success', 'fake busy message');
                expect(tryDownloadSpy).toHaveBeenCalledTimes(0);
            });
        });

        [
            {
                isPdf: true,
                messages: {
                    busy: 'fake busy message',
                    failure: 'fake failure message',
                    success: 'fake success message'
                },
                expectedMessages: {
                    busy: 'fake busy message',
                    failure: 'fake failure message',
                    success: 'fake success message'
                }
            },
            {
                isPdf: false,
                messages: {},
                expectedMessages: {
                    busy: 'Processing your report',
                    failure: 'Error downloading your report',
                    success: 'Your report is downloaded'
                }
            },
            {
                isPdf: true,
                messages: {
                    someProp: 'who cares'
                },
                expectedMessages: {
                    someProp: 'who cares',
                    busy: 'Processing your report',
                    failure: 'Error downloading your report',
                    success: 'Your report is downloaded'
                }
            }
        ].forEach(({ isPdf, messages, expectedMessages }) => {

            it('should call tryDownload when not busy', async () => {

                service['isBusyValue'] = false;

                service['downloadOnSameTab']('fake url', isPdf, messages as any, 14);

                expect(toasterService.removeAll).toHaveBeenCalledTimes(0);
                expect(toasterService.show).toHaveBeenCalledTimes(0);
                expect(tryDownloadSpy).toHaveBeenCalledTimes(1);
                expect(tryDownloadSpy).toHaveBeenCalledWith('fake url', isPdf, expectedMessages, 14);
            });
        });
    });

    describe('download', () => {

        let addParamsToUrlSpy;
        let openInNewWindowSpy;
        let downloadOnSameTabSpy;

        beforeEach(() => {

            addParamsToUrlSpy = spyOn(service as any, 'addParamsToUrl').and.returnValue('fake url with params');
            openInNewWindowSpy = spyOn(service as any, 'openInNewWindow');
            downloadOnSameTabSpy = spyOn(service as any, 'downloadOnSameTab');
        });

        [true, false].forEach(isPdf => {

            it('should call addParamsToUrl with url and params', async () => {

                service.download('fake url', isPdf, 'fake params' as any, 'fake messages' as any, 99);

                expect(addParamsToUrlSpy).toHaveBeenCalledTimes(1);
                expect(addParamsToUrlSpy).toHaveBeenCalledWith('fake url', 'fake params' as any);
            });
        });


        it('should request storefront modalservice open pdf call when running as kiosk', async () => {

            storefrontUtilityService.isRunningAsKiosk = true;

            await service.download('fake url', true, 'fake params' as any, 'fake messages' as any, 99);

            expect(downloadOnSameTabSpy).toHaveBeenCalledTimes(0);
            expect(openInNewWindowSpy).toHaveBeenCalledTimes(0);
            expect(storefrontModalService.showExternalPage).toHaveBeenCalledTimes(1);
            expect(storefrontModalService.showExternalPage).toHaveBeenCalledWith({ url: 'fake url with params', pdf: true});
        });

        it('should perform no action when opening non-pdf call as kiosk', async () => {

            storefrontUtilityService.isRunningAsKiosk = true;

            await service.download('fake url', false, 'fake params' as any, 'fake messages' as any, 99);

            expect(downloadOnSameTabSpy).toHaveBeenCalledTimes(0);
            expect(openInNewWindowSpy).toHaveBeenCalledTimes(0);
            expect(storefrontModalService.showExternalPage).toHaveBeenCalledTimes(0);
        });

        [true, false].forEach(isPdf => {

            it('should call openInNewWindow when not running as kiosk', async () => {

                storefrontUtilityService.isRunningAsKiosk = false;

                await service.download('fake url', isPdf, 'fake params' as any, 'fake messages' as any, 99);

                expect(openInNewWindowSpy).toHaveBeenCalledTimes(0);
                expect(downloadOnSameTabSpy).toHaveBeenCalledTimes(1);
                expect(downloadOnSameTabSpy).toHaveBeenCalledWith('fake url with params', isPdf, 'fake messages', 99);
            });
        });
    });
});
