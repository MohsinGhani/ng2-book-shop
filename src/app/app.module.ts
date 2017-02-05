import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule, routingComponents } from './app.routers';

import { AngularFireModule } from  'angularfire2';
import { firebaseConfig } from  './../environments/firebase.config';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BookFormComponent } from './book-form/book-form.component';
import { UserAuthenticationComponent } from './user-authentication/user-authentication.component';
import { FooterComponent } from './footer/footer.component';
import { EqualValidator } from './equal-validator.directive';
import { UserListComponent } from './user-list/user-list.component';
import { LoginComponent } from './login/login.component';
import { RequestFormComponent } from './request-form/request-form.component';
import { RequestListComponent } from './request-list/request-list.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
// Services
import { AdminService } from './admin.service';
import { UserService } from './user.service';
import { CartComponent } from './cart/cart.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { CommentsComponent } from './comments/comments.component';
import { PersonalIntroComponent } from './personal-intro/personal-intro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProductComponent,
    BookFormComponent,
    routingComponents,
    UserAuthenticationComponent,
    FooterComponent,
    EqualValidator,
    UserListComponent,
    LoginComponent,
    RequestFormComponent,
    RequestListComponent,
    UserDashboardComponent,
    NavbarComponent,
    HomeNavComponent,
    UserProfileComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    AdminNavbarComponent,
    CartComponent,
    EditBookComponent,
    CommentsComponent,
    PersonalIntroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AppRoutingModule,
    NgbModule
  ],
  providers: [AdminService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
