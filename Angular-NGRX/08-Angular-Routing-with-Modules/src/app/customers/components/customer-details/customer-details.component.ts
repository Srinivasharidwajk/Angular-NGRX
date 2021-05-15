import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {ICustomer} from '../../models/ICustomer';
import {select, Store} from '@ngrx/store';
import {State} from '../../../reducers';
import * as customerActions from '../../actions/customer.actions';
import * as customerReducer from '../../reducers/customer.reducer';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  public selectedCustomer:ICustomer;
  public customerId:string;
  constructor(private activatedRoute:ActivatedRoute,
              private store:Store<State>) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((param:ParamMap) => {
      this.customerId = param.get('id');
    });

    // get data from NGRX Store
    this.store.pipe(select(customerReducer.customerFeatureKey)).subscribe((state) => {
       this.selectedCustomer = state.customers.find((customer) => {
         return customer.login.uuid === this.customerId;
       })
    });


  }

}
