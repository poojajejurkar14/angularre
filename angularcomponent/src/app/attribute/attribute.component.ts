import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class AttributeComponent implements OnInit {
  colorVal = 'blue';
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

}
