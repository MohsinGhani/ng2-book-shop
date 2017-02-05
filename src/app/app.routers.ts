import { PersonalIntroComponent } from './personal-intro/personal-intro.component';
import { CommentsComponent } from './comments/comments.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { BookFormComponent } from './book-form/book-form.component';
import { UserAuthenticationComponent } from './user-authentication/user-authentication.component';
import { UserListComponent } from './user-list/user-list.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { RequestFormComponent } from './request-form/request-form.component';
import { RequestListComponent } from './request-list/request-list.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { EditBookComponent } from './edit-book/edit-book.component';


export const router: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'user-dashboard/home/:id', component: HomeComponent },
    {path: 'about', component: AboutComponent },
    {path: 'user-dashboard/about/:id', component: AboutComponent },
    {path: 'personal-intro', component: PersonalIntroComponent },
    {path: 'user-dashboard/personal-intro/:id', component: PersonalIntroComponent },
    // {path: 'user-dashboard/product/:id', component: ProductComponent },
    {path: 'admin-dashboard/book-form', component: BookFormComponent },
    {path: 'user-authentication', component: UserAuthenticationComponent },
    {path: 'user-authentication/:alert', component: UserAuthenticationComponent },
    {path: 'admin-dashboard/user-list', component: UserListComponent },
    {path: 'admin-dashboard/edit-book/:id', component: EditBookComponent },
    {path: 'login', component: LoginComponent },
    {path: 'login/:alert', component: LoginComponent},
    {path: 'user-dashboard/request-form/:id', component: RequestFormComponent },
    {path: 'user-dashboard/cart/:id', component: CartComponent },
    {path: 'admin-dashboard/request-list', component: RequestListComponent },
    {path: 'user-dashboard/:id', component: UserDashboardComponent},
    {path: 'user-dashboard/user-profile/:id', component: UserProfileComponent },
    {path: 'admin', component: AdminLoginComponent},
    {path: 'admin-dashboard', component: AdminDashboardComponent},
    {path: 'comments', component: CommentsComponent},
    {path: '**', component: HomeComponent}
];

// export const routes: ModuleWithProviders = RouterModule.forRoot(router);
@NgModule({
    imports: [RouterModule.forRoot(router)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
export const routingComponents = [HomeComponent,AboutComponent,ProductComponent,BookFormComponent,AdminLoginComponent,AdminDashboardComponent]