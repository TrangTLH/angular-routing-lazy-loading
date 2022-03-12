import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from "./admin.component";

import {Routing} from "@enums/routing.enum";

const routes: Routes = [
  {
    path: Routing.Admin,
    component: AdminComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
