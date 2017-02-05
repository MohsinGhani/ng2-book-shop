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
    }
  projects = [
            {
                value: "jquery",
                label: "jQuery",
                desc: "the write less, do more, JavaScript library",
                icon: "jquery_32x32.png"
            },
            { 
                value: "jquery-ui",
                label: "jQuery UI",
                desc: "the official user interface library for jQuery",
                icon: "jqueryui_32x32.png"
            },
            {
                value: "sizzlejs",
                label: "Sizzle JS",
                desc: "a pure-JavaScript CSS selector engine",
                icon: "sizzlejs_32x32.png"
            }
        ];
  

  ngOnInit() {
  }

  changeDesc( value, desc ) {
   for (var i in this.projects) {
     if (this.projects[i].value == value) {
        this.projects[i].desc = desc;
        break; //Stop this loop, we found it!
     }
   }
}
}
