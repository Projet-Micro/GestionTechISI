import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { MenuModule } from 'primeng/menu';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { AddProjectorFormComponent } from './add-projector-form/add-projector-form.component';
import { ProjectorsComponent } from './projectors.component';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { InputNumberModule } from 'primeng/inputnumber';
import {InputTextareaModule} from "primeng/inputtextarea";
import { UpdateProjectorFormComponent } from './update-projector-form/update-projector-form.component';

@NgModule({
  declarations: [ProjectorsComponent, AddProjectorFormComponent, UpdateProjectorFormComponent],
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
    InputNumberModule,
    InputTextareaModule,
    MessageModule,
    OverlayPanelModule,
  ],
  exports: [ProjectorsComponent],
  providers: [MessageService, DialogService, ConfirmationService],
})
export class ProjectorsModule {}
