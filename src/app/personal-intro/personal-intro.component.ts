import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-personal-intro',
  templateUrl: './personal-intro.component.html',
  styleUrls: ['./personal-intro.component.css']
})
export class PersonalIntroComponent implements OnInit {
    hereUser = false;
    currentUserKey = false;
    constructor(private receiveKey: ActivatedRoute) {
        this.currentUserKey = receiveKey.snapshot.params['id'];
        if (this.currentUserKey) {
            this.hereUser = true;
        }
    }

  ngOnInit() {
  }

}
