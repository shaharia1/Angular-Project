import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kyc',
  templateUrl: './kyc.component.html',
  styleUrls: ['./kyc.component.css']
})
export class KycComponent implements OnInit, AfterViewInit {


  // 'NO.', '신청일자', 'GUID', '수령인 e-mail','접수번호' ,  '접수번호','업체명','계좌실명검증','신원정보','신원확인','신원처리결과','처리담장자','완료일'
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  mode: ProgressSpinnerMode = 'determinate';
  value = 80;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  

  clickedRows(event) {
    console.log(event);
    this.router.navigate(['/layout/identityInformationDetail']);
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
  { position: 1, name: '신청일자', weight: 111, symbol: '수령인' },
  { position: 2, name: '신청일자', weight: 111, symbol: '수령인' },
  { position: 3, name: '신청일자', weight: 111, symbol: '수령인' },
  { position: 4, name: '신청일자', weight: 111, symbol: '수령인' },
  { position: 5, name: '신청일자', weight: 111, symbol: '수령인' },
  { position: 6, name: '신청일자', weight: 111, symbol: '수령인' },
  { position: 7, name: '신청일자', weight: 111, symbol: '수령인' },
  { position: 8, name: '신청일자', weight: 111, symbol: '수령인' },
  { position: 9, name: '신청일자', weight: 111, symbol: '수령인' }

  // {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  // {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  // {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  // {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  // {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  // {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  // {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  // {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  // {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  // {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  // {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  // {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  // {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  // {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  // {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];

