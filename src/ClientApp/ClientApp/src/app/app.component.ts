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
  isLoading = true;

  constructor(public authService: AuthService, private router: Router) {
    // localStorage.clear();
    this.checkAuth();
  }

  checkAuth(): void {

    this.authService.checkAuth();

    this.isLoading = false;
  }
}
