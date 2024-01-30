import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankKoreaReportComponent } from './bank-korea-report.component';

describe('BankKoreaReportComponent', () => {
  let component: BankKoreaReportComponent;
  let fixture: ComponentFixture<BankKoreaReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankKoreaReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankKoreaReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
