import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserInterfaceComponent } from './user-interface/user-interface.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { UpdateComponent } from './update/update.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    UserInterfaceComponent,
    UserLoginComponent,
    RegistrationComponent,
    ChangePasswordComponent,
    UserPanelComponent,
    UpdateComponent
  ],
  exports:[
    UserPanelComponent,
   ]
    ,
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,HttpClientModule
  ],
  providers:[]
})
export class UserModule { }
