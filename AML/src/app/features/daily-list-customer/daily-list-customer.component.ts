import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-daily-list-customer',
  templateUrl: './daily-list-customer.component.html',
  styleUrls: ['./daily-list-customer.component.css']
})
export class DailyListCustomerComponent implements OnInit {

  displayedColumns: string[] = ['NO','GUID', '총자산가치', '변화금액', '변화비율','기초','증가','감소','잔액','last'];
  displayedColumns1: string[] = ['변화비율','변화금액', '총자산가치'];

  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSource1 = new MatTableDataSource<PeriodicElement1>(ELEMENT_DATA1);
  mode: ProgressSpinnerMode = 'determinate';
  value = 80;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;   

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  btnClick(){
    this.router.navigate(['/layout/dailyListCustomer']);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}



export interface PeriodicElement {
  NO:number;
  TID: number;
  GUID: number;
  Third: number;
  DetectType: number;
  Five: number; 
  Five1: number;  
  Five2: number;  
  Five3: number;   
}
export interface PeriodicElement1 {
  first:number;
  second: number;
  //third: number;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {NO:1,GUID: 10101, TID: 595682017, Third: 13291.4681, DetectType: 271.89, Five:0,Five1:0,Five2:0,Five3:345437984},
  // {NO:1,GUID: 2, TID: 155, Third: '21. 6. 11  16:16:22', DetectType: 'He',Five:'250sd'},
  // {NO:1,GUID: 3, TID: 155, Third: '21. 6. 11  16:16:22', DetectType: 'Li',Five:'250sd'},
  // {NO:1,GUID: 4, TID: 155, Third: '21. 6. 11  16:16:22', DetectType: 'Be',Five:'250sd'},
  // {NO:1,GUID: 5, TID: 155, Third: '21. 6. 11  16:16:22', DetectType: 'B',Five:'250sd'},
];
const ELEMENT_DATA1: PeriodicElement1[] = [
  {first:271.89,second: 595682017},
  // {NO:1,GUID: 2, TID: 155, Third: '21. 6. 11  16:16:22', DetectType: 'He',Five:'250sd'},
  // {NO:1,GUID: 3, TID: 155, Third: '21. 6. 11  16:16:22', DetectType: 'Li',Five:'250sd'},
  // {NO:1,GUID: 4, TID: 155, Third: '21. 6. 11  16:16:22', DetectType: 'Be',Five:'250sd'},
  // {NO:1,GUID: 5, TID: 155, Third: '21. 6. 11  16:16:22', DetectType: 'B',Five:'250sd'},
];
