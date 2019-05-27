import { NgModule } from '@angular/core';
import {  Routes, RouterModule } from '@angular/router';

import { PostListComponent } from './post-list/post-list.component';
import { NewPostComponent } from './newpost/newpost.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuardService } from './services/auth-guard.service';

const appRoutes: Routes = [
    {path: 'auth/signup', component: SignupComponent},
    {path: 'auth/signin', component: SigninComponent},
    {path: 'posts', canActivate: [AuthGuardService], component: PostListComponent},
    {path: 'new', canActivate: [AuthGuardService], component: NewPostComponent},
    {path: '', redirectTo: 'posts', pathMatch: 'full' },
    {path: '**', redirectTo: 'posts' }
];


@NgModule({
   imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [
    RouterModule,
  ]
})



export class AppRoutingModule { }
