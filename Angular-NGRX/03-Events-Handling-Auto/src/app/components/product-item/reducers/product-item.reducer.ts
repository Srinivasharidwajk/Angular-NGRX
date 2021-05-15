import { Action, createReducer, on } from '@ngrx/store';
import {decrQty, incrQty} from '../actions/product-item.actions';


export const productItemFeatureKey = 'productItem';

export interface State {
    sno : string,
    image : string,
    name : string,
    price : number,
    qty : number
}

export const initialState: State = {
  sno : 'AA102BC',
  image : 'https://images-na.ssl-images-amazon.com/images/I/61OUIIXnPqL._AC_SL1001_.jpg',
  name : 'Smart Watch',
  qty : 2,
  price : 500
};


export const reducer = createReducer(
  initialState,
  on(incrQty , (state) => {
    return {
        ...state,
        qty : state.qty + 1
    }
  }),
  on(decrQty, (state) => {
    return {
      ...state,
      qty : (state.qty - 1 > 0) ? state.qty - 1 : 1
    }
  })
);

