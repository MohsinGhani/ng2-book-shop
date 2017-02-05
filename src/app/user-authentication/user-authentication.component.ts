import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
declare var firebase: any;

@Component({
  selector: 'app-user-authentication',
  templateUrl: './user-authentication.component.html',
  styleUrls: ['./user-authentication.component.css']
})
export class UserAuthenticationComponent implements OnInit {
  users = new User('', '', '', '', '', 'active', true, '', '', '', '');
  Usergender = ['Male', 'Female'];
  userKeys = [];
  usersData = [];
  currentUserKey;
  submitData = true;
  emailAlert = false;
  UsersDataWithNewUser = [];
  constructor(private route: Router,  private recieveAlert: ActivatedRoute) {
    this.emailAlert = recieveAlert.snapshot.params['alert'];
  }

  ngOnInit() {
    this.fetchUsersData();
  }
  onSubmit() {
    this.usersData.forEach((user, index) => {
      if (this.users.email === user.email) {
            this.route.navigate(['/user-authentication/' + true]);
            this.submitData = false;
        }
    });

    if (this.submitData === true) {
            this.fetchUserKeys();
            console.log(this.users);
            firebase.database().ref('/users/').push(this.users);
            this.fetchUsersDataWithNewUser();
            this.fetchCurrentUserKey();
            this.route.navigate(['/user-dashboard/' + this.currentUserKey]);
            console.log(this.currentUserKey);
        }
  }

    fetchUserKeys() {
      // fetch all users keys
      firebase.database().ref('/users/').on('child_added', (snapshot) => {
      this.userKeys.push(snapshot.key);
    });
    }

    fetchUsersData() {
      // fetch all users information
      firebase.database().ref('/users/').on('child_added', (snapshot) => {
      this.usersData.push(snapshot.val());
    });
    }

    fetchUsersDataWithNewUser() {
      // fetch all users information with new user
      firebase.database().ref('/users/').on('child_added', (snapshot) => {
      this.UsersDataWithNewUser.push(snapshot.val());
      });
    }

    fetchCurrentUserKey() {
      // fetch current user key
      this.UsersDataWithNewUser.forEach((user, index) => {
        if (this.users.email === user.email) {
            this.currentUserKey = this.userKeys[index];
          }
      });
    }

  get currentUser(){
    return JSON.stringify(this.users);
  }
}