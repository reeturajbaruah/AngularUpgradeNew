import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { CmsCacheName } from 'cms/constants';
import { BuildIdRef } from 'common/providers';
import { firstValueFrom } from 'rxjs';
import { ENVIRON_CONFIG } from 'common/upgrades';

@Injectable()
export class CmsPostCache {
    
    constructor(
        private httpClient: HttpClient,
        private caches: CacheStorage,
        @Inject(BuildIdRef) private buildId: string,
        @Inject(ENVIRON_CONFIG) private config
    ){       
    }

    public async post<T, R>(url: string, data: T): Promise<R> {        
        return this.config.enableCmsCaching
            ? this.performPostWithCaching(url, data)
            : this.performPostWithoutCaching(url, data);
    }

    private async performPostWithCaching<T, R>(url: string, data: T): Promise<R> {
        const cache = await this.caches.open(`${CmsCacheName}${this.buildId}`);                
        const cachedResponse = await cache.match(url);

        const etag = cachedResponse?.headers?.get('etag');

        const response = await (firstValueFrom(
            this.httpClient.post(
                url,
                data,
                {
                    observe: 'response',
                    withCredentials: false,
                    headers: etag
                        ? { 'if-none-match': etag }
                        : {}
                })
        ).catch(r => r));

        if (response.status === 304) {
            //not modified
            return await cachedResponse.json();
        } else if (response.status >= 200 && response.status < 300) {
            //modified, ok
            const headers = response.headers.keys().reduce((acc, k) => ({ ...acc, [k]: response.headers.get(k) }), {});

            await cache.put(url, new Response(JSON.stringify(response.body), {
                headers,
                status: response.status,
                statusText: response.statusText
            }));
        }
        //anything else, error, use error response (is there a reasons to use the cached version if error comes back?)

        return response.body;
    }
    
    private async performPostWithoutCaching<T, R>(url: string, data: T): Promise<R> {
        
        const response = await (firstValueFrom(
            this.httpClient.post(
                url,
                data,
                {
                    observe: 'response',
                    withCredentials: false
                })
        ).catch(r => r));

        return response.body;
    }

}
