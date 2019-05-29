import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted: boolean;
  isLogin: boolean = false;
  processBar = {
    logged: true,
    submited: false,
    approved: false,
    completed: false,
  };

  user = {
    userName: '',
    passWord: '',
  }

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.checkLogin();
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.user.userName = this.f.username.value;
    this.user.passWord = this.f.password.value;

    localStorage.setItem('processBar', JSON.stringify(this.processBar));
    localStorage.setItem('user', JSON.stringify(this.user));

    this.router.navigate(['/applicant']);
  }

  // get WorkFlow info of user
  checkLogin(): void {
    let store = JSON.parse(localStorage.getItem('user'));

    if (store != null) {
      this.isLogin = true;
    }
  }
}
