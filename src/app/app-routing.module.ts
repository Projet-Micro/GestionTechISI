import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './modules/authentication/authentication.component';
import { authGuard } from './shared/guards/auth.guard';
import { DashboardComponent } from './modules/dashboard-main/dashboard/dashboard.component';

const routes: Routes = [
  // { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  { path: 'auth', component: AuthenticationComponent },
  { path: '**', component: DashboardComponent, canActivate: [authGuard] },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
