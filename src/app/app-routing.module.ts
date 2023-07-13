import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { CustomerTableComponent } from './customer-table/customer-table.component';

const routes: Routes = [

  {path: 'customer', component: CustomerComponent},
  {path: 'customerTable', component: CustomerTableComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }