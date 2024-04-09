import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {

 token:any
  private url='http://localhost:4900'
  constructor(private http:HttpClient) {
    this.token = sessionStorage.getItem('token');
     console.log(this.token);
   }
   changepassword(old_password:string,password:string){
   const headers= new HttpHeaders({
    'authorization':`Bearer ${this.token}`
   })
    return this.http.put(`${this.url}/change_password`,{old_password,password},{ headers })
   }
}
