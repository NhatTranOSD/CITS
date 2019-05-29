import { Injectable } from '@angular/core';
import { Applicant } from '../models/applicant.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const baseUrl = 'http://localhost:5001/';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {

  public applicants: Applicant[];

  constructor(private http: HttpClient) {
    this.getApplicants();
  }

  public async getApplicants() {

    // get Applicants here, by subcrib
    await this.http.get<Applicant[]>(`${baseUrl}api/v1/Applicant`, httpOptions)
      .subscribe(result => {
        this.applicants = result;
        console.log(result);
      }, error => console.error(error));;
  }

  public getApplicantInfo(userId: string): any {
    return this.http.post<Applicant>(`${baseUrl}api/v1/Applicant/${userId}`, httpOptions).pipe(map(result => { return result }));
  }

  public uploadFiles(formData: FormData): any {

    // return this.http.post<User>(`${baseUrl}api/v1/Auth/login`, user, httpOptions).pipe(map(result => { return result }));

    return true;
  }

  public getContents(applicantId: string): any {

    // return this.http.post<User>(`${baseUrl}api/v1/Auth/login`, user, httpOptions).pipe(map(result => { return result }));

    return null;
  }

  public acceptApplicant(applicantId: string): any {

    return this.http.post<Applicant>(`${baseUrl}api/v1/Applicant/accept/${applicantId}`, httpOptions).pipe(map(result => { return result }));
  }

  public refuseApplicant(applicantId: string): any {

    // return this.http.post<User>(`${baseUrl}api/v1/Auth/login`, user, httpOptions).pipe(map(result => { return result }));

    return true;
  }

  public createApplicant(email: string): any {

    // return this.http.post<User>(`${baseUrl}api/v1/Auth/login`, user, httpOptions).pipe(map(result => { return result }));

    return true;
  }

}
