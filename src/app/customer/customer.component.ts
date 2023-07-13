import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { Customer } from './customeri';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
@Injectable()
export class CustomerComponent {
  customername: string = "";
  mobile!: Number;

  customerArray: Customer[] = []

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

  save() {
    const customerInfo = {
      "username" : this.customername,
      "mobile" : this.mobile
    }
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post("../../assets/data/customersdata.json", customerInfo, { headers: headers})
        .subscribe(data => console.log(data))
  }
}
