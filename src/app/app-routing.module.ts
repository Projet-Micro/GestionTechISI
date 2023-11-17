import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {AuthenticationComponent} from "./modules/authentication/authentication.component";
import {authGuard} from "./shared/guards/auth.guard";

const routes: Routes = [
 // { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  { path: 'auth', component: AuthenticationComponent },
  { path: '**', component: AppComponent, canActivate: [authGuard] },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
