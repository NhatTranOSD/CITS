import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLogin = false;

  private user: User;

  constructor(private router: Router) { }

  login(user: User): void {

    this.isLogin = true;
    this.user = user;

    localStorage.setItem('isLogin', this.isLogin.toString());

    localStorage.setItem('currentUser', JSON.stringify(User));

    // Check UserType And redirect here
    user.type = 1;
    if (user.type === 1) { // type applicant
      this.router.navigate(['/applicant']);
    } else if (user.type === 2) {
      this.router.navigate(['/agent']);
    } else {
      this.router.navigate(['/']);
    }
  }

  getCurrentUser(): User {
    return this.user;
  }

  checkLogin(): boolean {
    return this.isLogin;
  }

  logout(): boolean {
    // Clear Session memory
    localStorage.clear();
    return true;
  }
}
