import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }
  checkuser(uname,pwd){
    if(uname=='admin' && pwd=='admin'){
      this._router.navigate(['product/mobile'])
    }
  }
}
