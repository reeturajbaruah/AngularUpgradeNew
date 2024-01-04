import { } from 'jasmine';

import { routes } from 'constants/module';
import { CmsResolverService } from './cmsResolver.service';


describe('cmsUtilService', () => {

    let genericRepo;
    let stringUtils;
    let httpService;

    let service: CmsResolverService;

    beforeEach(() => {
        genericRepo = {
            dataFactory: {
                getCmsPageById: jasmine.createSpy('getCmsPageById'),
            }
        };
        stringUtils = jasmine.createSpyObj('StringUtilsService', ['getParameterObject']);
        httpService = jasmine.createSpyObj('httpService', ['get']);

        stringUtils.getParameterObject.and.callFake(x => JSON.parse(x));
        httpService.get.and.returnValue('fakeSvg');
        genericRepo.dataFactory.getCmsPageById.and.
            returnValue(Promise.resolve({
                cmsResponse: JSON.stringify({
                    ItemMedialUrl: 'fake item media url',
                    Title: 'I am a cms item',
                    Parameters: JSON.stringify({ a: 1, b: 'what' }),
                    Children: [{
                        Title: 'I am a child cms item',
                        Parameters: JSON.stringify({ a: 2, b: 'why' }),
                        Children: []
                    }]
                })
            }));

        service = new CmsResolverService(genericRepo, stringUtils, httpService);
    });

    describe('canary', () => {

        it('should pass', () => {

            expect(true).toBe(true);
        });
    });

    describe('resolve', () => {

        it('should call api.getCmsPageById with passed ItemId', () => {


            service.resolve({ ItemId: 'fake Item id' });

            expect(genericRepo.dataFactory.getCmsPageById)
                .toHaveBeenCalledWith({ ItemId: 'fake Item id' });
        });

        it('should return parsed cmsResponse when using default selector', async () => {

            const result = await service.resolve({ ItemId: 'fake item', mergeParams: false });

            expect(result).toEqual({
                ItemMedialUrl: 'fake item media url',
                Title: 'I am a cms item',
                Parameters: JSON.stringify({ a: 1, b: 'what' }),
                Children: [{
                    Title: 'I am a child cms item',
                    Parameters: JSON.stringify({ a: 2, b: 'why' }),
                    Children: []
                }]
            });

            expect(stringUtils.getParameterObject).not.toHaveBeenCalled();
        });

        it('should merge cmsResponse parameters with the cmsItem when mergeParams true', async () => {

            const result = await service.resolve({ ItemId: 'fake item', mergeParams: true });

            expect(result).toEqual({
                ItemMedialUrl: 'fake item media url',
                Title: 'I am a cms item',
                a: 1,
                b: 'what',
                Parameters: JSON.stringify({ a: 1, b: 'what' }),
                Children: [{
                    Title: 'I am a child cms item',
                    a: 2,
                    b: 'why',
                    Parameters: JSON.stringify({ a: 2, b: 'why' }),
                    Children: []
                }]
            });
            expect(stringUtils.getParameterObject).toHaveBeenCalled();
        });

        it('should merge cmsResponse parameters with the cmsItem when mergeParams missing', async () => {

            const result = await service.resolve({ ItemId: 'fake item' });

            expect(result).toEqual({
                ItemMedialUrl: 'fake item media url',
                Title: 'I am a cms item',
                a: 1,
                b: 'what',
                Parameters: JSON.stringify({ a: 1, b: 'what' }),
                Children: [{
                    Title: 'I am a child cms item',
                    a: 2,
                    b: 'why',
                    Parameters: JSON.stringify({ a: 2, b: 'why' }),
                    Children: []
                }]
            });
            expect(stringUtils.getParameterObject).toHaveBeenCalled();
        });


        it('should call httpService.get with ItemMediaUrl when inlineSvg true', async () => {

            const result = await service.resolve({ ItemId: 'fake item', inlineSvg: true });

            expect(result).toEqual('fakeSvg');
            expect(httpService.get).toHaveBeenCalledWith('fake item media url');
            expect(stringUtils.getParameterObject).not.toHaveBeenCalled();
        });
    });
});
