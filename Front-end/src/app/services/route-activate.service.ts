import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthenticationService} from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteActivateService implements CanActivate {

  constructor(private serviceLogin: AuthenticationService,
              private route: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.serviceLogin.isLogin()) {
      return true;
    }
    this.route.navigateByUrl('/con');
    return false;
  }
}

