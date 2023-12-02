import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {


  pieOption = {
    plugins: {
      legend: {
        labels: {
          color: '#495057'
        }
      }
    }
  }

  pieData = {
    labels: ['Available','Unavailable','Out of Service'],
    datasets: [
      {
        data: [30, 5, 7],
        backgroundColor: [
          "#24efce",
          "#fd4141",
          "#232323"
        ],
        hoverBackgroundColor: [
          "#2afddb",
          "#fd4141",
          "#313131"
        ]
      }
    ]
  }



}
