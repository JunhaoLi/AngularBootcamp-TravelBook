import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { CanDeactivateGuard } from './shared/can-deactivate.service';
import { LoggingInterceptor } from './shared/logging-interceptor.service';
import { AuthInterceptor } from './auth/auth-interceptor.service';

@NgModule({
    providers: [
        CanDeactivateGuard,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoggingInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        }
    ]
})
export class CoreModule { }
