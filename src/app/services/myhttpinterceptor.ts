import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
    
    myToken = '4d3de37d506889b206b2aa811dcce7f2669c00fe';

    constructor() { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        request = request.clone({
            setHeaders: {
                Authorization: `${this.myToken}`
            }
        });
        return next.handle(request);
    }
}
