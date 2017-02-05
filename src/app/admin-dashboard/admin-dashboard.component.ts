import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from './../admin.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  books = [];
  bookKeys = [];
  id; // book id
  bookForEdit: Object;
  successAlert = false;

  constructor(private _route: Router, private service: AdminService) {
    this.getBooks();
    if (!this.service.adminAuthentication()) {
          this._route.navigate(['home']);
    }
  }

  ngOnInit() {
  }

  getBooks() {
    firebase.database().ref('/books/').on('child_added', (snapshot) => {
      this.books.push(snapshot.val());
    });

    firebase.database().ref('/books/').on('child_added', (snapshot) => {
      this.bookKeys.push(snapshot.key);
    });
  }

  editBook(bookID) {
    this.id = bookID;
    this._route.navigate(['/admin-dashboard/edit-book/' + this.id]);
  }

  getBookID(id) {
    this.id = id; // get book it for delete the book
  }

  deleteBook() {
      firebase.database().ref('/books/' + this.bookKeys[this.id]).remove();
      this.successAlert = true;
    }
}
