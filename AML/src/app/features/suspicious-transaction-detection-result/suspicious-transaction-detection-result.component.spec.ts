import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspiciousTransactionDetectionResultComponent } from './suspicious-transaction-detection-result.component';

describe('SuspiciousTransactionDetectionResultComponent', () => {
  let component: SuspiciousTransactionDetectionResultComponent;
  let fixture: ComponentFixture<SuspiciousTransactionDetectionResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuspiciousTransactionDetectionResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspiciousTransactionDetectionResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
