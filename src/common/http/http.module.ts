import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
    AuthInterceptor,
    CurrentUserCheckInterceptor,
    DefaultParamsInterceptor,
    FingerprintIdInterceptor,
    GlobalVariableInterceptor,
    HttpResponseErrorLogInterceptor,
    HttpResponseErrorNullCheckerInterceptor,
    HttpResponseInterceptor,
    CaptchaInterceptor,
    KioskInterceptor,
    KioskLoggingInterceptor
} from './interceptors';

@NgModule({
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: DefaultParamsInterceptor, //assume that this is first
            multi: true,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpResponseInterceptor,
            multi: true,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: GlobalVariableInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: KioskLoggingInterceptor,
            multi: true,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpResponseErrorLogInterceptor,
            multi: true,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpResponseErrorNullCheckerInterceptor,
            multi: true,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: CurrentUserCheckInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: FingerprintIdInterceptor,
            multi: true,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: KioskInterceptor,
            multi: true,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: CaptchaInterceptor,
            multi: true,
        },
    ],
})

export class HttpModule { }
