import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EddProgressApplicationComponent } from './edd-progress-application.component';

describe('EddProgressApplicationComponent', () => {
  let component: EddProgressApplicationComponent;
  let fixture: ComponentFixture<EddProgressApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EddProgressApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EddProgressApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
