import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../../services/user-data.service';
import { MatDialog } from '@angular/material/dialog';
import { EditdataComponent } from '../editdata/editdata.component';
import { UserModel } from '../../model/user.model';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrl: './get-user.component.css'
})
export class GetUserComponent implements OnInit{

 
 dttrigger:Subject<any>= new Subject<any>()
 
 //dtoptions : DataTables.setting={}
  
 //dtoptions: DataTables

  //@ViewChild(ComponentChangePasswordDirective) change_password!:ComponentChangePasswordDirective
  data:UserModel={
    id:0,
    Name:'',
    email:'',
    age:0,
    password:''
  };
  id!:number;
  constructor(private user_details:UserDataService, private route:Router,private matdialog:MatDialog,//private componentfactory:ComponentFactoryResolver

  ){}

ngOnInit(): void {
  
  this.renderAlldata();
}    

updateData(id:any){
   this.matdialog.open(EditdataComponent,{
    width:'350px',
    data:id
   })
    this.matdialog.afterAllClosed.subscribe(()=>{
      this.renderAlldata();
    })
  // const container=this.componentfactory.resolveComponentFactory(EditdataComponent)
  // const containerviewref=this.change_password.viewcontainerref
  // containerviewref.clear()
  // containerviewref.createComponent(container)
  }
deleteData(id:any){
  this.user_details.deleteuser(id).subscribe((res)=>{
    this.user_details.getadddatas().subscribe((resp:any)=>{
      //  console.log(resp);
      //this.data= resp.response;
        this.data=JSON.parse(JSON.stringify(resp)).response
      })
      // alert(JSON.stringify(res));
      const response=JSON.stringify(res)
      const resobj=JSON.parse(response);
      alert(resobj.message);
  },
  (error)=>{
    console.log(error.error.message);
  })
}
renderAlldata():any{
  this.user_details.getadddatas().subscribe((resp)=>{
    //console.log(resp);
    //this.data=JSON.stringify(resp)
    this.data=JSON.parse(JSON.stringify(resp)).response
    //console.log(JSON.parse(JSON.stringify(resp)).response);
    //this.data= resp.response;
  })
}
// loaddata(){
//   this.renderAlldata()
// }

searchresult:string='select'

searchCriteria:string=''
// input(value:any){
//   //console.log(this.searchCriteria);  
//   this.searchCriteria=value
// }
}

