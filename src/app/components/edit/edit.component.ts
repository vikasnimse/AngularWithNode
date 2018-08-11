// edit.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './../../employee.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  employee: any;
  angForm: FormGroup;
  title = 'Edit Employee';
  constructor(private route: ActivatedRoute, private router: Router, private service: EmployeeService, private fb: FormBuilder) {
    this.createForm();
   }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      role: ['', Validators.required ]
   });
  }

  updateCoin(name, role) {
      this.route.params.subscribe(params => {
      this.service.updateCoin(name, role, params['id']);
      this.router.navigate(['index']);
    });
  }
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.employee = this.service.editCoin(params['id']).subscribe(res => {
        this.employee = res;
      });
    });
  }
}