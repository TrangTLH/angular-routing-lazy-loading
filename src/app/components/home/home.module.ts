import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HomeRoutingModule} from "./home-routing.module";
import {CommonModule} from "@angular/common";
import {HomeComponent} from "./home.component";

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HomeRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [
    HomeComponent
  ]
})
export class HomeModule {
}
