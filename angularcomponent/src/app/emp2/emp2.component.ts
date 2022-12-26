import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-emp2',
  templateUrl: './emp2.component.html',
  styleUrls: ['./emp2.component.css']
})
export class Emp2Component implements OnInit {
emp;
  constructor(private employeeService:EmployeeService) {
    this.employeeService.emp.subscribe(res =>{
      this.emp=res;
     console.log(res);
     
    })
   }

  ngOnInit() {
  }
  onUpdate(ename){
    let emp={
      name:'sonali',
      id:'102'
    }
    console.log(ename.value);
    
    this.employeeService.emp.next(JSON.stringify(emp))
  }
}