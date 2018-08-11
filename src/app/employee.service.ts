
import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Observable,of, from } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class EmployeeService {

  result: any;
  constructor(private http: HttpClient) {}

  addCoin(name, role) {
    const uri = 'http://localhost:4000/employees/add';
    const obj = {
      name: name,
      role: role
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res =>
          console.log('Done'));
  }

  getCoins() {
    const uri = 'http://localhost:4000/employees';
    return this
            .http
            .get(uri)
            .pipe(map(res => {
              return res;
            }))
  }

  editCoin(id) {
    const uri = 'http://localhost:4000/employees/edit/' + id;
    return this
            .http
            .get(uri)
            .pipe(map(res => {
              return res;
            }))
  }

  updateCoin(name, role, id) {
    const uri = 'http://localhost:4000/employees/update/' + id;

    const obj = {
      name: name,
      role: role
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res => console.log('Done'));
  }

  deleteCoin(id) {
    const uri = 'http://localhost:4000/employees/delete/' + id;

        return this
            .http
            .get(uri)
            .pipe(map(res => {
              return res;
            }))
  }
}