import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardServiceService } from '../services/authguard-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthGuard implements CanActivate {
  // Authguardservice: any;

  constructor(private Authguardservice: AuthguardServiceService, private router: Router) {}
  canActivate(): boolean {

    if (!this.Authguardservice.gettoken()) {

      console.log(this.Authguardservice.gettoken())
      this.router.navigateByUrl("/account/login");
    }
    return this.Authguardservice.gettoken();
  }

}
