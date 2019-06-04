import { Component, OnInit } from '@angular/core';
import { Applicant, ApplicantStatusDisplay } from '../../models/applicant.model';
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

  public isLoading: boolean;
  public applicant: Applicant;
  public submitted = false;
  public formData: FormData;
  public documentLink: string;
  public uploadErrMessage: string;
  public applicantStatusDisplay: string[] = ApplicantStatusDisplay;

  constructor(private authService: AuthService, private applicantService: ApplicantService) {
  }

  ngOnInit() {
    this.isLoading = true;
    this.uploadErrMessage = '';
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    this.applicantService.getApplicantInfoByUserId(currentUser.id).pipe(first())
      .subscribe(
        data => {
          this.applicant = data;

          if (this.applicant.documentPath !== null) {
            this.documentLink = `${environment.apiUrl}api/v1/Applicant/${this.applicant.id}/Content`;
          }
          this.isLoading = false;
        },
        error => {
          console.log(error);
          this.isLoading = false;
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
    this.isLoading = true;
    this.applicantService.updateApplicant(this.applicant).pipe(first())
      .subscribe(
        data => {
          this.submitted = true;
          this.isLoading = false;

          if (this.formData != null) {
            this.isLoading = true;
            this.submitted = false;
            this.applicantService.uploadFiles(this.applicant.id, this.formData).pipe(first())
              .subscribe(
                result => {
                  this.submitted = true;
                  this.isLoading = false;
                },
                error => {
                  console.log(error);
                  // this.submitted = false;
                  this.isLoading = false;
                  // this.uploadErrMessage = 'Failed to upload document!';
                });
          }

        },
        error => {
          console.log(error);
          this.submitted = false;
          this.isLoading = false;
        });
  }
}
