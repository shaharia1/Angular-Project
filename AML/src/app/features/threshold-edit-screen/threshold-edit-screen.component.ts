import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-threshold-edit-screen',
  templateUrl: './threshold-edit-screen.component.html',
  styleUrls: ['./threshold-edit-screen.component.css']
})
export class ThresholdEditScreenComponent implements OnInit,AfterViewInit {
  displayedColumns: string[] = ['GUID', 'TID', '일시', 'DetectType','거래코드'];
  
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  
  mode: ProgressSpinnerMode = 'determinate';
  value = 80;
  dumayText = " 작성일시  2022-01-03 16:43 <br> 작성된 의심거래 탐지 검토요청드립니다. EDD로 보내 추가적인 내용을 받아야 할 것 같습니다."
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}

export interface PeriodicElement {
  TID: number;
  GUID: number;
  Third: string;
  DetectType: string;
  Five: string;  
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
