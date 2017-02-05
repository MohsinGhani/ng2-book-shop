
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
//declare var firebase: any; 

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  currentUserKey;
  userKeys = [];
  usersData = [];
  currentUserData;
  userProfile = true;
  editProfile = false;
  changePassword = false;
  editUser = new User('', '', '', '', '', 'active', true, '', '', '', '');
  Usergender = ['Male', 'Female'];
  constructor(private route: Router, private recieveId: ActivatedRoute) {
    this.currentUserKey = recieveId.snapshot.params['id'];
  }

  ngOnInit() {
    this.fetchUser();
    this.editUser.name = this.currentUserData.name;
    this.editUser.email = this.currentUserData.email;
    this.editUser.contact = this.currentUserData.contact;
    this.editUser.gender = this.currentUserData.gender;
    this.editUser.password = this.currentUserData.password;
    this.editUser.confirmPassword = this.currentUserData.confirmPassword;
  }

  fetchUser() {
    // fetch all users keys
    firebase.database().ref('/users/').on('child_added', (snapshot) => {
      this.userKeys.push(snapshot.key);
    });
    // fetch all users information
    firebase.database().ref('/users/').on('child_added', (snapshot) => {
      this.usersData.push(snapshot.val());
    });

    this.userKeys.forEach((key, index) => {
      if (this.currentUserKey === key) {
        this.currentUserData = this.usersData[index];
        // console.log(this.currentUserData);
      }
    });
    }

    showProfile(){
      this.userProfile = true;
      this.editProfile = false;
      this.changePassword = false;
    }

    editUserProfile(){
      this.editProfile = true;
      this.userProfile = false;
      this.changePassword = false;
      // console.log(this.currentUserData);
    }

    HideEditProfile(){
      this.editProfile = false;
      this.userProfile = true;
    }

    changeUserPassword(){
      this.editProfile = false;
      this.userProfile = false;
      this.changePassword = true;
    }

    onEdit() {
      firebase.database().ref('/users/' + this.currentUserKey).set(this.editUser);
      this.route.navigate(['/user-dashboard/' + this.currentUserKey]);
      // console.log(this.currentUserKey);
      // console.log(this.editUser);
    }

    onChange(){
      this.editUser.password = this.editUser.newPassword;
      this.editUser.confirmPassword = this.editUser.ConfirmNewPassword;
      firebase.database().ref('/users/' + this.currentUserKey).set(this.editUser);
      this.route.navigate(['/user-dashboard/'+ this.currentUserKey]);
    }

    logout(){
        this.currentUserData['login'] = false;
        firebase.database().ref('/users/' + this.currentUserKey).set(this.currentUserData);
        this.route.navigate(['home']);
    }
    get currentUser(){
    return JSON.stringify(this.editUser);
    }
}
