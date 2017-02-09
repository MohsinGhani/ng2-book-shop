import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
    hereUser = false;
    currentUserKey = false;
    constructor(private receiveKey: ActivatedRoute) {
        this.currentUserKey = receiveKey.snapshot.params['id'];
        if(this.currentUserKey)
        {
            this.hereUser = true;
        }
      
  ngOnInit() {
  }
}
