import { Component, OnInit } from '@angular/core';
import { Login } from '../user.model';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './../user.service';
declare var firebase: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new Login('', '');
  allUsers = [];
  keys = [];
  currentUserKey: any;
  currentUserData;
  alert: false;

  constructor(private route: Router, private recieveAlert: ActivatedRoute, private _service: UserService) {
    this.alert = recieveAlert.snapshot.params['alert'];
    this.allUsers = this._service.getUserData();
    // console.log(this.service.getUserData());
    this.keys = this._service.getUserKeys();
    // console.log(this.service.getUserKeys());
    // console.log(this.allUsers);
    // console.log(this.keys);
  }

  ngOnInit() {
  }

  get currentUser(){
    return JSON.stringify(this.user);
  }

  login() {
    let temp = false;
    this.allUsers.forEach((member, index) => {
      if ((this.user.id === member.email && this.user.password === member.password) && member.status === 'active' ) {
              temp = true;
              this.currentUserKey = this.keys[index]; // get current user key
              this.currentUserData = this.allUsers[index]; // get current user data
              this.currentUserData.login = true;
              // console.log(index);
              // console.log(this.currentUserKey);
              // console.log(this.currentUserData.login);
              // console.log(this.currentUserData);
              firebase.database().ref('/users/' + this.currentUserKey).set(this.currentUserData);
              // console.log(this.currentUserData + 'Before login');
           }
    });
    if (temp) {
       this.route.navigate(['user-dashboard/' + this.currentUserKey]);
     }else {
       alert('login failed');
     }
  }
}
