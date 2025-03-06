import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string = '';
  email: string = '';
  password: string  = '';

  signup() {
    // Logic for user signup
    console.log('Username:', this.username, 'Email:', this.email, 'Password:', this.password);
  }
}
