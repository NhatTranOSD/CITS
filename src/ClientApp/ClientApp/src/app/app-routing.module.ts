import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'applicant', loadChildren: './pages/applicant/applicant.module#ApplicantModule' },
  { path: 'agent', loadChildren: './pages/agent/agent.module#AgentModule' },
  // { path: 'org', loadChildren: './pages/organization/organization.module#OrganizationModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
