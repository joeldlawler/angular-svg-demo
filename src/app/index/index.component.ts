import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Employee } from '../model/employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  employees: Employee[];
  selectedHero: Employee;

  constructor(
    private employeeService: EmployeeService,
    private router: Router) { }

  getEmployeees(): void {
    this.employeeService
      .getEmployeees()
      .then(employees => this.employees = employees);
  }

  showDetails(id: number): void {
    console.log(id);
  }

  ngOnInit() {
    this.getEmployeees();
  }

}
