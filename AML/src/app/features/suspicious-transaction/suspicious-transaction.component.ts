import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suspicious-transaction',
  templateUrl: './suspicious-transaction.component.html',
  styleUrls: ['./suspicious-transaction.component.css']
})
export class SuspiciousTransactionComponent implements OnInit,AfterViewInit  {

  displayedColumns: string[] = ['GUID', 'TID', '일시', 'DetectType','거래코드','EDD진행여부','더보기'];
  displayedColumns3: string[] = ['NO','GUID', '총자산가치', '변화금액', '변화비율','기초','증가','감소','잔액','last'];
  // displayedColumns: string[] = ['position', 'name', 'weight', 'DetectType'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSource3 = new MatTableDataSource<PeriodicElement3>(ELEMENT_DATA3);
  mode: ProgressSpinnerMode = 'determinate';
  value = 80;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  bt1: boolean = true;
  bt2: boolean = false;
  bt3: boolean = false;
  bt4: boolean = false;

  SuspiciousTransactionDetectionResult: boolean = false;
  KoFIUSuspiciousTransaction: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  btnClick(){
    this.router.navigate(['/layout/customerDetails']);
  }

  btnClickEDD1(){
    // this.router.navigate(['/layout/SuspiciousTransactionDetectionResult']);
    this.bt1 =false;
    this.bt2 =false;
    this.bt3 =false;
    this.bt4 =false;
    this.SuspiciousTransactionDetectionResult = true;
  }
  btnClickEDD(){
    this.router.navigate(['/layout/KoFIUSuspiciousTransaction']);
    // this.bt1 =false;
    // this.bt2 =false;
    // this.bt3 =false;
    // this.bt4 =false;
    // this.SuspiciousTransactionDetectionResult = false;
    // this.KoFIUSuspiciousTransaction = true;
  }

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'AML1'},
    {value: 'pizza-1', viewValue: 'AML2'},
  ];

  toggleShow() {
   
    this.bt1 =true;
    this.bt2 =false;
    this.bt3 =false;
    this.bt4 =false;
    
    }
  
toggleShow2() {

  this.bt2 = true;
  this.bt1 =false;
  this.bt3 =false;
  this.bt4 =false;
  
  }
  toggleShow3() {

    this.bt3 = true;
    this.bt1 =false;
    this.bt2 =false;
    this.bt4 =false;
    
    }
    toggleShow4() {

      this.bt4 = true;
      this.bt1 =false;
      this.bt2 =false;
      this.bt3 =false;
      
      }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

interface Food {
  value: string;
  viewValue: string;
}

export interface PeriodicElement {
  TID: number;
  GUID: number;
  Third: string;
  DetectType: string;
  Five: string;  
}

export interface PeriodicElement3 {
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

const ELEMENT_DATA: PeriodicElement[] = [
  {GUID: 1, TID: 155, Third: '21. 6. 11  16:16:22', DetectType: 'H',Five:'250sd'},
  {GUID: 2, TID: 155, Third: '21. 6. 11  16:16:22', DetectType: 'He',Five:'250sd'},
  {GUID: 3, TID: 155, Third: '21. 6. 11  16:16:22', DetectType: 'Li',Five:'250sd'},
  {GUID: 4, TID: 155, Third: '21. 6. 11  16:16:22', DetectType: 'Be',Five:'250sd'},
  {GUID: 5, TID: 155, Third: '21. 6. 11  16:16:22', DetectType: 'B',Five:'250sd'},
  {GUID: 6, TID: 155, Third: '21. 6. 11  16:16:22', DetectType: 'C',Five:'250sd'},
  {GUID: 7, TID: 155, Third: '21. 6. 11  16:16:22', DetectType: 'N',Five:'250sd'},
  {GUID: 8, TID: 155, Third: '21. 6. 11  16:16:22', DetectType: 'O',Five:'250sd'},
  {GUID: 9, TID: 155, Third: '21. 6. 11  16:16:22', DetectType: 'F',Five:'250sd'},
  {GUID: 10, TID: 155, Third: '21. 6. 11  16:16:22', DetectType: 'Ne',Five:'250sd'},
  {GUID: 11, TID: 155, Third: '21. 6. 11  16:16:22', DetectType: 'Na',Five:'250sd'},
  {GUID: 12, TID: 155, Third: '21. 6. 11  16:16:22', DetectType: 'Mg',Five:'250sd'},
  {GUID: 13, TID: 155, Third: '21. 6. 11  16:16:22', DetectType: 'Al',Five:'250sd'},
  {GUID: 14, TID: 155, Third: '21. 6. 11  16:16:22', DetectType: 'Si',Five:'250sd'},
  {GUID: 15, TID: 155, Third: '21. 6. 11  16:16:22', DetectType: 'P',Five:'250sd'},
  {GUID: 16, TID: 155, Third: '21. 6. 11  16:16:22', DetectType: 'S',Five:'250sd'},
  {GUID: 17, TID: 155, Third: '21. 6. 11  16:16:22', DetectType: 'Cl',Five:'250sd'},
  {GUID: 18, TID: 155, Third: '21. 6. 11  16:16:22', DetectType: 'Ar',Five:'250sd'},
  {GUID: 19, TID: 155, Third: '21. 6. 11  16:16:22', DetectType: 'K',Five:'250sd'},
  {GUID: 20, TID: 155, Third: '21. 6. 11  16:16:22', DetectType: 'Ca',Five:'250sd'},
];

const ELEMENT_DATA3: PeriodicElement3[] = [
  {NO:1,GUID: 10101, TID: 595682017, Third: 13291.4681, DetectType: 271.89, Five:0,Five1:0,Five2:0,Five3:345437984},
  // {NO:1,GUID: 2, TID: 155, Third: '21. 6. 11  16:16:22', DetectType: 'He',Five:'250sd'},
  // {NO:1,GUID: 3, TID: 155, Third: '21. 6. 11  16:16:22', DetectType: 'Li',Five:'250sd'},
  // {NO:1,GUID: 4, TID: 155, Third: '21. 6. 11  16:16:22', DetectType: 'Be',Five:'250sd'},
  // {NO:1,GUID: 5, TID: 155, Third: '21. 6. 11  16:16:22', DetectType: 'B',Five:'250sd'},


];


