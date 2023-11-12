import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  /*const routes: Routes = [
    //{ path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
   // { path: 'auth', component: AuthenticateComponent },
    //{ path: '**', component: AppComponent, canActivate: [AuthGuard] },
  ];*/

}
