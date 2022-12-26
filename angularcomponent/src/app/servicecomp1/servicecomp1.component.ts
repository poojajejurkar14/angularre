import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-servicecomp1',
  templateUrl: './servicecomp1.component.html',
  styleUrls: ['./servicecomp1.component.css']
})
export class Servicecomp1Component implements OnInit {

  constructor(private _utilityService:UtilityService) { }  // dependency injection
productss={};
  ngOnInit() {
    this._utilityService.getUserData().subscribe(data =>{
      console.log('service ',data);
      
    })
  }
   Onsubscribe(){
  //   alert('service comp1 subscribe');
  this._utilityService.getUserData().subscribe(data =>{
    console.log('service ',data);
    })
  this._utilityService.display();
  }

}
