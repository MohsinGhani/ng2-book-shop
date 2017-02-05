import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  inputs: ['currentUserKey']
})
export class NavbarComponent implements OnInit {
  currentUserKey;
  userKeys = [];
  usersData = [];
  currentUserData;
  constructor(private route: Router) {}

  ngOnInit() {
    this.fetchUser();
  }

  fetchUser() {
    // fetch all users keys
    firebase.database().ref('/users/').on('child_added', (snapshot) => {
      this.userKeys.push(snapshot.key);
    });
    // fetch all users information
    firebase.database().ref('/users/').on('child_added', (snapshot) => {
      this.usersData.push(snapshot.val());
    });

    this.userKeys.forEach((key, index) => {
      if(this.currentUserKey === key)
      {
        this.currentUserData = this.usersData[index];
        // console.log(this.currentUserData);
      }
    });
    }

  logout() {
        this.currentUserData['login'] = false;
        // console.log(this.currentUserData);
        firebase.database().ref('/users/' + this.currentUserKey).set(this.currentUserData);
        this.route.navigate(['home']);
  }
}
