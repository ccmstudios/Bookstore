import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'bookstore';
  isSignedIn=false
  constructor (public firebaseService : FirebaseService){}
    ngOnInit(){
      if(localStorage.getItem('user')!==null)
      this.isSignedIn = true
      else 
      this.isSignedIn = false
    }
  
    async onSignup(email:string, password: string){
     await this.firebaseService.signUp(email,password)
     if(this.firebaseService.isLoggedIn)
     this.isSignedIn=true
    }
    async onSignin(email:string, password:string){
     await this.firebaseService.signUp(email,password)
     if(this.firebaseService.isLoggedIn)
     this.isSignedIn=true
    }
    handleLogout(){
this.isSignedIn = false

    }
  }

