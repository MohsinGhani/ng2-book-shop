import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
declare var firebase: any;
@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  books = [];
  bookID;
  bookForEdit;
  bookKeys = [];
  currentBookKey;
  constructor(private receiveBookID: ActivatedRoute, private _route: Router) {
    this.getBooks();
    this.bookID = receiveBookID.snapshot.params['id'];
    this.bookForEdit = this.books[this.bookID];
    this.currentBookKey = this.bookKeys[this.bookID];
    // console.log(this.books[this.bookID]);
    // console.log(this.currentBookKey);
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

  onImageUpload(img, input) {
    let fr = new FileReader();
    fr.onload = function () {
      img.src = fr.result;
    };
    if (input.files[0]) {
      fr.readAsDataURL(input.files[0]);
    }
    this.bookForEdit.image = img.src;
  }

  onSubmit() {
    firebase.database().ref('/books/' + this.currentBookKey).set(this.bookForEdit);
    this._route.navigate(['/admin-dashboard']);
  }

}
