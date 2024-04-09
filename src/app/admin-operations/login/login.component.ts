import { Component } from '@angular/core';
import { UserServicesService } from '../../services/user-services.service';
import { HttpErrorResponse } from '@angular/common/http';
import {  Router } from '@angular/router';
import { NavigateService } from '../../services/navigate.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  iferror: boolean = false
  constructor(private userservice:UserServicesService,private router:Router,private navigateserice:NavigateService){}
  loginform:any={
    email:"",
    password:undefined
  }
  islogin=false
  response:any
  result:any
  private token!:string;
  message!:string;
  
  login(value:any){
    this.loginform.email=value.email
    this.loginform.password=value.password
    this.userservice.login(this.loginform.email,this.loginform.password).
      subscribe((res:any)=>{ 
      this.islogin=true
      this.response=JSON.stringify(res)
      this.result=JSON.parse(this.response);
      this.message=this.result.message;
      this.token=this.result.token;
      sessionStorage.setItem('token',`${this.token}`);
      setTimeout(() => {
        this.message = ''
      }, 100);
      setTimeout(() => {
        this.router.navigate(['/admin']);
      }, 100);
    },
    (error: HttpErrorResponse) => {
        this.iferror=true
        this.message = error.error.message;
        setTimeout(() => {
          this.message = ''
        }, 1000);
    });
  }
  redirectToRegistration(){
    this.router.navigate(['/admin_interface/register']);
  }
}
