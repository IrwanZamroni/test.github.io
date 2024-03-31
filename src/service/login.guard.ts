// import { CanActivateFn } from '@angular/router';

// export const loginGuard: CanActivateFn = (route, state) => {
//   return true;
// };

import { Injectable } from '@angular/core';
import { Router,CanActivate,  ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginserviceService } from './loginservice.service';

@Injectable({
  providedIn: 'root'
})
export class loginGuard implements CanActivate {

  constructor(private router: Router, private loginserviceService: LoginserviceService) { }


  canActivate(): boolean {
    
    const isUserAuthenticated = this.loginserviceService.verifyLogin();
    if (isUserAuthenticated==false) {
      return true; 
    } else {
      this.router.navigate(['/home']);
      return false; 
    }
  }
}
