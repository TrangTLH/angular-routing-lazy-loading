import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {Routing} from "@enums/routing.enum";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(
    private router: Router
  ) {
  }

  goToAdminPage() {
    this.router.navigate([`/${Routing.Admin}`])
  }

  goToUserPage() {
    this.router.navigate([`/${Routing.User}`])
  }

}
