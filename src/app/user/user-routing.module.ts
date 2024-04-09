import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
 {
  path:'',
  component:UserPanelComponent,
  children:[
   {
    path:'change_password',
    component:ChangePasswordComponent
   },
   {
    path:'update',
    component:UpdateComponent
   }
  ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
