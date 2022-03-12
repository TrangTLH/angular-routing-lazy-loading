import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Routing} from "@enums/routing.enum";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any[] | undefined;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.users = [
      {
        id: '1',
        company: 'Alfreds Futterkiste',
        contact: 'Maria Anders',
        country: 'Germany'
      },
      {
        id: '2',
        company: 'Centro comercial Moctezuma',
        contact: 'Francisco Chang',
        country: 'Mexico'
      },
      {
        id: '3',
        company: 'Ernst Handel',
        contact: 'Mendel',
        country: 'Austria'
      },
      {
        id: '4',
        company: 'Island Trading',
        contact: 'Bennett',
        country: 'UK'
      },
      {
        id: '5',
        company: 'Laughing Bacchus Winecellars',
        contact: 'Yoshi Tannamuri',
        country: 'Canada'
      },
      {
        id: '6',
        company: 'Magazzini Alimentari Riuniti',
        contact: 'Giovanni Rovelli',
        country: 'Italy'
      },
      {
        id: '7',
        company: 'Alimentari Riuniti',
        contact: 'Rovelli',
        country: 'Danmech'
      },
      {
        id: '8',
        company: 'Laughing Bacchus Winecellars',
        contact: 'Yoshi Tannamuri',
        country: 'Canada'
      },
      {
        id: '9',
        company: 'Laughing Bacchus Winecellars',
        contact: 'Yoshi Tannamuri',
        country: 'Canada'
      }
    ]
  }

  goToHomePage() {
    this.router.navigate([`/${Routing.Home}`])
  }
}
