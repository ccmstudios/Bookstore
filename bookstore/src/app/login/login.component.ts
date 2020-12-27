import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
@Output() isLogout = new EventEmitter<void>()
  constructor(public firebaseService : FirebaseService) { }

  ngOnInit(): void {
  }
logout(){
  this.firebaseService.logout()
  this.isLogout.emit()
}
}
