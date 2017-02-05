import { Injectable } from '@angular/core';
declare var firebase: any;

@Injectable()
export class UserService {
  users = [];
  keys = [];
  currentUserData = [];
  cartItems = [];
  constructor() {
  }

   getUserData() {
    firebase.database().ref('/users/').on('child_added', (snapshot) => {
      this.users.push(snapshot.val());
    });
      return this.users;
   }

   getUserKeys() {
    firebase.database().ref('/users/').on('child_added', (snapshot) => {
      this.keys.push(snapshot.key);
    });
      return this.keys;
  }

// get Current User Data through user key
  getCurrentUserData(currentUserKey) {
    this.keys.forEach((key, index) => {
      if (currentUserKey === key) {
        this.currentUserData = this.users[index];
        return this.currentUserData;
      }
    });
    }

    addToCart(item) {
      this.cartItems.push(item);
      return this.cartItems;
    }

    deletFromCart(i) {
      this.cartItems.splice(i, 1);
    }
}
