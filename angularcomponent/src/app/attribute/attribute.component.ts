import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class AttributeComponent implements OnInit {
  uname:string="i am from component";
  colorVal = 'blue';
  EmployeeRecord:any[]=[
    {ename:'pooja',city:'pune',salary:'25000'},
    {ename:'komal',city:'mumbai',salary:'20000'}
  ]
  people: any[] = [{
    "name": 'pooja',
    "country": "India"
  },
  {
    "name": 'sampada',
    "country": "UK"
  },
  {
    "name": 'Swapnil',
    "country": "US"
  },
  {
    "name": 'Prajkta',
    "country": "USA"
  },
  {
    "name": 'pranav',
    "country": "USA"
  }]
  constructor() { }

  ngOnInit() {
  }
  show(value){
    this.uname=value;
    // console.log(value);  sgle event yeta
  }
}
