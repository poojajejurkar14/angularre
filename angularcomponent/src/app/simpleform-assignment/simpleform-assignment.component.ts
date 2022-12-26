import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-simpleform-assignment',
  templateUrl: './simpleform-assignment.component.html',
  styleUrls: ['./simpleform-assignment.component.css']
})
export class SimpleformAssignmentComponent implements OnInit {
  defaultGender:string='Female';
  defaultDept='Computer';
  defaultCourse='Diploma';
  genders=[
    {id:'1',value:'Male'},
    {id:'2',value:'Female'}
  ]
  constructor() { }

  ngOnInit() {
  }
  OnSubmit(form:NgForm){
    console.log(form);
    form.controls['gender'].setValue['Female'];
    form.reset();
    form.controls['gender'].setValue['Female'];
  }

}
