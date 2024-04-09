import { Component, OnInit, ViewChild, } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';
import { updatemodel } from '../../model/user.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit {
  constructor(private userservice: UserDataService, private dialogref: MatDialogRef<UpdateComponent>, private http: HttpClient) { }
  user:updatemodel={
    id:0,
    name:'',
    email:'',
    age:0
  }
  
  datas: any
  message!: string | null;
  iferror: boolean = false
  //  @ViewChild(UserPanelComponent) userPanelComponent!: UserPanelComponent;
  ngOnInit(): void {
    this.user.id = Number(sessionStorage.getItem('userId'))
    this.userservice.getdatabyid(this.user.id).subscribe((res) => {
      const data = JSON.stringify(res)
      this.datas = JSON.parse(data);
      this.user.name = this.datas[0].Name;
      this.user.age = this.datas[0].age;
      this.user.email=this.datas[0].email
    },
      (err) => {
        alert(err.error.message);
      })
  }
  updateData() {
    const result = confirm("Are you sure wants to update ??");
    if (result) {
      this.userservice.updatedata(this.user.id,this.user.email,this.user.name, this.user.age)
        .subscribe((res) => {
         this.message=JSON.parse(JSON.stringify(res)).message
          setTimeout(() => {
            this.message = null
          }, 1000);
        },
        (Error:HttpErrorResponse) => {
          this.message=Error.error.message
        this.iferror = true
        setTimeout(() => {
          this.message = ''
        }, 1000);
        })
    }
  }
  close() {
    this.dialogref.close();
  }
}

