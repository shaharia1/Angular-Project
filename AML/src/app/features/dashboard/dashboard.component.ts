import { SelectionModel } from '@angular/cdk/collections';
import { MediaMatcher } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
// import { routes } from 'src/app/app-routing.module';
import { NavItem } from 'src/app/models/navItem';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit  {

    @ViewChild('myBarChart') myBarChart!: ElementRef<HTMLCanvasElement>;
  @ViewChild('myBarChart1') myBarChart1!: ElementRef<HTMLCanvasElement>;
  @ViewChild('myBarChart2') myBarChart2!: ElementRef<HTMLCanvasElement>;
  @ViewChild('myBarChart3') myBarChart3!: ElementRef<HTMLCanvasElement>;
  chart!: Chart;

  constructor() {}
  ngOnInit() {}

  ngAfterViewInit() {
      this.chart = new Chart(this.myBarChart.nativeElement, {
          type: 'bar',
          data: {
            labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri','Sat'],
              datasets: [
                  {
                      label: 'Revenue',
                      backgroundColor: 'rgba(2,117,216,1)',
                      borderColor: 'rgba(2,117,216,1)',
                      data: [4215, 5312, 6251, 7841, 9821, 14984,5555],
                  },
              ],
          },
          options: {
              scales: {
                  xAxes: [
                      {
                          time: {
                              unit: 'month',
                          },
                          gridLines: {
                              display: false,
                          },
                          ticks: {
                              maxTicksLimit: 7,
                          },
                      },
                  ],
                  yAxes: [
                      {
                          ticks: {
                              min: 0,
                              max: 20000,
                              maxTicksLimit: 6,
                          },
                          gridLines: {
                              display: true,
                          },
                      },
                  ],
              },
              legend: {
                  display: false,
              },
          },
      });


      //chart1
      this.chart = new Chart(this.myBarChart1.nativeElement, {
        type: 'bar',
        data: {
            labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri','Sat'],
              datasets: [
                  {
                      label: 'Revenue',
                      backgroundColor: 'rgba(2,117,216,1)',
                      borderColor: 'rgba(2,117,216,1)',
                      data: [4215, 5312, 6251, 7841, 9821, 14984,5555],
                  },
              ],
          },
          options: {
              scales: {
                  xAxes: [
                      {
                          time: {
                              unit: 'month',
                          },
                          gridLines: {
                              display: false,
                          },
                          ticks: {
                              maxTicksLimit: 7,
                          },
                      },
                  ],
                  yAxes: [
                      {
                          ticks: {
                              min: 0,
                              max: 20000,
                              maxTicksLimit: 6,
                          },
                          gridLines: {
                              display: true,
                          },
                      },
                  ],
              },
              legend: {
                  display: false,
              },
          },
    });


    //Chart2
    this.chart = new Chart(this.myBarChart2.nativeElement, {
        type: 'bar',
        data: {
            labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri','Sat'],
              datasets: [
                  {
                      label: 'Revenue',
                      backgroundColor: 'rgba(2,117,216,1)',
                      borderColor: 'rgba(2,117,216,1)',
                      data: [4215, 5312, 6251, 7841, 9821, 14984,5555],
                  },
              ],
          },
          options: {
              scales: {
                  xAxes: [
                      {
                          time: {
                              unit: 'month',
                          },
                          gridLines: {
                              display: false,
                          },
                          ticks: {
                              maxTicksLimit: 7,
                          },
                      },
                  ],
                  yAxes: [
                      {
                          ticks: {
                              min: 0,
                              max: 20000,
                              maxTicksLimit: 6,
                          },
                          gridLines: {
                              display: true,
                          },
                      },
                  ],
              },
              legend: {
                  display: false,
              },
          },
    });


    //Chart3
    this.chart = new Chart(this.myBarChart3.nativeElement, {
        type: 'bar',
        data: {
            labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri','Sat'],
              datasets: [
                  {
                      label: 'Revenue',
                      backgroundColor: 'rgba(2,117,216,1)',
                      borderColor: 'rgba(2,117,216,1)',
                      data: [4215, 5312, 6251, 7841, 9821, 14984,5555],
                  },
              ],
          },
          options: {
              scales: {
                  xAxes: [
                      {
                          time: {
                              unit: 'month',
                          },
                          gridLines: {
                              display: false,
                          },
                          ticks: {
                              maxTicksLimit: 7,
                          },
                      },
                  ],
                  yAxes: [
                      {
                          ticks: {
                              min: 0,
                              max: 20000,
                              maxTicksLimit: 6,
                          },
                          gridLines: {
                              display: true,
                          },
                      },
                  ],
              },
              legend: {
                  display: false,
              },
          },
    });
  }
}

