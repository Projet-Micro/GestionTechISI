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

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import {MessageService} from "primeng/api";
import {AuthService} from "./shared/services/authentication/auth.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HttpInterceptorService} from "./shared/services/interceptors/http-interceptor.service";
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
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [AuthService,MessageService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
