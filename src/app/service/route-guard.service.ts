import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthCodeService } from './auth-code.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {
  


  constructor(private authCodeService: AuthCodeService, private router : Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot  ) {
    if (this.authCodeService.isUserLoggedIn())
      return true;
    
    this.router.navigate(['login']);
    return false;
  }
}

