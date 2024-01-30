import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { UserRegisterComponent } from '../user-register/user-register.component';

@Component({
  selector: 'app-operator-user',
  templateUrl: './operator-user.component.html',
  styleUrls: ['./operator-user.component.css']
})
export class OperatorUserComponent implements OnInit,AfterViewInit  {


  // 'NO.', '신청일자', 'GUID', '수령인 e-mail','접수번호' ,  '접수번호','업체명','계좌실명검증','신원정보','신원확인','신원처리결과','처리담장자','완료일'
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  mode: ProgressSpinnerMode = 'determinate';
  value = 80;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  name: any;
  animal: any;

  

  constructor(private router: Router,public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  // user(){
  //   // this.router.navigate(['/loginPage']);
  // }
  openDialog(): void {
    const dialogRef = this.dialog.open(UserRegisterComponent, {
      width: '50%',
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

 
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  // 'NO.', '신청일자', 'GUID', '수령인 e-mail','접수번호' ,  '접수번호','업체명','계좌실명검증','신원정보','신원확인','신원처리결과','처리담장자','완료일'
  {position: 1, name: '신청일자', weight: 111, symbol: '수령인'},
  {position: 2, name: '신청일자', weight: 111, symbol: '수령인'},
  {position: 3, name: '신청일자', weight: 111, symbol: '수령인'},
  {position: 4, name: '신청일자', weight: 111, symbol: '수령인'},
  {position: 5, name: '신청일자', weight: 111, symbol: '수령인'},
  {position: 6, name: '신청일자', weight: 111, symbol: '수령인'},
  {position: 7, name: '신청일자', weight: 111, symbol: '수령인'},
  {position: 8, name: '신청일자', weight: 111, symbol: '수령인'},
  {position: 9, name: '신청일자', weight: 111, symbol: '수령인'}
];

