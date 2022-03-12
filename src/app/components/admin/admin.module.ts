import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AdminComponent} from "./admin.component";
import {AdminRoutingModule} from "./admin-routing.module";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AdminRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [
    AdminComponent
  ]
})
export class AdminModule {
}
