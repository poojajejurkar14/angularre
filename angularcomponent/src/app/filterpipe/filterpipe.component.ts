import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filterpipe',
  templateUrl: './filterpipe.component.html',
  styleUrls: ['./filterpipe.component.css']
})
export class FilterpipeComponent implements OnInit {
  namesearch:string='';
  productarr:any[]=[
    {
      Sno:1,
      Name:'Mobile',
      Prise:'7000',
      Availibility:'Yes'
    },
    {
      Sno:2,
      Name:'TV',
      Prise:'20000',
      Availibility:'Yes'
    },{
      Sno:3,
      Name:'Washing machine',
      Prise:'25000',
      Availibility:'No'
    },
    {
      Sno:4,
      Name:'Tab',
      Prise:'45000',
      Availibility:'Yes'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
