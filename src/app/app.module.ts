import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './admin-operations/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin-operations/admin/admin.component';
import { SideBarComponent } from './dashboard/side-bar/side-bar.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './home/about/about.component';
import { ContactComponent } from './home/contact/contact.component';
import { PagenotfoundComponent } from './home/pagenotfound/pagenotfound.component';
import { ChangePasswordComponent } from './admin-operations/change-password/change-password.component';
import { FaqsComponent } from './home/faqs/faqs.component';
import { DocumentationComponent } from './home/documentation/documentation.component';
import { AdminInterfaceComponent } from './admin-operations/admin-interface/admin-interface.component';
import { UserRoutingModule } from './user/user-routing.module';
import { authAdminGuard } from './guard/auth-guard.guard';
import { authUserGuard } from './guard/auth-user.guard';
import { UserModule } from './user/user.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

//import { DataTablesModule } from 'angular-datatables';
//import { SearchingByNamePipe } from './pipes/searching-by-name.pipe';
//import { SearchingPipe } from './admin-operations/pipe/searching.pipe';
//import { GetUserComponent } from './admin-operations/get-user/get-user.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    SideBarComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DashboardComponent,
    AboutComponent,
    ContactComponent,
    PagenotfoundComponent,
    ChangePasswordComponent,
    FaqsComponent,
    DocumentationComponent,
    AdminInterfaceComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    UserRoutingModule,
    UserModule
  ],
  providers: [authAdminGuard,authUserGuard, provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule { }
