import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './modules/authentication/authentication.component';
import { authGuard } from './shared/guards/auth.guard';
import { DashboardComponent } from './modules/dashboard-main/dashboard/dashboard.component';
import { UsersComponent } from './modules/users/users.component';
import { HistoryComponent } from './modules/history/history.component';
import { ProjectorsComponent } from './modules/projectors/projectors.component';

const routes: Routes = [
  // { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  { path: 'auth', component: AuthenticationComponent },
  { path: 'users', component: UsersComponent, canActivate: [authGuard] },
  { path: 'history', component: HistoryComponent, canActivate: [authGuard] },
  { path: 'projectors', component: ProjectorsComponent, canActivate: [authGuard] },
  { path: '**', component: DashboardComponent, canActivate: [authGuard] },
];
@NgModule({
  imports: [RouterModule.forRoot(routes,{ onSameUrlNavigation: "reload" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
