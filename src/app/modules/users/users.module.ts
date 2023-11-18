import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersDatatableComponent } from './users-datatable/users-datatable.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [UsersDatatableComponent],
  imports: [CommonModule, TableModule],
  exports: [UsersDatatableComponent],
})
export class UsersModule {}
