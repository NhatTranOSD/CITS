import { Component, OnInit } from '@angular/core';
import { Applicant } from '../../models/applicant.model';
import { AuthService } from '../../services/auth.service';
import { ApplicantService } from '../../services/applicant.service';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent implements OnInit {

  applicant: Applicant;
  submitted = false;
  formData: FormData;

  constructor(private authService: AuthService, private applicantService: ApplicantService) {
  }

  ngOnInit() {
    this.applicant = new Applicant();

    // get ApplicantInfo
    console.log(this.authService.getCurrentUser());
    console.log(this.applicantService.getApplicantInfo('userId'));
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

  onSubmit() {
    this.submitted = true;

    this.applicantService.uploadFiles(this.formData);
  }
}
