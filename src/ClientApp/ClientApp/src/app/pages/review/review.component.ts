import { Component, OnInit } from '@angular/core';
import { ApplicantService } from '../../services/applicant.service';
import { MessageService } from '../../services/message.service';
import { Applicant } from '../../models/applicant.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  applicant: Applicant;

  contentUri = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';

  constructor(private messageService: MessageService,
              private router: Router,
              private applicantService: ApplicantService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    const applicantId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(applicantId);

    this.applicant = this.applicantService.getApplicantInfo(applicantId);
    console.log(this.applicant);

    this.getContents();
  }

  getContents(): void {
    this.applicantService.getContents(this.applicant.applicantId);
  }

  accept(applicantId: string): void {
    this.applicantService.acceptApplicant(applicantId);

    this.messageService.add(`Accepted ApplicantId: ${applicantId}`);

    this.router.navigate(['/agent']);
  }

  refuse(applicantId: string): void {
    this.applicantService.refuseApplicant(applicantId);

    this.messageService.add(`Refuse ApplicantId: ${applicantId}`);

    this.router.navigate(['/agent']);
  }

}
