import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicantComponent } from './applicant.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '', component: ApplicantComponent, children: [
      { path: '1', component: LoginComponent },
      { path: '2', component: ApplicantComponent },
      { path: '3', component: ApplicantComponent },
      { path: '4', component: ApplicantComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicantRoutingModule { }
