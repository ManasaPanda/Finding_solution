import { Component, Inject } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';
import { ActivatedRoute, Params } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';
import { updatemodel } from '../../model/user.model';

@Component({
  selector: 'app-editdata',
  templateUrl: './editdata.component.html',
  styleUrl: './editdata.component.css'
})
export class EditdataComponent {
  user:updatemodel={
    id:0,
    email:'',
    age:0,
    name:''
  }
  datas: any
  message: any
  iferror:boolean = false
  constructor(private userdata: UserDataService, private route: ActivatedRoute, @Inject(MAT_DIALOG_DATA) private data: number,
    private matdialogref: MatDialogRef<EditdataComponent>) { }
  ngOnInit(): void {
    this.user.id = this.data
    this.loaddata();
  }
  updateData() {
    this.userdata.updatedata(this.user.id,this.user.email,this.user.name, this.user.age)
      .subscribe((res) => {
        this.iferror=false
        const results= JSON.stringify(res);
        const response = JSON.parse(results)
        this.message=response.message;
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
  loaddata() {
    this.userdata.getdatabyid(this.user.id).subscribe((res) => {
      const data = JSON.stringify(res)
      this.datas = JSON.parse(data);
      //console.log();
      
      this.user.name = this.datas.response[0].Name;
      this.user.age = this.datas.response[0].age;
      this.user.email=this.datas.response[0].email;
    })
  }
  close() {
    this.matdialogref.close();
  }
}
