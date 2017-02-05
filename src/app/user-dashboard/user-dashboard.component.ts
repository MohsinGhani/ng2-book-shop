import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../user.service';
declare var firebase: any;

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  books = [];
  userKeys = [];
  usersData = [];
  currentUserKey; // this currentUserKey we get in the login page as a parameter
  currentUserData;
  constructor(private route: Router, private recieveId: ActivatedRoute, private service: UserService) {
      this.currentUserKey = recieveId.snapshot.params['id'];
      // this.userKeys = this.service.keys;
      // this.usersData =  this.service.users;
      // this.service.getCurrentUserData(this.currentUserKey);
      // this.currentUserData = this.service.currentUserData;
      // console.log(this.currentUserKey);
      // console.log(this.currentUserData);
      // console.log(this.currentUserData.login);
      // // User Authentication
      // // if (!this.currentUserData.login) {
      // //       this.route.navigate(['/home']);
      // // }
  }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    firebase.database().ref('/books/').on('child_added', (snapshot) => {
      this.books.push(snapshot.val());
    });
  }

  addToCart(index) {
    let item: Object = this.books[index];
    this.service.addToCart(item);
  }

}
