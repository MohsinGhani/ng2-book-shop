import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../user.model';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  user = new Login('','');
  constructor(private _route: Router) {
  }

  ngOnInit() {
  }

  onAdminLogin(){
    let adminId = this.user.id;
    let adminPass = this.user.password;
    let key = btoa(btoa(adminId) + '??' + btoa(adminPass));
    //console.log(key);
    document.cookie = "sessionID="+key+';';
    if(adminId == "admin@gmail.com" && adminPass == "admin")
    {
      this._route.navigate(['/admin-dashboard']);
    }
  }

  get currentUser(){
    return JSON.stringify(this.user);
  }
}
