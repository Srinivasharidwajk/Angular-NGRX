import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent } from './customers.component';
import {CustomerListComponent} from './components/customer-list/customer-list.component';
import {CustomerDetailsComponent} from './components/customer-details/customer-details.component';

const routes: Routes = [
  { path: '', component: CustomerListComponent },
  { path: ':id', component: CustomerDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
