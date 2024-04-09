import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { GetUserComponent } from './get-user/get-user.component';
import { EditdataComponent } from './editdata/editdata.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
  {
   path:'',
   component:AdminComponent,
   children:[
    {
      path:'changePassword',
      component:ChangePasswordComponent
    },
    {
      path:'getUser',
      component:GetUserComponent
    },
    {
      path:'edit/:id',
      component:EditdataComponent
    },
    {
      path:'addUser',
      component:AddUserComponent
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminOperationsRoutingModule { }
