import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankKoreaReportComponent } from './features/bank-korea-report/bank-korea-report.component';
import { CompanyInternalResidualRiskEntryComponent } from './features/company-internal-residual-risk-entry/company-internal-residual-risk-entry.component';
import { CustomerDetailsComponent } from './features/customer-details/customer-details.component';
import { DailyListCustomerComponent } from './features/daily-list-customer/daily-list-customer.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { EddProgressApplicationComponent } from './features/edd-progress-application/edd-progress-application.component';
import { EddComponent } from './features/edd/edd.component';
import { IdentityInformationDetailComponent } from './features/identity-information-detail/identity-information-detail.component';
import { KoFIUSuspiciousTransactionComponent } from './features/ko-fiususpicious-transaction/ko-fiususpicious-transaction.component';
import { KycComponent } from './features/kyc/kyc.component';
import { LandingPageComponent } from './features/landing-page/landing-page.component';
import { LayoutComponent } from './features/layout/layout.component';
import { LipoComponent } from './features/lipo/lipo.component';
import { ListCustomerComponent } from './features/list-customer/list-customer.component';
import { LoginPageComponent } from './features/login-page/login-page.component';
import { LoginComponent } from './features/login/login.component';
import { ModifyPrivacyTermsComponent } from './features/modify-privacy-terms/modify-privacy-terms.component';
import { OperatorUserComponent } from './features/operator-user/operator-user.component';
import { ProfileComponent } from './features/profile/profile.component';
import { RegistrationComponent } from './features/registration/registration.component';
import { RiskManagementComponent } from './features/risk-management/risk-management.component';
import { SettingsComponent } from './features/settings/settings.component';
import { SuspiciousTransactionDetectionResultComponent } from './features/suspicious-transaction-detection-result/suspicious-transaction-detection-result.component';
import { SuspiciousTransactionComponent } from './features/suspicious-transaction/suspicious-transaction.component';
import { ThresholdEditScreenComponent } from './features/threshold-edit-screen/threshold-edit-screen.component';
import { WonBasedValueComponent } from './features/won-based-value/won-based-value.component';


export const routes: Routes = [
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'loginPage', component: LoginPageComponent },
  
  { path: 'registration', component: RegistrationComponent },
 
  { path: 'layout', component: LayoutComponent,

  children:[
    { path: 'dashboard', component: DashboardComponent },
    { path: 'kyc', component: KycComponent },
    { path: 'suspiciousTransaction', component: SuspiciousTransactionComponent },
    { path: 'riskManagement', component: RiskManagementComponent },
    { path: 'lipo', component: LipoComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'edd', component: EddComponent },
    { path: 'customerDetails', component: CustomerDetailsComponent },
    { path: 'dailyListCustomer', component: DailyListCustomerComponent },
    { path: 'KoFIUSuspiciousTransaction', component: KoFIUSuspiciousTransactionComponent },
    { path: 'SuspiciousTransactionDetectionResult', component: SuspiciousTransactionDetectionResultComponent },
    { path: 'CompanyInternalResidualRiskEntry', component: CompanyInternalResidualRiskEntryComponent },
    { path: 'ListbyCustomer', component: ListCustomerComponent },
    { path: 'BasedOnTheWonbasedValue', component: WonBasedValueComponent },
    { path: 'BankofKoreareport', component: BankKoreaReportComponent },

    { path: 'operatorUser', component: OperatorUserComponent },
    { path: 'thresholdEditScreen', component: ThresholdEditScreenComponent },
    { path: 'modifyPrivacyTerms', component: ModifyPrivacyTermsComponent },
    { path: 'identityInformationDetail', component: IdentityInformationDetailComponent },
    { path: 'eddProgressApplicationComponent', component: EddProgressApplicationComponent },
    
    
  ]

},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
