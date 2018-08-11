import { EmployeeService } from './../../employee.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  employees: any;

  constructor(private http: HttpClient, private service: EmployeeService) {}

  ngOnInit() {
    this.getCoins();
  }

  getCoins() {
    this.service.getCoins().subscribe(res => {
      this.employees = res;
    });
  }

  deleteCoin(id) {
    this.service.deleteCoin(id).subscribe(res => {
      console.log('Deleted');
    });
  }
}