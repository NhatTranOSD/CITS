import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicantComponent } from './applicant.component';
import { ApplicantRoutingModule } from './applicant-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ApplicantComponent],
  imports: [
    CommonModule,
    ApplicantRoutingModule,
    FormsModule
  ]
})
export class ApplicantModule { }
