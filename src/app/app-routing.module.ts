import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './admin-operations/login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './home/about/about.component';
import { ContactComponent } from './home/contact/contact.component';
import { authAdminGuard } from './guard/auth-guard.guard';
import { PagenotfoundComponent } from './home/pagenotfound/pagenotfound.component';
import { FaqsComponent } from './home/faqs/faqs.component';
import { DocumentationComponent } from './home/documentation/documentation.component';
import { AdminInterfaceComponent } from './admin-operations/admin-interface/admin-interface.component';
import { AdminregisterComponent } from './admin-operations/adminregister/adminregister.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { authUserGuard } from './guard/auth-user.guard';
import { UserInterfaceComponent } from './user/user-interface/user-interface.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'admin',
    // component:AdminComponent,
    canActivate: [authAdminGuard],
    loadChildren:() => import('./admin-operations/admin-operations.module').then((m)=>m.AdminOperationsModule)
  },
  {
    path:'admin_interface',
    component:AdminInterfaceComponent
  },
  {
    path:'admin_interface/login',
    component:LoginComponent
  },
  {
    path:'admin_interface/register',
    component:AdminregisterComponent
  },
  {
    path:'user',
    // component:UserInterfaceComponent
    canActivate:[authUserGuard],
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule)
  },
  {
    path:'user_interface',
    component:UserInterfaceComponent
  },
  {
    path:'user_interface/register',
    component:RegistrationComponent
  },
  {
    path:'user_interface/login',
    component:UserLoginComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'FAQS',
    component:FaqsComponent
  },
  {
    path:'Documentation',
    component:DocumentationComponent
  },
  {
    path:'**',
    component:PagenotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
