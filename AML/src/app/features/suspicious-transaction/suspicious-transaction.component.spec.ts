import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspiciousTransactionComponent } from './suspicious-transaction.component';

describe('SuspiciousTransactionComponent', () => {
  let component: SuspiciousTransactionComponent;
  let fixture: ComponentFixture<SuspiciousTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuspiciousTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspiciousTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
