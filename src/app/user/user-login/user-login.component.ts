import { Component } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  id!:number
  email!:string
  password:string=''
  message:string =''
  iferror: boolean = false
  constructor(private userlogin:UserDataService,private router:Router){}
  loginUser(){
    this.userlogin.Userlogin(this.id,this.email,this.password).
    subscribe((res)=>{
      this.message='login sucessful'
      sessionStorage.setItem('userId',`${this.id}`)
      setTimeout(() => {
        this.message = ''
      }, 100);
      setTimeout(() => {
        this.router.navigate(['/user']);
      }, 100);
    },
    (error)=>{
      this.iferror = true
      if(error.status == 400){
        this.message=error.error.message
      }
      if(error.status === 404){
        this.message=error.error.message
      }
      setTimeout(() => {
        this.message = ''
      }, 1000);
    })
  }
  navigateToRegister(){
    this.router.navigate(['/user_interface/register']);
  }
}
