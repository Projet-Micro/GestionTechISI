import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersDatatableComponent } from './users-datatable/users-datatable.component';

@NgModule({
  declarations: [UsersDatatableComponent],
  imports: [CommonModule],
  exports: [UsersDatatableComponent],
})
export class UsersModule {}
