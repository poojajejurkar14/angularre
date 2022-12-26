import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-emp1',
  templateUrl: './emp1.component.html',
  styleUrls: ['./emp1.component.css']
})
export class Emp1Component implements OnInit {
emp;
  constructor(private employeeService:EmployeeService) { 
    this.employeeService.emp.subscribe(res =>{
    this.emp=res;
    })
  }

  ngOnInit() {
  }
  onUpdate(ename){
    let emp={
      name:'pooja',
      id:'101'
    }
    console.log(ename.value);
    
    this.employeeService.emp.next(JSON.stringify(emp))
  }
}
