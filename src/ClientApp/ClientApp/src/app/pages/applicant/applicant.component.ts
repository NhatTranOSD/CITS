import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent implements OnInit {

  processBar = {
    logged: false,
    submited: false,
    approved: false,
    completed: false,
  };

  constructor() {
  }

  ngOnInit() {
    this.getWorkFlowInfo();
  }

  // get WorkFlow info of user
  getWorkFlowInfo(): void {
    let store = JSON.parse(localStorage.getItem('processBar'));

    if (store != null) {
      this.processBar = store;
    }
    console.log(this.processBar);
  }

}
