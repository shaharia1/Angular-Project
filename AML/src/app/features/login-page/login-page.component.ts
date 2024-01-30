import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  invalid:boolean = false;
  hide = false;
  year = new Date().getFullYear();
  selectedIndex: number = 0;
  panelColor = new FormControl('1');
  
  UserEmail:string="abc**@paygate.net";

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }
  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    this.selectedIndex = tabChangeEvent.index;

  }
  getErrorMessage(){

  }

  nameChanged(event:any){
    console.log(event);
    
      }
      passwordChanged(event:any){
        console.log(event);
        
          }

  login(){
    // this.router.navigate(['/layout']);
    this.router.navigate(['/layout/dashboard']);
  }
  next() {
    this.selectedIndex += 1;

  }

}
