import { Inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { FingerprintService } from 'common/services/fingerprintService/fingerPrintId.service';
import { ENVIRON_CONFIG, WindowRef } from 'common/module';

@Injectable()
export class FingerprintIdInterceptor implements HttpInterceptor {

  constructor(
    private fingerprintService: FingerprintService,
    @Inject(WindowRef) private windowRef: Window,
    @Inject(ENVIRON_CONFIG) private environmentConfig,
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const url = request.url;

    if (!url) {
      return next.handle(request);
    }

    const host = this.windowRef.location.host.toLowerCase();
    const testHost = (new URL(url, this.windowRef.location.origin)).host.toLowerCase();

    if (host !== testHost) {
      return next.handle(request);
    }

    if (this.environmentConfig.useFingerPrintId) {
      const clonedRequest = request.clone({
        setHeaders: {
          FingerPrintId: this.fingerprintService.getFingerprintId()
        }
      });

      return next.handle(clonedRequest);
    }

    return next.handle(request);
  }

}
