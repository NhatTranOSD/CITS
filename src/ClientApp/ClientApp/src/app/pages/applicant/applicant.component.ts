import { Component, OnInit } from '@angular/core';
import { Applicant } from '../../models/applicant.model';
import { AuthService } from '../../services/auth.service';
import { ApplicantService } from '../../services/applicant.service';
import { first } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent implements OnInit {

  applicant: Applicant;
  submitted = false;
  formData: FormData;
  documentLink: string;

  constructor(private authService: AuthService, private applicantService: ApplicantService) {
  }

  ngOnInit() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    this.applicantService.getApplicantInfoByUserId(currentUser.id).pipe(first())
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

  fileChange(event) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      const formData: FormData = new FormData();
      formData.append('uploadFile', file, file.name);

      this.formData = formData;
    }
  }

  back(): void {
    this.submitted = false;
    this.ngOnInit();
  }

  onSubmit() {
    this.applicantService.updateApplicant(this.applicant).pipe(first())
      .subscribe(
        data => {
          this.submitted = true;
        },
        error => {
          console.log(error);
        });

    if (this.formData != null) {
      this.applicantService.uploadFiles(this.applicant.id, this.formData).pipe(first())
        .subscribe(
          data => {
            this.submitted = true;
          },
          error => {
            console.log(error);
          });
    }
  }
}
