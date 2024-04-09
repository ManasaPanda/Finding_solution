import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../../services/user-data.service';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { UpdateComponent } from '../update/update.component';
import {MatDialog} from '@angular/material/dialog'

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrl: './user-panel.component.css'
})
export class UserPanelComponent implements OnInit, OnChanges{
  constructor(private router: Router,private userService:UserDataService, private dialog:MatDialog) { }
  data:any;
  id:any
  message:any
  ngOnInit(): void {
    sessionStorage.setItem("token","");
    this.id=sessionStorage.getItem("userId");
    this.userService.getdatabyid(this.id).subscribe((res)=>{
      const result=JSON.stringify(res)
      this.data=JSON.parse(result)[0];
      //console.log(this.data);
    },
    (err)=>{
      this.message=err.error.message;
    })
  }
  deleteAccount(): void {
    const remark=confirm('are you sure want to delete');
    if(remark){
    this.userService.deleteuser(this.id).subscribe((res)=>{
      sessionStorage.setItem("userId",'')
      this.router.navigate(['user_interface']);
    },
    (err)=>{
      alert('something went wrong try agter some time');
    })
  }
  }
  logout(): void {
    sessionStorage.setItem("userId",'')
    this.router.navigate(['user_interface']);
  }
  ngOnChanges(): void {
    this.userService.getdatabyid(this.id).subscribe((res)=>{
      const result=JSON.stringify(res)
      this.data=JSON.parse(result)[0];
    })
  }

  changePassword(){
    this.dialog.open(ChangePasswordComponent);
  }
  updateDetails(){
   this.dialog.open(UpdateComponent,{
    width:'350px',
   });
   this.dialog.afterAllClosed.subscribe((result:any)=>{
    this.ngOnInit();
   })
  }
  
}
