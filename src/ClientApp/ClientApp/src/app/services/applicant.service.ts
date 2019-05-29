import { Injectable } from '@angular/core';
import { Applicant } from '../models/applicant.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {

  constructor(private http: HttpClient) { }

  getApplicantInfo(userId: string): Applicant {

    // get Applicant info here

    return null;
  }

  uploadFiles(formData: FormData): boolean {

    // Upload here

    console.log(formData);

    return true;
  }

}
