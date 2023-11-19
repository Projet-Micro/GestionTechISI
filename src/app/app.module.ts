import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthenticationModule } from './modules/authentication/authentication.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { SplitButtonModule } from 'primeng/splitbutton';

import { UsersModule } from './modules/users/users.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import {ConfirmationService, MessageService} from 'primeng/api';
import { AuthService } from './shared/services/authentication/auth.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpInterceptorService } from './shared/services/interceptors/http-interceptor.service';
import {UsersComponent} from "./modules/users/users.component";
import {DialogService} from "primeng/dynamicdialog";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {ConfirmPopupModule} from "primeng/confirmpopup";
import {ToastModule} from "primeng/toast";
@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    //primeng modules
    ButtonModule,
    SplitButtonModule,
    MenubarModule,

    //core modules
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
