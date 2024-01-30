import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyPrivacyTermsComponent } from './modify-privacy-terms.component';

describe('ModifyPrivacyTermsComponent', () => {
  let component: ModifyPrivacyTermsComponent;
  let fixture: ComponentFixture<ModifyPrivacyTermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyPrivacyTermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyPrivacyTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
