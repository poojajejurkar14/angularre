import { Component, OnInit } from '@angular/core';
import { Transfer } from '../models/movies';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  post=' ';
  parentPost:any[]=[];
  data: Transfer= {
     fname: `Pooja`, lname: `Jejurkar`, education: `BE-Comp`,
  }
  constructor() { }

  ngOnInit() {
  }
  display(post){
    console.table(post);
    this.parentPost.push(post);
    console.table(this.data);
    
    this.parentPost.push(this.data);
  }

}
