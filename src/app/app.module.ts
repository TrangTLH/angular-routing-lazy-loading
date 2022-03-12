import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {UserModule} from "./components/user/user.module";
import {AdminModule} from "./components/admin/admin.module";
import {HomeModule} from "./components/home/home.module";

import {AppComponent} from './app.component';
import {UserComponent} from './components/user/user.component';
import {AdminComponent} from './components/admin/admin.component';
import {HomeComponent} from './components/home/home.component';
import { ButtonComponent } from './commons/button/button.component';
import { H1Component } from './commons/h1/h1.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    HomeComponent,
    ButtonComponent,
    H1Component
  ],
  imports: [
    BrowserModule,
    UserModule,
    AdminModule,
    HomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
