import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
declare var firebase: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private route : Router){}
  alert = true;
  sliderImgs = ["./assets/images/one.jpg","./assets/images/two.jpg","./assets/images/three.jpg","./assets/images/four.jpg"];
  sectionImages = ["./assets/images/sec2.jpg","./assets/images/sec3.jpg","./assets/images/sec4.jpg","./assets/images/sec5.jpg","./assets/images/sec6.jpg","./assets/images/sec7.jpg","./assets/images/sec8.jpg","./assets/images/sec9.jpg",];
  description = ["The Legend of Lakshmi","Lahore in the Time of the Raj","Thank you for being late","Defeat Is an Orphan: How Pakistan Lost the Great South Asian War",
                "Pakistan: Courting the Abyss (Paperback","THE MURDER OF Books > Urdu Books > History %%%","Muslim Girl : A Coming of Age (Hardcover)","To Kill a Mockingbird"];
  heading2Img = "./assets/images/heading2.jpg";
  ngOnInit() {
  }

  addToCart(description){
    this.route.navigate(['/login/' + this.alert]);
  }

}
