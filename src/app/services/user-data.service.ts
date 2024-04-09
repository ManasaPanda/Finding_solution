import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
uesersData:any;
  private url='http://localhost:4004'
  constructor(private http:HttpClient) { }

  getadddatas(){
    return this.http.get(`${this.url}/details`);
  }
  postdata(id:number,email:string,Name:string,age:number,password:string){
   return this.http.post(`${this.url}/add_user`,{id,Name,age,password,email})
    //console.log(id,Name,age);
  }
  updatedata(id:number,email:string,Name:string,age:number){
    return this.http.put(`${this.url}/modify/${id}`,{email,Name,age});
  }
  getdatabyid(id:number){
    return this.http.get(`${this.url}/user/${id}`);
   // console.log(this.http.get(`${this.url}/user/${id}`));
  }
  deleteuser(id:number){
    return this.http.delete(`${this.url}/delete/${id}`);
  }
  Userlogin(id:number,email:string,password:string){
    return this.http.post(`${this.url}/login/${id}`,{email,password});
  }

  changepassword(id:number,old_password:string,new_password:string){
    return this.http.put(`${this.url}/change_password/${id}`,{old_password,new_password});
  }
}
