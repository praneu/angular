import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-list',
  template: `
  <h2>
      Employee-List
   </h2>
  <h4>{{errorMsg}}</h4>
   <ul *ngFor="let employee of employees">
      <li>
        <h5>
          {{employee.name}}
        </h5> 
      </li> 
   </ul>
   `,
  styles: []
})
export class EmployeeListComponent {

  public employees=[] as any;

  public errorMsg ="";

  constructor(private _employeeService : EmployeeService) {}

  ngOnInit() {
    this._employeeService.getEmployees()
        .subscribe(data => this.employees = data,
                   error => this.errorMsg = error);
  }
  

}
