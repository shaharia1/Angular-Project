import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './features/login/login.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSliderModule} from '@angular/material/slider';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import { KycComponent } from './features/kyc/kyc.component';
import { LayoutComponent } from './features/layout/layout.component';
import { RegistrationComponent } from './features/registration/registration.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { LipoComponent } from './features/lipo/lipo.component';
import { RiskManagementComponent } from './features/risk-management/risk-management.component';
import { SuspiciousTransactionComponent } from './features/suspicious-transaction/suspicious-transaction.component';
import { SettingsComponent } from './features/settings/settings.component';
import { ProfileComponent } from './features/profile/profile.component';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import { LandingPageComponent } from './features/landing-page/landing-page.component';
import { EddComponent } from './features/edd/edd.component';
// import {ChartsModule} from 'ng2-charts/ng2-charts'; 
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDialogModule} from '@angular/material/dialog';


import { CustomerDetailsComponent } from './features/customer-details/customer-details.component';
import { DailyListCustomerComponent } from './features/daily-list-customer/daily-list-customer.component';
import { KoFIUSuspiciousTransactionComponent } from './features/ko-fiususpicious-transaction/ko-fiususpicious-transaction.component';
import { SuspiciousTransactionDetectionResultComponent } from './features/suspicious-transaction-detection-result/suspicious-transaction-detection-result.component';
import { LoginPageComponent } from './features/login-page/login-page.component';
import { CompanyInternalResidualRiskEntryComponent } from './features/company-internal-residual-risk-entry/company-internal-residual-risk-entry.component';
import { ListCustomerComponent } from './features/list-customer/list-customer.component';
import { WonBasedValueComponent } from './features/won-based-value/won-based-value.component';
import { BankKoreaReportComponent } from './features/bank-korea-report/bank-korea-report.component';
import { OperatorUserComponent } from './features/operator-user/operator-user.component';
import { ThresholdEditScreenComponent } from './features/threshold-edit-screen/threshold-edit-screen.component';
import { ModifyPrivacyTermsComponent } from './features/modify-privacy-terms/modify-privacy-terms.component';
import { UserRegisterComponent } from './features/user-register/user-register.component';
import { IdentityInformationDetailComponent } from './features/identity-information-detail/identity-information-detail.component';
import { EddProgressApplicationComponent } from './features/edd-progress-application/edd-progress-application.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    KycComponent,
    LayoutComponent,
    RegistrationComponent,
    LipoComponent,
    RiskManagementComponent,
    SuspiciousTransactionComponent,
    SettingsComponent,
    ProfileComponent,
    LandingPageComponent,
    EddComponent,
    CustomerDetailsComponent,
    DailyListCustomerComponent,
    KoFIUSuspiciousTransactionComponent,
    SuspiciousTransactionDetectionResultComponent,
    LoginPageComponent,
    CompanyInternalResidualRiskEntryComponent,
    ListCustomerComponent,
    WonBasedValueComponent,
    BankKoreaReportComponent,
    OperatorUserComponent,
    ThresholdEditScreenComponent,
    ModifyPrivacyTermsComponent,
    UserRegisterComponent,
    IdentityInformationDetailComponent,
    EddProgressApplicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
     HttpClientModule,
     BrowserAnimationsModule,
     ReactiveFormsModule,
    RouterModule,
    


    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    MatCardModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  MatSliderModule,
  MatListModule,
  MatExpansionModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatDatepickerModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatCheckboxModule,
  MatButtonToggleModule,
  MatDialogModule

  // Chart
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
