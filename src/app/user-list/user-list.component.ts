import { Component, OnInit } from '@angular/core';
declare var firebase: any;

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  members = [];
  UserKeys = [];
  CurrentUser: Object = {};
  constructor() {
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
      firebase.database().ref('/users/').on('child_added', (snapshot) => {
      this.members.push(snapshot.val());
      });

      firebase.database().ref('/users/').on('child_added', (snapshot) => {
      this.UserKeys.push(snapshot.key);
      });
  }

  detail(i) {
    this.CurrentUser = this.members[i];
  }

  action(i) {
    if (this.members[i].status === 'active') {
          this.members[i].status = 'de-active';
    }else if (this.members[i].status === 'de-active') {
          this.members[i].status = 'active';
    }
    // this.UserKeys[i]; current User Key
    this.CurrentUser = this.members[i];
    firebase.database().ref('/users/' + this.UserKeys[i]).set(this.CurrentUser);
  }
}
