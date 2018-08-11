// create.component.ts

import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../employee.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  title = 'Add Employee';
  angForm: FormGroup;
  constructor(private service: EmployeeService, private fb: FormBuilder) {
    this.createForm();
   }
  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      role: ['', Validators.required ]
   });
  }
  addCoin(name, role) {
      this.service.addCoin(name, role);
  }
  ngOnInit() {
  }
}