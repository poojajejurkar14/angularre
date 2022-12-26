import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-servicecomp2',
  templateUrl: './servicecomp2.component.html',
  styleUrls: ['./servicecomp2.component.css']
})
export class Servicecomp2Component implements OnInit {

   constructor(private _utilityService:UtilityService) { }  // dependency injection
  productss={};
  ngOnInit() {
    this.productss=this._utilityService.product;
  }
  Onsubscribe(){
    // alert('service comp2 subscribe');    inject other method in another components
    this._utilityService.display();
  }

}
