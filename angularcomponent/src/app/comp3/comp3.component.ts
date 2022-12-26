import { Component, OnInit } from '@angular/core';
import { Utility1Service } from '../services/utility1.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {
userName;
  constructor(private utility1Service:Utility1Service) {
    this.utility1Service.userName.subscribe(res =>{
      this.userName=res;
   })
  }
  ngOnInit() {
  }
  updateUserName(uname){
    console.log(uname.value);
      // send the msg to an obserable means je subscribe krtil tyanna value deil
    this.utility1Service.userName.next(uname.value)
  }
}
