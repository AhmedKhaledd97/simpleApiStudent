import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../authentication.service';


@Injectable({
  providedIn: 'root'
})
export class AuothService implements  HttpInterceptor {

  constructor(private  auoth: AuthenticationService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    /* const userName = `ahmed`;
     const password = `ahmed`;
     const basicAuthHeaderString = `Basic ` + window.btoa(userName + `:` + password); // 64
 */
    if(this.auoth.getAuthentication() && this.auoth.getToken()){
      req = req.clone({
        setHeaders: {
          Authorization: this.auoth.getToken()
        }
      });
    }
    return next.handle(req);
  }


  }

