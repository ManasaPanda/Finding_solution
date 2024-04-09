import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor(private http:HttpClient) {
   }

  private url='http://localhost:4900'

  login(email:string,password:string){
    return this.http.post(`${this.url}/login`,{email,password});
  }
  RegisterAdmin(email:string,password:string){
    return this.http.post(`${this.url}/add_user`,{email,password});
  }
}
