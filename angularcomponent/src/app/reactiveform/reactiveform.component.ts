import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { promise } from 'protractor';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  submitted:boolean=false;
  notAllowedNames=['codemind','technology'];
  genders=[
    {id:'1',value:'Male'},
    {id:'2',value:'Female'}
  ]
  myReactiveForm: FormGroup;
  constructor(private _fb:FormBuilder) {
    this.createForm();

  }

  ngOnInit() {
    // setTimeout(() => {
    //   this.myReactiveForm.setValue({
    //     'userDetails':{
    //       'username':'codemind1122',
    //       'email':'test@gmail.com'
    //     },
    //     'course':'Angular',
    //     'gender':'Male'
    //   })
    // },2000);

    setTimeout(() => {
      this.myReactiveForm.patchValue({
        'userDetails':{
          'username':'codemind1122',
          'email':'test@gmail.com'
        }
        // 'course':'Angular',
        // 'gender':'Male'
      })
    },2000);
  }

 
  createForm() {
    // this.myReactiveForm = new FormGroup({
    //   // 'username': new FormControl('', [Validators.required,this.naName.bind(this)]),
    //   // 'email': new FormControl('', [Validators.required, Validators.email]),
    //   'userDetails':new FormGroup({
    //     'username': new FormControl('', [Validators.required,this.naName.bind(this)]),
    //     'email': new FormControl('', [Validators.required, Validators.email],this.naEmail),  //Asynchronyms validation
    //   }),
    //   'course': new FormControl('Angular'),
    //   'gender':new FormControl('Female'),
    //   'skills': new FormArray([
    //     new FormControl(null,Validators.required),
      
    //   ])
    // })

    //FormBuilder:

    this.myReactiveForm=this._fb.group({
      userDetails: this._fb.group({
        username: ['', Validators.required],
        email: ['', Validators.required]
      }),
      course:['Angular'],
      gender:['Female'],
      skills:this._fb.array([])
    })
  }
  OnSubmit() {
    this.submitted=true;
    console.log(this.myReactiveForm);
  }
  OnAddSkills(){
   (<FormArray> this.myReactiveForm.get('skills')).push(new FormControl(null,Validators.required));
  }
  naName(control:FormControl){
    if(this.notAllowedNames.indexOf(control.value)!== -1)
    return {'names not allowed':true}
    return null;
  }
  usernameAlreadyExist="";
  usernameCheck(){
    
  }
  naEmail(control:FormControl) :Promise<any> | Observable<any>{
    const myResponse=new Promise<any>((resolve , reject) => {
      setTimeout(() => {
        if(control.value === 'codemindtechonology@gmail.com'){
          resolve ({"emailNotAllowed":true})
        }
        else{
          resolve(null)
        }
      }, 2000);
    })
    return myResponse;
  }
  
}
