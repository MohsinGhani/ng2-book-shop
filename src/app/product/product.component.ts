import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var firebase: any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  books = [];
  currentUserKey;
  userKeys = [];
  usersData = [];
  currentUserData;
  constructor(private route: ActivatedRoute) {
    this.currentUserKey = route.snapshot.params['id'];
  }
  ngOnInit() {
    this.getBooks();
  }

  getBooks()
  {
    firebase.database().ref('/books/').on('child_added', (snapshot) => {
      this.books.push(snapshot.val());
    })
  }

  fetchUser(){
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
}
