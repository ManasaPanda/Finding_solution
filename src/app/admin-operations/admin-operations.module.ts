import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminOperationsRoutingModule } from './admin-operations-routing.module';
import { GetUserComponent } from './get-user/get-user.component';
import { EditdataComponent } from './editdata/editdata.component';
import { FormsModule } from '@angular/forms';
import { AddUserComponent } from './add-user/add-user.component';
import { AdminregisterComponent } from './adminregister/adminregister.component';
import { MatDialogRef } from '@angular/material/dialog';
import { SearchingPipe } from './pipe/searching.pipe';
import { SearchingByNamePipe } from './pipe/searching-by-name.pipe';
import { ModifyNameUsingAgeDirective } from './directives/modify-name-using-age.directive';
import { ComponentChangePasswordDirective } from './directives/component-change-password.directive';
//import { DataTablesModule } from 'angular-datatables';
//import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    AdminregisterComponent,
    GetUserComponent,
    EditdataComponent,
    AddUserComponent,
    SearchingPipe,
    SearchingByNamePipe,
    ModifyNameUsingAgeDirective,
    ComponentChangePasswordDirective
  ],
  imports: [
    CommonModule,
    AdminOperationsRoutingModule,
    FormsModule,
  ],
  providers:[
    GetUserComponent,
  ],
  exports:[
   
  ]
})
export class AdminOperationsModule { }
