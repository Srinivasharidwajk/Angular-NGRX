import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {State} from '../../reducers';
import * as customerActions from './actions/customer.actions';
import {ICustomer} from '../../models/ICustomer';
import * as customerReducer from './reducers/customer.reducer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  public customers:ICustomer[];
  public errorMessage:string;
  public loading : boolean;

  constructor(private store:Store<State>) { }

  ngOnInit(): void {

    // get customers data from NGRX Store
    this.store.pipe(select(customerReducer.customerFeatureKey)).subscribe((state) => {
      this.customers = state.customers;
      this.errorMessage = state.errorMessage;
      this.loading = state.loading
    });
  }

  public getCustomers(){
    // dispatch an action to load customers from server
    this.store.dispatch(customerActions.loadCustomers());
  }

}
