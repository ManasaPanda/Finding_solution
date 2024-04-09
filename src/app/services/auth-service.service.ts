import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  isloginadmin():boolean{
    return sessionStorage.getItem('token') != '';
  }
  isloginUser():boolean{
    return sessionStorage.getItem('userId') != '';
  }
}
