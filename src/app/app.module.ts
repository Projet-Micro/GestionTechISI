import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthenticationModule } from './modules/authentication/authentication.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { AvatarMenuComponent } from './layout/avatar-menu/avatar-menu.component';
import { UsersModule } from './modules/users/users.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AuthService } from './shared/services/authentication/auth.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpInterceptorService } from './shared/services/interceptors/http-interceptor.service';
import { DialogService } from 'primeng/dynamicdialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ListboxModule } from 'primeng/listbox';
import {DashboardMainModule} from "./modules/dashboard-main/dashboard-main.module";
import { ProjectorsComponent } from './modules/projectors/projectors.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AvatarMenuComponent,
    ProjectorsComponent,
  ],
  imports: [
    //primeng modules
    ButtonModule,
    MenubarModule,
    DropdownModule,
    ListboxModule,
    OverlayPanelModule,
    //core modules
    DashboardMainModule,
    HttpClientModule,
    CoreModule,
    AuthenticationModule,
    UsersModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ConfirmDialogModule,
    ConfirmPopupModule,
    ToastModule,
  ],
  providers: [
    AuthService,
    MessageService,
    DialogService,
    ConfirmationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
