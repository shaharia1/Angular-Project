import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThresholdEditScreenComponent } from './threshold-edit-screen.component';

describe('ThresholdEditScreenComponent', () => {
  let component: ThresholdEditScreenComponent;
  let fixture: ComponentFixture<ThresholdEditScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThresholdEditScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThresholdEditScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
