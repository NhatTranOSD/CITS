import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClientApp';
  isLoading = false;

  constructor(private authService: AuthService, private router: Router) {
    // localStorage.clear();
    this.isLogin();
  }

  isLogin(): void {
    if (this.authService.checkLogin()) {
      this.router.navigate(['/applicant']);
    } else {
      this.router.navigate(['/login']);
    }

    this.isLoading = false;
  }
}
