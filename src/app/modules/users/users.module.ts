import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersDatatableComponent } from './users-datatable/users-datatable.component';
import { TableModule } from 'primeng/table';
import { UsersComponent } from './users.component';
import {MenuModule} from "primeng/menu";
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";
import { AddUserFormComponent } from './add-user-form/add-user-form.component';
import {ButtonModule} from "primeng/button";
import {CheckboxModule} from "primeng/checkbox";
import {DialogModule} from "primeng/dialog";
import {PasswordModule} from "primeng/password";
import {InputTextModule} from "primeng/inputtext";
import {MessageModule} from "primeng/message";
import {ConfirmationService, MessageService} from "primeng/api";
import {DialogService} from "primeng/dynamicdialog";


@NgModule({
  declarations: [UsersDatatableComponent, UsersComponent, AddUserFormComponent],
  imports: [
    CommonModule,
    TableModule,
    MenuModule,
    DropdownModule,
    FormsModule,
    ButtonModule,
    CheckboxModule,
    DialogModule,
    PasswordModule,
    InputTextModule,
    MessageModule,
  ],
  exports: [UsersDatatableComponent, UsersComponent],
  providers: [
    MessageService,
    DialogService,
    ConfirmationService,
  ]
})
export class UsersModule {}
