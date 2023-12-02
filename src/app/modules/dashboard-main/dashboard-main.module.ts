import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ChartModule} from "primeng/chart";



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    ChartModule
  ],
})
export class DashboardMainModule {}
