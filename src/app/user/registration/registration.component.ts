import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { UserDataService } from '../../services/user-data.service';
import { UserModel } from '../../model/user.model';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
 
  user:UserModel={
    id:NaN,
    Name:'',
    email:'',
    age:NaN,
    password:''
  }

  message:string=''
  response:any
  result:any
  iferror: boolean = false
  constructor(private userregistration:UserDataService, private router:Router) { }

  registerAdmin() {
    this.userregistration.postdata(this.user.id,this.user.email,this.user.Name,this.user.age,this.user.password).
    subscribe(
      (res:any)=>{
        this.iferror=false
        this.response=JSON.stringify(res)
        this.result=JSON.parse(this.response);
        this.message=this.result.message;
        setTimeout(() => {
          this.message = ''
        }, 1000);
        this.user.id=NaN,
        this.user.Name=''
        this.user.email=''
        this.user.age=NaN,
        this.user.password=''
      },
      (Error:HttpErrorResponse)=>{
        // if (Error.status === 404) {
        //   this.message = 'Internal Server error Try after Some Time';
        // } else if (Error.status === 409) {
        //   this.message = 'id already exist';
        // }else if(Error.status === 400){
        //   this.message='all field required'
        // }
        // else {
        //   this.message = 'An error occurred. Please try again later.';
        // }
        this.iferror = true
        this.message=Error.error.message;
        setTimeout(() => {
          this.message = ''
        }, 1000);
        
      })
  }
  redirecttoLogin(){
    this.router.navigate(['user_interface/login']);
  }
  

}
