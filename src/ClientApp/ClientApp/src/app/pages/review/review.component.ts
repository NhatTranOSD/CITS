import { Component, OnInit } from '@angular/core';
import { ApplicantService } from '../../services/applicant.service';
import { MessageService } from '../../services/message.service';
import { Applicant, ApplicantStatusDisplay } from '../../models/applicant.model';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  applicant: Applicant;
  documentLink: string;

  applicantStatusDisplay: string[] = ApplicantStatusDisplay;

  contentUri = '';

  constructor(private messageService: MessageService,
              private router: Router,
              private applicantService: ApplicantService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const applicantId = this.activatedRoute.snapshot.paramMap.get('id');

    this.applicantService.getApplicantInfo(applicantId).pipe(first())
      .subscribe(
        data => {
          this.applicant = data;

          if (this.applicant.documentPath !== null) {
            this.documentLink = `${environment.apiUrl}api/v1/Applicant/${this.applicant.id}/Content`;
          }
        },
        error => {
          console.log(error);
        });
  }

  accept(applicantId: string): void {
    this.applicantService.acceptApplicant(applicantId).pipe(first())
      .subscribe(
        data => {
          console.log(data);
          // reload data
          this.applicantService.getApplicants();

          alert(`Accepted ApplicantId: ${applicantId}`);

          this.router.navigate(['/agent']);
        },
        error => {
          console.log(error);
        });
  }

  refuse(applicantId: string): void {
    this.applicantService.refuseApplicant(applicantId).pipe(first())
      .subscribe(
        data => {
          console.log(data);
          // reload data
          this.applicantService.getApplicants();

          alert(`Refused ApplicantId: ${applicantId}`);

          this.router.navigate(['/agent']);
        },
        error => {
          console.log(error);
        });
  }

}
