import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KoFIUSuspiciousTransactionComponent } from './ko-fiususpicious-transaction.component';

describe('KoFIUSuspiciousTransactionComponent', () => {
  let component: KoFIUSuspiciousTransactionComponent;
  let fixture: ComponentFixture<KoFIUSuspiciousTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KoFIUSuspiciousTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KoFIUSuspiciousTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
