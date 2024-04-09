import { CanActivate, Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn:'root'
})
export class authAdminGuard implements CanActivate{
  constructor(private authservice:AuthServiceService,private route:Router) { }
  canActivate(): boolean {
    //const isLoggedIn = sessionStorage.getItem('isLoggedIn')
    if (this.authservice.isloginadmin()) {
      return true;
    } else {
      this.route.navigate(['admin_interface']);
      return false;
    }
    // if (isLoggedIn === 'true') {
    //   return true;
    // } else {
    //   this.route.navigate(['/login']);
    //   return false;
    // }
  }
};
