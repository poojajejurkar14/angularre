import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform-assignment',
  templateUrl: './reactiveform-assignment.component.html',
  styleUrls: ['./reactiveform-assignment.component.css']
})
export class ReactiveformAssignmentComponent implements OnInit {
  defaultGender:string='Female';
  defaultValue: string = "Manjeri";
  constructor() { }
  reactiveForm: FormGroup;
  password;
  
 
  ngOnInit() {
  }

  OnSubmit(form: NgForm) {

    console.log(form);
    form.controls['city'].setValue("Manjeri");
    form.controls['gender'].setValue("Female");
    console.log(form.controls);
    form.reset();
    form.controls['city'].setValue("Manjeri");
    form.controls['gender'].setValue("Female");
  }

}