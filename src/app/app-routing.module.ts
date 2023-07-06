import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Modules
import { PagesRoutingModule } from "./pages/pages.routing";
import { AuthRoutingModule } from "./auth/auth.routing";

import { NoPageFoundComponent } from "./pages/no-page-found/no-page-found.component";


const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: '**', component: NoPageFoundComponent},
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})

export class AppRoutingModule{}
