import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrls: ['./simpleform.component.css']
})
export class SimpleformComponent implements OnInit {
  defaultValue:string="Angular";
  defaultGender:string="Female";
  employee=new Employee;
  submitted:boolean=false;
  genders=[
    {id:'1',value:'Male'},
    {id:'2',value:"Female"},
    {id:'3',value:'Other'}
  ]
  constructor() { }

  ngOnInit() {
  }
  OnSubmit(form:NgForm){
    //console.log(form.value); get all the values in object 
    // console.log(form.value);
    this.submitted=true;
    this.employee.course=form.value.course;
    this.employee.username=form.value.userDetails.username;
    this.employee.email=form.value.userDetails.email;
    this.employee.gender=form.value.gender;

    this.saveEmployeeData(this.employee);
    form.reset();
    form.controls['course'].setValue('Angular');
    form.controls['gender'].setValue('Female');
   console.log(form.controls);
   
  }

  saveEmployeeData(emp:Employee){
    console.log(emp.course);
    
  }
}
function moment() {
  throw new Error('Function not implemented.');
}

