import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from '@angular/fire'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { SharedComponent } from './shared/shared.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SocialComponent } from './shared/social/social.component';
import { FeaturedComponent } from './shared/featured/featured.component';
import { CartComponent } from './shared/cart/cart.component';
import { FirebaseService } from './services/firebase.service';

@NgModule({
  declarations: [
    AppComponent,
    BookshelfComponent,
    SharedComponent,
    LoginComponent,
    NavbarComponent,
    SocialComponent,
    FeaturedComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBq1Ir708TOGRW8a9luaHFKuE1NuAyxL5A",
    authDomain: "bookstore-fdd86.firebaseapp.com",
    projectId: "bookstore-fdd86",
    storageBucket: "bookstore-fdd86.appspot.com",
    messagingSenderId: "622908914263",
    appId: "1:622908914263:web:53ff5b3df475da989ac112"})
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
