import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Modules
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { UserComponent } from './manteinance/user/user.component';
import { HospitalsComponent } from './manteinance/hospitals/hospitals.component';
import { DoctorsComponent } from './manteinance/doctors/doctors.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HospitalsComponent,
    DoctorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
