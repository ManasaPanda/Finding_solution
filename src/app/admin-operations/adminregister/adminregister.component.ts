import { Component } from '@angular/core';
import { UserServicesService } from '../../services/user-services.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-adminregister',
  templateUrl: './adminregister.component.html',
  styleUrl: './adminregister.component.css'
})
export class AdminregisterComponent {
  admin = {
    email: '',
    password: ''
  };
  message:string=''
  response:any
  result:any
  iferror: boolean = false
  constructor(private adminregistration:UserServicesService, private router:Router) { }

  registerAdmin() {
    console.log('Admin registered:', this.admin);
    this.adminregistration.RegisterAdmin(this.admin.email,this.admin.password).
    subscribe(
      (res:any)=>{
        this.iferror=false
        this.response=JSON.stringify(res)
        this.result=JSON.parse(this.response);
        this.message=this.result.message;
       this.admin.email=''
       this.admin.password=''
       setTimeout(() => {
        this.message = ''
      }, 1000);
      },
      (Error:HttpErrorResponse)=>{
        // if (Error.status === 404) {
        //   this.message = Error.error.message;
        // } else if (Error.status === 409) {
        //   this.message = Error.error.message;
        // }else if(Error.status === 400){
        //   this.message=Error.error.message
        // }
        // else {
        //   this.message = Error.error.message;
        // }
        this.iferror = true
        this.message=Error.error.message
        setTimeout(() => {
          this.message = ''
        }, 1000);
      
      })
  }
  redirecttiLogin(){
    this.router.navigate(['admin_interface/login']);
  }
}
