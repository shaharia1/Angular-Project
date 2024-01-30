import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyInternalResidualRiskEntryComponent } from './company-internal-residual-risk-entry.component';

describe('CompanyInternalResidualRiskEntryComponent', () => {
  let component: CompanyInternalResidualRiskEntryComponent;
  let fixture: ComponentFixture<CompanyInternalResidualRiskEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyInternalResidualRiskEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyInternalResidualRiskEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
