import { Component, Input, OnInit } from '@angular/core';
import { Transfer } from '../models/movies';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() childPost:any[]=[];
data: Transfer[] = [
  { fname: `Pooja`, lname: `Jejurkar`, education: `BE-Comp`},
]
  constructor() { }

  ngOnInit() {
  }

}
