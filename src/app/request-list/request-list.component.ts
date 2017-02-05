import { Component, OnInit } from '@angular/core';
declare var firebase: any;

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
  requests = [];
  currentRequest: Object = {};
  constructor() { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
      firebase.database().ref('/requests/').on('child_added', (snapshot) =>{
      this.requests.push(snapshot.val());
      // console.log(this.members);
    });
  }

  detail(i) {
    this.currentRequest = this.requests[i];
  }
}
