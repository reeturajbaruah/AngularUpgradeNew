import { CmsBundler } from './cmsBundler.service';
import { wait } from 'common/utilities';
import { CmsPostCache } from '../cmsPostCache/cmsPostCache.service';
import { IListCmsResponse } from 'cms/cms.models';

describe('cmsBundler', () => {

    let service: CmsBundler;
    let cmsPostCache: CmsPostCache;

    beforeEach(() => {

        cmsPostCache = jasmine.createSpyObj('cmsPostCache', ['post']);

        service = new CmsBundler(cmsPostCache);
    });

    describe('xor', () => {

        it('is communitive', () => {
            const guids = [
                'AC7B43BA-3F14-44CC-AAE7-E3B05924B6E1',
                '3F780162-3EEA-43F7-8E08-731456A8BE54',
                'AFA12DB0-9F2A-478E-AE67-02BE4745F3C8'
            ];

            const a = service['xor'](guids);
            const b = service['xor']([...guids].reverse());

            expect(a).toEqual(b);
        });

    });

    describe('postThenMap', () => {
        it('maps it', async () => {

            const responses = [
                { requestedItemId: 'AC7B43BA-3F14-44CC-AAE7-E3B05924B6E1' },
                { requestedItemId: '3F780162-3EEA-43F7-8E08-731456A8BE54' },
                { requestedItemId: 'AFA12DB0-9F2A-478E-AE67-02BE4745F3C8' }
            ];

            const requests = [
                { itemId: 'AC7B43BA-3F14-44CC-AAE7-E3B05924B6E1' },
                { itemId: '3F780162-3EEA-43F7-8E08-731456A8BE54' },
                { itemId: 'AFA12DB0-9F2A-478E-AE67-02BE4745F3C8' }
            ];

            (cmsPostCache.post as jasmine.Spy).and.callFake(() => Promise.resolve({
                responses
            }));

            const result = await service['postThenMap'](requests);

            expect(
                result
            ).toEqual({
                ['AC7B43BA-3F14-44CC-AAE7-E3B05924B6E1'.toLowerCase()]: { requestedItemId: 'AC7B43BA-3F14-44CC-AAE7-E3B05924B6E1' },
                ['3F780162-3EEA-43F7-8E08-731456A8BE54'.toLowerCase()]: { requestedItemId: '3F780162-3EEA-43F7-8E08-731456A8BE54' },
                ['AFA12DB0-9F2A-478E-AE67-02BE4745F3C8'.toLowerCase()]: { requestedItemId: 'AFA12DB0-9F2A-478E-AE67-02BE4745F3C8' }
            });

        });
    });

    describe('getCmsItemByIds', () => {
        it('empty requests calls nothing', async () => {
            const para = {};
            const arg = [];
            (cmsPostCache.post as jasmine.Spy).and.resolveTo(para);

            const result = await service.getCmsItemByIds(arg);

            expect(cmsPostCache.post).not.toHaveBeenCalled();
            expect(result).toEqual({});            
        });

        it('calls post', async () => {
            const para = {};
            const arg = [{ itemId: 'AC7B43BA-3F14-44CC-AAE7-E3B05924B6E1'}];
            (cmsPostCache.post as jasmine.Spy).and.resolveTo(para);

            const result = await service.getCmsItemByIds(arg);

            expect(cmsPostCache.post).toHaveBeenCalled();
            const arg1 = (cmsPostCache.post as jasmine.Spy).calls.argsFor(0)[1];
            expect(arg1).toEqual({ requests: arg});
            expect(result).toEqual(para);
        });
    });

    describe('getCmsItemById', () => {
        it('can queue', async () => {

            spyOn(service as any, 'postThenMap').and.callFake(i => Promise.resolve(i.reduce((acc, v) => 
                ({...acc, [v.itemId]: v })
            , {})));



            //don't await these
            service.getCmsItemById({ itemId: 'AC7B43BA-3F14-44CC-AAE7-E3B05924B6E1' });
            service.getCmsItemById({ itemId: '3F780162-3EEA-43F7-8E08-731456A8BE54' });

            //wait till after max time to ensure queue picks up all items
            await wait(300);

            //if this request as 'both' itemIds, then the queue has been processed correctly
            expect(service['postThenMap']).toHaveBeenCalledWith([
                { itemId: 'AC7B43BA-3F14-44CC-AAE7-E3B05924B6E1'.toLowerCase() },
                { itemId: '3F780162-3EEA-43F7-8E08-731456A8BE54'.toLowerCase() }
            ]);
            
        });


    });

    describe('getCmsPages', () => {
        it('should call post', async () => {
            const para: IListCmsResponse = {} as any;
            const arg = [{ itemId: 'AC7B43BA-3F14-44CC-AAE7-E3B05924B6E1'}];
            (cmsPostCache.post as jasmine.Spy).and.resolveTo(para);

            const result = await service.getCmsPages(arg);

            expect(cmsPostCache.post).toHaveBeenCalled();
            expect(result).toEqual(para);
        });
    });


});
