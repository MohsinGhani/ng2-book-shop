import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './../user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  currentUserKey;
  cartItems = [];
  totalPrice: number = 0;
  price: number;
  constructor(private _route: Router, private recieveId: ActivatedRoute, private _service: UserService) {
      this.currentUserKey = recieveId.snapshot.params['id'];
      this.cartItems = this._service.cartItems;
      // calculate total price
      this.cartItems.forEach((item, index) => {
        this.price = parseInt(item.ourPrice, 10); // convert string into int
        this.totalPrice = this.totalPrice + this.price;
      });
      // console.log(this.totalPrice);
  }

  ngOnInit() {
  }

  deletItem(i) {
    this.totalPrice = this.totalPrice - this.cartItems[i].ourPrice;
    // console.log(this.cartItems[i].ourPrice);
    this._service.deletFromCart(i);
  }

}
