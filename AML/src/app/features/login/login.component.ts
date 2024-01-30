import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  year = new Date().getFullYear();

  panelColor = new FormControl('1');
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    
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
}
