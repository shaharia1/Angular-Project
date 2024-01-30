import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LipoComponent } from './lipo.component';

describe('LipoComponent', () => {
  let component: LipoComponent;
  let fixture: ComponentFixture<LipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
