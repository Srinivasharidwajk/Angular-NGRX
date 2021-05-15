import { Action, createReducer, on } from '@ngrx/store';
import {IStock} from '../models/IStock';
import * as stockActions from '../actions/stock.actions';

export const stockFeatureKey = 'stock';

export interface State {
  loading : boolean,
  stocks : IStock[],
  errorMessage : string
}

export const initialState: State = {
  loading : false,
  stocks : [],
  errorMessage : ''
};


export const reducer = createReducer(
  initialState,
  on(stockActions.loadStocks, (state) => {
    return {
      ...state,
      loading : true
    }
  }),
  on(stockActions.loadStocksSuccess, (state, {stocks}) => {
    return {
      ...state,
      loading : false,
      stocks : stocks
    }
  }),
  on(stockActions.loadStocksFailure, (state, {error}) => {
    return {
      ...state,
      loading : false,
      errorMessage : error
    }
  }),
);

