import { Action, createReducer, on } from '@ngrx/store';
import {ICustomer} from '../models/ICustomer';
import * as customerActions from '../actions/customer.actions';

export const customerFeatureKey = 'customer';

export interface State {
  loading : boolean,
  customers : ICustomer[],
  errorMessage : string
}

export const initialState: State = {
  loading : false,
  customers : [],
  errorMessage : ''
};

export const reducer = createReducer(
  initialState,
  on(customerActions.loadCustomers, (state) => {
    return {
      ...state,
      loading : true
    }
  }),
  on(customerActions.loadCustomersSuccess, (state, {customers}) => {
    return {
      ...state,
      loading : false,
      customers : customers
    }
  }),
  on(customerActions.loadCustomersFailure, (state, {error}) => {
    return {
      ...state,
      loading : false,
      errorMessage : error
    }
  }),
);

