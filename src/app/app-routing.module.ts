import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { AttendenceComponent } from './attendence/attendence.component';
import { LeavesComponent } from './leaves/leaves.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'profile', component: ProfileComponent},
    { path: 'attendance', component: AttendenceComponent},
    { path: 'leaves', component: LeavesComponent },
    { path: '**', component: PagenotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
