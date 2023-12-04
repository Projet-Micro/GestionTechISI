import { Component } from '@angular/core';
import { ProjectorsService } from 'src/app/shared/services/projectors/projectors.service';
import { ProjectorInfo } from 'src/app/shared/models/projector-info';
import { ProjectorCount } from 'src/app/shared/models/projector-count';
import { HistoryService } from 'src/app/shared/services/history/history.service';
import { HistoryLogInfo } from 'src/app/shared/models/history-log-info';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  projectorcount: ProjectorCount = {
    allProjectorsCount: 0,
    availableProjectorsCount: 0,
    unavailableProjectorsCount: 0,
    toFixProjectorsCount: 0,
  };
  toFixProjectors: ProjectorInfo[] = [];
  historyLogs: HistoryLogInfo[] = [];
  historyLog: any[] = [];
  constructor(
    private projectorService: ProjectorsService,
    private historyService: HistoryService,
    private router: Router
  ) {
    this.fetchChartData();
    this.getProjectors();
    this.getHistory();
  }
  private fetchChartData() {
    this.projectorService.countProjectors().subscribe({
      next: (data: ProjectorCount) => {
        this.projectorcount = data;
        this.updatePieData(); // Update the chart data
      },
      error: (err: unknown) => {
        console.error(err);
      },
    });
  }
  private updatePieData() {
    this.pieData = {
      labels: ['Available', 'Unavailable', 'Out of Service'],
      datasets: [
        {
          data: [
            this.projectorcount.availableProjectorsCount,
            this.projectorcount.unavailableProjectorsCount,
            this.projectorcount.toFixProjectorsCount,
          ],
          backgroundColor: ['#5758e9', '#3030a2', '#141545'],
          hoverBackgroundColor: ['#7c7dee', '#3637b9', '#1b1c5c'],
        },
      ],
    };
  }
  private getProjectors() {
    this.projectorService.getAllProjectors(false).subscribe({
      next: (data: ProjectorInfo[]) => {
        this.toFixProjectors = data.filter(projector => projector.status === 2);
      },
      error: (err: unknown) => {
        console.error(err);
      },
    });
  }
  private getHistory() {
    this.historyService.getAllHistoryLogs(false).subscribe({
      next: (data: HistoryLogInfo[]) => {
        this.historyLogs = data;
        this.historyLogs.sort((a, b) => {
          const dateA = new Date(a.start_date);
          const dateB = new Date(b.start_date);

          if (dateA < dateB) {
            return -1;
          }
          if (dateA > dateB) {
            return 1;
          }
          return 0;
        });
        const newHistoryLogs: unknown[] = [];

        this.historyLogs.forEach(historylog => {
          if (historylog.status == false && historylog.end_date) {
            newHistoryLogs.push([
              historylog,
              [
                {
                  status: 'Rented',
                  date: new Date(historylog.start_date).toLocaleString(
                    'en-GB',
                    {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                      second: '2-digit',
                      timeZone: 'UTC',
                    }
                  ),
                  color: '#3536E6',
                  icon: 'pi pi-upload',
                },
                {
                  status: 'Recovered',
                  date: new Date(historylog.end_date).toLocaleString('en-GB', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    timeZone: 'UTC',
                  }),
                  color: '#59CE8F',
                  icon: 'pi pi-check',
                },
              ],
            ]);
          } else {
            const expectedDate = new Date(historylog.start_date);
            expectedDate.setHours(expectedDate.getHours() + 2);
            newHistoryLogs.push([
              historylog,
              [
                {
                  status: 'Rented',
                  date: new Date(historylog.start_date).toLocaleString(
                    'en-GB',
                    {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                      second: '2-digit',
                      timeZone: 'UTC',
                    }
                  ),
                  color: '#3536E6',
                  icon: 'pi pi-upload',
                },
                {
                  status: 'Expected',
                  date: expectedDate.toLocaleString('en-GB', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    timeZone: 'UTC',
                  }),
                  color: '#d69729',
                  icon: 'pi pi-clock',
                },
              ],
            ]);
          }
        });
        this.historyLog = this.historyLog.concat(newHistoryLogs);
      },
      error: (err: unknown) => {
        console.error(err);
      },
    });
  }
  goToProjectorstab() {
    this.router.navigateByUrl('/projectors');
  }
  pieOption = {
    plugins: {
      legend: {
        labels: {
          color: '#495057',
          font: {
            size: 16,
          },
          padding: 20, // Padding between lines in the legend
        },
        position: 'bottom',
        align: 'start',
        fullSize: true,
        padding: 30, // Padding around the legend
      },
    },
    responsive: true,
    height: 400,
    width: 400,
  };

  pieData = {};
}
