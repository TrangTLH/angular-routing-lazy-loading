import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {UserComponent} from "./user.component";
import {UserRoutingModule} from "./user-routing.module";
import {CommonModule} from "@angular/common";
@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    UserRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [
    UserComponent
  ]
})
export class UserModule {
}
