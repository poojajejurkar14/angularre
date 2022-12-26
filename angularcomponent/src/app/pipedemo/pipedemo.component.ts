import { Component, OnInit } from '@angular/core';
import { Utility1Service } from '../services/utility1.service';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {
  obser;
  price:number=800000;
  // price:number=7.8989;
  obj={
    id:'101',name:'pooja'
  }
  todaysdate = new Date;
  constructor(private utility1Service: Utility1Service) {
    this.obser = this.utility1Service.userName;
  }

  ngOnInit() {
  }

}
