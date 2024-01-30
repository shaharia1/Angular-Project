import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavItem } from 'src/app/models/navItem';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, OnDestroy {

  // routes = routes;
  //constructor() { }



  menu: NavItem[] = [
    {
      displayName: 'Dashboard',
      iconName: 'pie_chart',
      route: 'dashboard',
    },
    {
      displayName: 'KYC',
      iconName: 'payment',
      route: 'kyc',
    },
    {
      displayName: '의심거래보도제도',
      iconName: 'shuffle',
      route: 'suspiciousTransaction',
    },
    {
      displayName: '잔여위험관리',
      iconName: 'attach_money',
      route: 'riskManagement',
    },
    {
      displayName: 'EDD',
      iconName: 'attach_money',
      route: 'edd',
    },
    {
      displayName: '리포드',
      iconName: 'dynamic_feed',
      // route: 'lipo',
      children: [
        {
          displayName: '고객별 목록',
          iconName: '',
          route: 'ListbyCustomer',
        },
        {
          displayName: '원화 환산 가치 기반',
          iconName: '',
          route: 'BasedOnTheWonbasedValue',
        },
        {
          displayName: '한국은행보고',
          iconName: '',
          route: 'BankofKoreareport',
        }
      ]
    },
    {
      displayName: 'Settings',
      iconName: 'settings',
      // route: 'settings',
      children: [
        {
          displayName: '사업자 / 사용자',
          iconName: '',
          route: 'operatorUser',
        },
        {
          displayName: '임계치 수정 화면',
          iconName: '',
          route: 'thresholdEditScreen',
        }, {
          displayName: '개인정보 약관 수정',
          iconName: '',
          route: 'modifyPrivacyTerms',
        }
      ]
    },
    
  ];
  mobileQuery: MediaQueryList;
  // fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);



  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }


  ngOnInit(): void {

  }




  logout() {
    // this.router.navigate(['/login']);
    this.router.navigate(['/loginPage']);

    console.log('logout')
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }


}
