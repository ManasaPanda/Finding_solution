import { CanActivate, Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class authUserGuard implements CanActivate{
  constructor(private authguard:AuthServiceService, private router:Router){
  }
  canActivate(): boolean {
    if(this.authguard.isloginUser()){
      return true;
    }
    else{
      this.router.navigate(['user_interface'])
      return false;
    }
  }
};
