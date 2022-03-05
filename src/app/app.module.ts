import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';
import {AdminComponent} from './admin/admin.component';

@NgModule({
    declarations: [
        AppComponent,
        UserComponent,
        AdminComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [
        AppComponent,
        UserComponent,
        AdminComponent
    ]
})
export class AppModule {
}
