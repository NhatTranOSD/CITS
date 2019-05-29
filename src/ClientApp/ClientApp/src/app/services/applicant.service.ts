import { Injectable } from '@angular/core';
import { Applicant } from '../models/applicant.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const baseUrl = 'https://localhost:5001/';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {

  constructor(private http: HttpClient) { }

  getApplicants(): Applicant[] {

    // get Applicants here

    // fake applicants
    const applicants: Applicant[] = [
      { applicantId: '1', applicantName: 'Nhat', status: 'waiting', createDate: '12/31/1999 12:00:00 AM' },
      { applicantId: '2', applicantName: 'Nguyen', status: 'waiting', createDate: '12/31/1999 12:00:00 AM' },
      { applicantId: '3', applicantName: 'Nhi', status: 'waiting', createDate: '12/31/1999 12:00:00 AM' },
      { applicantId: '4', applicantName: 'Nghia', status: 'waiting', createDate: '12/31/1999 12:00:00 AM' },
    ];

    return applicants;
  }

  getApplicantInfo(userId: string): Applicant {

    // get Applicant info here
    // this.http.get<Applicant>(`${baseUrl}/api/SampleData/WeatherForecasts`, httpOptions).subscribe(result => {
    //   console.log(result);
    // }, error => console.error(error));

    return { applicantId: '1', applicantName: 'Nhat', status: 'waiting', createDate: '12/31/1999 12:00:00 AM' };
  }

  uploadFiles(formData: FormData): boolean {

    // Upload here
    // get Applicant info here
    // this.http.post<boolean>(`${baseUrl}/api/SampleData/WeatherForecasts`, httpOptions).subscribe(result => {
    //   console.log(result);
    // }, error => console.error(error));

    return true;
  }

  getContents(applicantId: string): any {

    // Upload here
    // get Applicant info here
    // this.http.post<boolean>(`${baseUrl}/api/SampleData/WeatherForecasts`, httpOptions).subscribe(result => {
    //   console.log(result);
    // }, error => console.error(error));

    return null;
  }

  acceptApplicant(applicantId: string): boolean {

    // request accept Applicant here
    // this.http.post<boolean>(`${baseUrl}/api/SampleData/WeatherForecasts`, httpOptions).subscribe(result => {
    //   console.log(result);
    // }, error => console.error(error));

    return true;
  }

  refuseApplicant(applicantId: string): boolean {

    // request refuse Applicant here
    // this.http.post<boolean>(`${baseUrl}/api/SampleData/WeatherForecasts`, httpOptions).subscribe(result => {
    //   console.log(result);
    // }, error => console.error(error));
    return true;
  }

}
