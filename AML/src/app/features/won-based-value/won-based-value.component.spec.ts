import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WonBasedValueComponent } from './won-based-value.component';

describe('WonBasedValueComponent', () => {
  let component: WonBasedValueComponent;
  let fixture: ComponentFixture<WonBasedValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WonBasedValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WonBasedValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
