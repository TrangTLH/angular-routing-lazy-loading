import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from "./user/user.component";

const routes: Routes = [
  {
    path: '',
    component: UserComponent
  },
  {
    path: '',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule)
  },
  {
    path: '',
    loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
