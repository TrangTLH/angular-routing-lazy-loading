import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {Routing} from "@enums/routing.enum";

const routes: Routes = [
  {
    path: '',
    redirectTo: Routing.Home,
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./components/user/user.module').then((m) => m.UserModule)
  },
  {
    path: '',
    loadChildren: () => import('./components/admin/admin.module').then((m) => m.AdminModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
