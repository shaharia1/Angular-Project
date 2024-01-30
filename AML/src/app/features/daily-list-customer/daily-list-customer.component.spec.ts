import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyListCustomerComponent } from './daily-list-customer.component';

describe('DailyListCustomerComponent', () => {
  let component: DailyListCustomerComponent;
  let fixture: ComponentFixture<DailyListCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyListCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyListCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
