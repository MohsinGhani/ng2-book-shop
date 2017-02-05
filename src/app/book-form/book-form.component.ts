import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { AdminService } from './../admin.service';

declare var firebase: any;

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'],
})
export class BookFormComponent implements OnInit {
  bookUrl = 'https://';
  newBook = [];
  model = new Book('', '', '', '', '', '', '');
  constructor(private route: Router, private service: AdminService) {
    if (!this.service.adminAuthentication()) {
          this.route.navigate(['home']);
    }
  }
  ngOnInit() {
  }

  onImageUpload(img, input){
    let fr = new FileReader();
    fr.onload = function () {
      img.src = fr.result;
    };
    if(input.files[0]){
      fr.readAsDataURL(input.files[0]);
    }
    this.model.image = img.src;
  }

  onSubmit() {
    firebase.database().ref('/books/').push(this.model);
    this.route.navigate(['/admin-dashboard']);
  }

  get currentBook(){
    return JSON.stringify(this.model);
  }
}
