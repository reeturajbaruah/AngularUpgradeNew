import { HttpClient } from '@angular/common/http';
import { ReplaySubject, } from 'rxjs';
import { CmsPostCache } from './cmsPostCache.service';

describe('cmsPostCache', () => {

    let service: CmsPostCache;
    let httpClient: HttpClient;
    let cacheStorage: CacheStorage;
    const buildId = 'TESTBUILD';
    let environmentConfig: any;

    beforeEach(() => {

        httpClient = jasmine.createSpyObj('httpClient', ['post']);
        cacheStorage = jasmine.createSpyObj('CacheStorage', ['open']);
        environmentConfig = {};
        service = new CmsPostCache(httpClient, cacheStorage, buildId, environmentConfig);
    });


    describe('post - with caching on', () => {

        let post$: ReplaySubject<Response>;
        let cache: Cache;
        let cachedResponse: Response;

        beforeEach(() => {
            environmentConfig.enableCmsCaching = true;

            post$ = new ReplaySubject<Response>(1);
            (httpClient.post as jasmine.Spy).and.returnValue(post$);

            cache = jasmine.createSpyObj('cache', ['match', 'put']);
            (cacheStorage.open as jasmine.Spy).and.resolveTo(cache);

            cachedResponse = { headers: { get: () => 'etag', keys: ()=> [] } } as any;
            (cache.match as jasmine.Spy).and.resolveTo(cachedResponse);

        });

        it('returns cached response if 304 returned on revalidation', async () => {

            const response = { status: 304, body: 'should not be this!' } as any;

            const cachedBody = { 'AC7B43BA-3F14-44CC-AAE7-E3B05924B6E1': 'cached' };

            cachedResponse['json'] = () => Promise.resolve(cachedBody);

            post$.next(response);
            
            const body = await service.post('', [{
                itemId: 'AC7B43BA-3F14-44CC-AAE7-E3B05924B6E1'
            }]);

            expect(body).toBe(cachedBody);

        });

        it('caches response if status is ok - cached', async () => {

            const response = {
                status: 200, body: { 'AC7B43BA-3F14-44CC-AAE7-E3B05924B6E1': 'new' }, headers: { keys: ()=>[] } } as any;

            const cachedBody = { 'AC7B43BA-3F14-44CC-AAE7-E3B05924B6E1': 'cached' };

            cachedResponse['json'] = () => Promise.resolve(cachedBody);

            post$.next(response);

            const body = await service.post('', [{
                itemId: 'AC7B43BA-3F14-44CC-AAE7-E3B05924B6E1'
            }]);

            expect(body).toBe(response.body);
            expect(cache.put).toHaveBeenCalled();
            const arg1 = (cache.put as jasmine.Spy).calls.argsFor(0)[1] as Response;
            const json = await arg1.json();
            expect(json).toEqual(response.body);
        });

        it('caches response if status is ok - not cached', async () => {

            const response = { status: 200, body: { 'AC7B43BA-3F14-44CC-AAE7-E3B05924B6E1': 'new' }, headers: { keys: () => [] } } as any;

            cachedResponse['json'] = () => Promise.resolve(undefined);

            post$.next(response);

            const body = await service.post('',[{
                itemId: 'AC7B43BA-3F14-44CC-AAE7-E3B05924B6E1'
            }]);

            expect(body).toBe(response.body);
            expect(cache.put).toHaveBeenCalled();
            const arg1 = (cache.put as jasmine.Spy).calls.argsFor(0)[1] as Response;
            const json = await arg1.json();
            expect(json).toEqual(response.body);

        });

        it('does not cache 4XX or 5XX responses', async () => {


            const response = { status: 400, body: { } } as any;

            cachedResponse['json'] = () => Promise.resolve(undefined);

            post$.next(response);

            const body = await service.post('', [{
                itemId: 'AC7B43BA-3F14-44CC-AAE7-E3B05924B6E1'
            }]);

            expect(cache.put).not.toHaveBeenCalled();
        });

    });

    describe('post - with caching off', () => {

        let post$: ReplaySubject<Response>;
        let cache: Cache;
        let cachedResponse: Response;

        beforeEach(() => {
            environmentConfig.enableCmsCaching = false;

            post$ = new ReplaySubject<Response>(1);
            (httpClient.post as jasmine.Spy).and.returnValue(post$);

            cache = jasmine.createSpyObj('cache', ['match', 'put']);
            (cacheStorage.open as jasmine.Spy).and.resolveTo(cache);

            cachedResponse = { headers: { get: () => 'etag', keys: ()=> [] } } as any;
            (cache.match as jasmine.Spy).and.resolveTo(cachedResponse);

        });


        it('does not cache response', async () => {

            const response = {
                status: 200, body: { 'AC7B43BA-3F14-44CC-AAE7-E3B05924B6E1': 'new' }, headers: { keys: ()=>[] } } as any;

            post$.next(response);

            const body = await service.post('', [{
                itemId: 'AC7B43BA-3F14-44CC-AAE7-E3B05924B6E1'
            }]);

            expect(body).toBe(response.body);
            expect(cacheStorage.open).not.toHaveBeenCalled();
            expect(cache.put).not.toHaveBeenCalled();            
        });

    });

});
