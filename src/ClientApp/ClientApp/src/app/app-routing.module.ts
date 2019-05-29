import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/applicant/applicant.module#ApplicantModule' },
  { path: 'applicant', loadChildren: './pages/applicant/applicant.module#ApplicantModule' },
  { path: 'agent', loadChildren: './pages/agent/agent.module#AgentModule' },
  { path: 'org', loadChildren: './pages/organization/organization.module#OrganizationModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
