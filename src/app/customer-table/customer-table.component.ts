import { Component } from '@angular/core';
import { Customer } from '../customer/customeri';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.scss']
})
export class CustomerTableComponent {
  customerArray: Customer[] = [];

  constructor(private http: HttpClient) {
    this.getAllCustomer()
  }

  getAllCustomer() {
    this.http.get<Customer[]>('../../assets/data/customersdata.json')
        .subscribe((data: Customer[]) => {
        this.customerArray = data; 
        console.log(this.customerArray)
      }
    )
  }
}
