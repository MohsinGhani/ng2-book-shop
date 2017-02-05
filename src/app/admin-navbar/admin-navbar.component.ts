import { Component, OnInit } from '@angular/core';
import { AdminService } from './../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {

  constructor(private _route: Router, private service: AdminService) {
    if (!this.service.adminAuthentication()) {
          this._route.navigate(['home']);
    }
  }

  ngOnInit() {
  }

  logout() {
    this.service.logout();
    this._route.navigate(['home']);
  }
}
