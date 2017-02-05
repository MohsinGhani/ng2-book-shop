import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BookRequest } from '../book.model';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {
  request = new BookRequest('', '', '', '', '');
  currentUserKey;
  userKeys = [];
  usersData = [];
  currentUserData;

  constructor(private route: Router, private recieveId: ActivatedRoute) {
      this.currentUserKey = recieveId.snapshot.params['id'];
  }

  ngOnInit() {
    this.fetchUser();
    this.request.email = this.currentUserData.email;
    this.request.contact = this.currentUserData.contact;
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
      if (this.currentUserKey === key) {
        this.currentUserData = this.usersData[index];
        // console.log(this.currentUserData);
      }
    });
    }

  onSubmit() {
    firebase.database().ref('/requests/').push(this.request);
    this.route.navigate(['/user-dashboard/' + this.currentUserKey]);
  }

  get currentRequest(){
    return JSON.stringify(this.request);
  }

  logout() {
        this.currentUserData['login'] = false;
        // console.log(this.currentUserData);
        firebase.database().ref('/users/' + this.currentUserKey).set(this.currentUserData);
        this.route.navigate(['home']);
  }

}
