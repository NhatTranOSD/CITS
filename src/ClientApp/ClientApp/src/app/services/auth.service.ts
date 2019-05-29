import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const baseUrl = 'http://localhost:5000/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLogin = false;

  private user: User = new User();

  constructor(private router: Router, private http: HttpClient) { }

  public IsLogin(): boolean {

    const isLogin = JSON.parse(localStorage.getItem('isLogin'));

    if (isLogin != null && isLogin === true) {
      return true;
    } else {
      return false;
    }
  }

  public login(user: User): any {
    return this.http.post<User>(`${baseUrl}api/v1/Auth/login`, user, httpOptions).pipe(map(result => { return result }));
  }

  public getCurrentUser(): User {

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser != null) {
      this.user = currentUser;
    }
    return this.user;
  }

  public checkLogin(): void {
    const isLogin = JSON.parse(localStorage.getItem('isLogin'));

    if (isLogin != null) {
      this.isLogin = isLogin;
    }

    if (this.isLogin === true) {
      this.getCurrentUser();
      this.directUser(this.user);
    } else {
      this.router.navigate(['/login']);
    }

  }

  public directUser(user: User): void {
    if (user.type === 1) { // type applicant
      this.router.navigate(['/applicant']);
    } else if (user.type === 2) {
      this.router.navigate(['/agent']);
    } else {
      this.router.navigate(['/']);
    }
  }

  public logout(): void {
    // Clear Session memory
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
