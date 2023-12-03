import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ChartModule} from "primeng/chart";
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TimelineModule } from 'primeng/timeline';
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    ChartModule,
    TableModule,
    CardModule,
    ButtonModule,
    TimelineModule,
  ],
})
export class DashboardMainModule {}
