import { Inject, Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, mergeMap, from, EMPTY } from 'rxjs';
import { ENVIRON_CONFIG, WindowRef } from 'common/module';
import { CaptchaService } from 'captcha/services/captcha.service';

@Injectable()
export class CaptchaInterceptor implements HttpInterceptor {

    constructor(
        @Inject(WindowRef) private windowRef: Window,
        @Inject(ENVIRON_CONFIG) private environmentConfig,
        private captchaService: CaptchaService
      ) { }
  
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const url = request.url;

        if (!url) {
            return next.handle(request);
        }

        const host = this.windowRef.location.host.toLowerCase();
        const testUrl = new URL(url, this.windowRef.location.origin);
        const testHost = (testUrl).host.toLowerCase();

        if (host !== testHost) {
            return next.handle(request);
        }

        const path = testUrl.pathname;

        if (this.environmentConfig.reCaptchaConfig.enabled) {

            return from(this.captchaService.assess(path))
                .pipe(
                    mergeMap(({ token, configured, abort }) => {
                        if (abort) {
                            return EMPTY;
                        }

                        if (configured) {

                            const setHeaders = token
                                ? { 'hctra-captcha-token': token }
                                : {};

                            const clonedRequest = request.clone({ setHeaders });
                            return next.handle(clonedRequest);
                            
                        } else {
                            return next.handle(request);
                        }                        
                    })
            );
        }

        return next.handle(request);
    }
}
