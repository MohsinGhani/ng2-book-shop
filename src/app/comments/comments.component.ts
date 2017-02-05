import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
declare var firebase: any;
declare var jQuery: any;

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments = [];
  comment = {name: '', comment: ''};
  constructor(private _route: Router) { }

  ngOnInit() {
    firebase.database().ref('/comments/').on('child_added', (snapshot) => {
      this.comments.unshift(snapshot.val());
    });
  }

  postComment() {
    // this.comments.push(this.comment);
    firebase.database().ref('/comments/').push(this.comment);
    this._route.navigate(['/home']);
  }

  get currentComment(){
    return JSON.stringify(this.comment);
  }
}
