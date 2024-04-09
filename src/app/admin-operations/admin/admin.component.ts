import { AfterViewInit, Component, EventEmitter, Inject, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddUserComponent } from '../add-user/add-user.component';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { GetUserComponent } from '../get-user/get-user.component';
import { UserDataService } from '../../services/user-data.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit,AfterViewInit{
  constructor(private router: Router, private matdialog: MatDialog,private getusercomponent:GetUserComponent) { }
 
 // @ViewChild(GetUserComponent) getusercomponent!:GetUserComponent
  // @Output() sendData: EventEmitter<any> = new EventEmitter<any>();
  // @Inject(GetUserComponent) getuser!:GetUserComponent

  logout() {
    sessionStorage.setItem('token', '');
    // window.location.reload();  used to reload the current page.
    this.router.navigate(['admin_interface']);
  }
  ngOnInit(): void {
   // console.log(this.getusercomponent);
    sessionStorage.setItem("userId", "");
  }
  // redirecttoinsert() {
  //  this.matdialog.open(AddUserComponent, {
  //     width: '350px'
  //   });
  //   // dialogref.afterClosed().subscribe(()=>{
     
  //   //   // dialogref.componentInstance.userAdded.subscribe(()=>{
  //   //     //console.log(this.getusercomponent.renderAlldata);
  //   //     if(this.getusercomponent){
  //   //       console.log("called");
  //   //       this.getusercomponent.renderAlldata();
  //   //       //window.location.reload();
  //   //     }
  //   //   })
  //   }
  redirecttochangepassword() {
     this.matdialog.open(ChangePasswordComponent,{
      width: '350px'
     });
  }
  ngAfterViewInit(): void {
    //console.log(this.getusercomponent);
    
  }
  // test(){
  //   this.user_details.getadddatas().subscribe((resp:any)=>{
  //     let respData=resp;
  //     setTimeout(()=>{  
  //       console.log(this.getusercomponent.data);

  //       // this.getusercomponent.data=respData;
  //       // console.log(this.getusercomponent.data);
        
  //     },300)
    
  // })
   
  // }
}
