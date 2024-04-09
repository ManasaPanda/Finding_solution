import { Component, EventEmitter, Inject, OnInit, Output, output } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UserModel } from '../../model/user.model';
import { GetUserComponent } from '../get-user/get-user.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  
  user:UserModel={
    id:-1,
    Name:'',
    email:'',
    age:0,
    password:''
  }
  message: any;
  response: string | undefined;
  result: any;
  iferror: boolean = false
  constructor(private userdata: UserDataService,private matdialogref:MatDialog,private router:Router) {
  }
  //@Inject(GetUserComponent) getuser!:GetUserComponent
  //@Output() userAdded: EventEmitter<any>=new EventEmitter<any>
  onSubmit() {
    // console.log(this.Data);
    if (this.user.id && this.user.Name && this.user.age && this.user.password) {
      this.userdata.postdata(this.user.id,this.user.email,this.user.Name, this.user.age, this.user.password)
        .subscribe(
          (res: any) => {
            this.iferror=false
            this.response = JSON.stringify(res)
            this.result = JSON.parse(this.response);
            this.message = this.result.message;
           // this.userAdded.emit();
          //  this.getuser.renderAlldata().subscribe(()=>{
          //  })
          //window.location.reload();
          
            setTimeout(() => {
              this.message =''
            }, 1000);
            setTimeout(()=>{
              this.router.navigate(['/admin/getUser']);
            },1000);
            this.user.id=-1,
            this.user.Name=''
            this.user.email=''
            this.user.age=0
            this.user.password=''
          },
          (Error: HttpErrorResponse) => {
            // if (Error.status === 404) {
            //   this.message = 'Internal Server error Try after Some Time';
            // } else if (Error.status === 409) {
            //   this.message = 'id already exist';
            // } else if (Error.status === 400) {
            //   this.message = 'all field required'
            // }
            // else {
            //   this.message = 'An error occurred. Please try again later.';
            // }

            this.message=Error.error.message
            this.iferror = true
            setTimeout(() => {
              this.message = null
            }, 1000);  
        })
      }
    }
  // close() {
  //   this.matdialogref.closeAll();
  //   this.router.navigate(['/admin/getUser']);
  // }
}
