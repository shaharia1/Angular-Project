import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-edd',
  templateUrl: './edd.component.html',
  styleUrls: ['./edd.component.css']
})
export class EddComponent implements OnInit,AfterViewInit  {


  displayedColumns: string[] = ['select','GUID', 'TID', '일시', 'DetectType','거래코드','EDD진행여부','더보기'];
  displayedColumns2: string[] = ['select','NO','GUID', '총자산가치', '변화금액', '변화비율','기초','증가','감소','잔액','last'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSource2 = new MatTableDataSource<PeriodicElement2>(ELEMENT_DATA2);
  mode: ProgressSpinnerMode = 'determinate';
  value = 80;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  selection = new SelectionModel<PeriodicElement>(true, []);
  selection2 = new SelectionModel<PeriodicElement2>(true, []);
  leftVal: boolean=true;
  rightVal: boolean=false;
  

  constructor() { }

  ngOnInit(): void {
  }

  

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  isAllSelected2() {
    const numSelected = this.selection2.selected.length;
    const numRows = this.dataSource2.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }
  toggleAllRows2() {
    if (this.isAllSelected2()) {
      this.selection2.clear();
      return;
    }

    this.selection2.select(...this.dataSource2.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.GUID + 1}`;
  }

  checkboxLabel2(row?: PeriodicElement2): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection2.isSelected(row) ? 'deselect' : 'select'} row ${row.NO + 1}`;
  }

  onLeftValChange(val: string) {
    this.leftVal = true;
    this.rightVal = false;
    console.log(val);
  }
  onRightValChange(val: string) {
    this.rightVal = true;
    this.leftVal = false;
    console.log(val);
  }

  
  btnClickEDD(){

  }
  
  btnClickEDD1(){

  }
  btnClick(){

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource2.paginator = this.paginator;
  }
}


export interface PeriodicElement {
  TID: number;
  GUID: number;
  Third: string;
  DetectType: string;
  Five: string;  
}
export interface PeriodicElement2 {
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

const ELEMENT_DATA2: PeriodicElement2[] = [
  {NO:1,GUID: 10101, TID: 595682017, Third: 13291.4681, DetectType: 271.89, Five:0,Five1:0,Five2:0,Five3:345437984},
  {NO:2,GUID: 10101, TID: 595682017, Third: 13291.4681, DetectType: 271.89, Five:0,Five1:0,Five2:0,Five3:345437984},
  {NO:3,GUID: 10101, TID: 595682017, Third: 13291.4681, DetectType: 271.89, Five:0,Five1:0,Five2:0,Five3:345437984},
  {NO:4,GUID: 10101, TID: 595682017, Third: 13291.4681, DetectType: 271.89, Five:0,Five1:0,Five2:0,Five3:345437984},
  {NO:5,GUID: 10101, TID: 595682017, Third: 13291.4681, DetectType: 271.89, Five:0,Five1:0,Five2:0,Five3:345437984},
  {NO:6,GUID: 10101, TID: 595682017, Third: 13291.4681, DetectType: 271.89, Five:0,Five1:0,Five2:0,Five3:345437984},
  {NO:7,GUID: 10101, TID: 595682017, Third: 13291.4681, DetectType: 271.89, Five:0,Five1:0,Five2:0,Five3:345437984},
  {NO:8,GUID: 10101, TID: 595682017, Third: 13291.4681, DetectType: 271.89, Five:0,Five1:0,Five2:0,Five3:345437984},
  {NO:9,GUID: 10101, TID: 595682017, Third: 13291.4681, DetectType: 271.89, Five:0,Five1:0,Five2:0,Five3:345437984},
  {NO:10,GUID: 10101, TID: 595682017, Third: 13291.4681, DetectType: 271.89, Five:0,Five1:0,Five2:0,Five3:345437984},
  {NO:11,GUID: 10101, TID: 595682017, Third: 13291.4681, DetectType: 271.89, Five:0,Five1:0,Five2:0,Five3:345437984},
  {NO:12,GUID: 10101, TID: 595682017, Third: 13291.4681, DetectType: 271.89, Five:0,Five1:0,Five2:0,Five3:345437984},
  {NO:13,GUID: 10101, TID: 595682017, Third: 13291.4681, DetectType: 271.89, Five:0,Five1:0,Five2:0,Five3:345437984},
  {NO:14,GUID: 10101, TID: 595682017, Third: 13291.4681, DetectType: 271.89, Five:0,Five1:0,Five2:0,Five3:345437984},
  {NO:15,GUID: 10101, TID: 595682017, Third: 13291.4681, DetectType: 271.89, Five:0,Five1:0,Five2:0,Five3:345437984},


]


