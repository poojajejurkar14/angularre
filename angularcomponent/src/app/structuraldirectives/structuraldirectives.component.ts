import { Component, OnInit } from '@angular/core';
import { Courses } from '../models/movies';


@Component({
  selector: 'app-structuraldirectives',
  templateUrl: './structuraldirectives.component.html',
  styleUrls: ['./structuraldirectives.component.css']
})
export class StructuraldirectivesComponent implements OnInit {
  info:any=`Angular is the most popular JavaScript framework and platform for developing client-side (front-end) mobile and desktop web apps or single page applications (SPAs).

  Angular community has released its latest version known as Angular 8. If you are familiar with previous version of Angular, it will not be difficult for you. You can easily upgrade your older version of Angular to latest version Angular 8.`;
  infostatus:string=' ';
  title:string="Top 3 Courses";
  course: Courses[] = [
    { courses: `Angular`, fees: `20,000/-`, duration: `3 Month`, salary: `5 LPA` },
    { courses: `React`, fees: `22,000/-`, duration: `4 Month`, salary: `4 LPA` },
    { courses: `Java`, fees: `25,000/-`, duration: `3 Month`, salary: `5 LPA` },
  ]
  selectedActor:string;

  constructor() { }

  ngOnInit() {
  }
  oninfostatus(){
    this.infostatus=' ';
  }
infoo(){
    this.info=" ";
  }
  getActorImage(value){
    console.log(value.target.value);
    this.selectedActor=value.target.value;
  }

}





