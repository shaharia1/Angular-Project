import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentityInformationDetailComponent } from './identity-information-detail.component';

describe('IdentityInformationDetailComponent', () => {
  let component: IdentityInformationDetailComponent;
  let fixture: ComponentFixture<IdentityInformationDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentityInformationDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentityInformationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
