import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from "./user.component";

import {Routing} from "@enums/routing.enum";

const routes: Routes = [
  {
    path: Routing.User,
    component: UserComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
