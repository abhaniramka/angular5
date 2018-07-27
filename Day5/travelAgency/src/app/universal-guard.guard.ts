import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversalGuardGuard implements CanActivate, CanDeactivate<{}> {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const url = state.url;
    if (url !== '/agent')
      return true;
    else
      return false;
  }

  canDeactivate(component: {}, currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean {
    return window.confirm('Kaha jaa rahe ho bhaaya?');
  }
}
