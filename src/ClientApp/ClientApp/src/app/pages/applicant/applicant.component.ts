import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // get WorkFlow info of user
  getWorkFlowInfo(userId: string): void {

  }

}
