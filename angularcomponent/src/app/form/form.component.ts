import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  defaultValue: string = "Manjeri";
  constructor() { }
  reactiveForm: FormGroup;
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";

  ngOnInit() {
  }

  OnSubmit(form: NgForm) {

    console.log(form);
    form.controls['city'].setValue("Manjeri");
    console.log(form.controls);
    form.reset();
    form.controls['city'].setValue("Manjeri");

  }

}
