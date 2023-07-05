import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { PagesComponent } from './pages/pages/pages.component';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent,
    PagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
