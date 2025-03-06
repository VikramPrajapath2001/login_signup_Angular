import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  login() {
    // Logic for user login
    if (this.username && this.password) {
      console.log('Username:', this.username, 'Password:', this.password);
    } else {
      console.log('Form is invalid');
    }
  }
}
