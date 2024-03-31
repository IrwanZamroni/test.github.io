
import { Injectable } from '@angular/core';
import { Router,CanActivate,  ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginserviceService } from './loginservice.service';

@Injectable({
  providedIn: 'root'
})
export class authguardGuard implements CanActivate {

  constructor(private router: Router, private loginserviceService: LoginserviceService) { }


  canActivate(): boolean {
    
    const isUserAuthenticated = this.loginserviceService.verifyLogin();
    if (isUserAuthenticated) {
      return true; 
    } else {
     
      this.router.navigate(['']);
      return false; 
    }
  }
}
