import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicantComponent } from './applicant.component';
import { ApplicantRoutingModule } from './applicant-routing.module';
import { LoginComponent } from './components/login/login.component';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

@NgModule({
  declarations: [ApplicantComponent, LoginComponent],
  imports: [
    CommonModule,
    ApplicantRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ApplicantModule { }
