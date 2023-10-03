import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { Grafica1Component } from "./grafica1/grafica1.component";
import { PagesComponent } from "./pages.component";
import { ProgressComponent } from "./progress/progress.component";
import { AccountSettingsComponent } from "./account-settings/account-settings.component";
import { PromisesComponent } from "./promises/promises.component";
import { AuthGuard } from "../guards/auth.guard";
import { ProfileComponent } from "./profile/profile.component";

//Manteinance
import { UserComponent } from "../manteinance/user/user.component";
import { HospitalsComponent } from "../manteinance/hospitals/hospitals.component";
import { DoctorsComponent } from "../manteinance/doctors/doctors.component";


const routes: Routes = [
  {path:'dashboard',
  component: PagesComponent,
  canActivate: [AuthGuard],
  children: [
    {path: '', component: DashboardComponent, data: {title:'Dashboard'}},
    {path: 'progress', component: ProgressComponent, data: {title:'Progress Bar'}},
    {path: 'grafica1', component: Grafica1Component, data: {title:'Graphics'}},
    {path: 'account-settings', component: AccountSettingsComponent, data: {title:'Account Settings'}},
    {path: 'promises', component: PromisesComponent, data: {title:'Rxjs'}},
    {path: 'profile', component: ProfileComponent, data: {title:'Perfil de usuario'}},

    //Manteinance
    {path: 'users', component: UserComponent, data: {title:'Application User'}},
    {path: 'hospitals', component: HospitalsComponent, data: {title:'Application User-Hospital'}},
    {path: 'doctors', component: DoctorsComponent, data: {title:'Application User-Doctor'}},

  ]},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule{}
