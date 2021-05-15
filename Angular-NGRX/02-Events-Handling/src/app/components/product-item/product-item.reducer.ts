import {createReducer, on} from '@ngrx/store';
import {decrQty, incrQty} from './product-item.actions';

export const productFeatureKey = 'productItem';

export interface State {
  product : {
    sno : string,
    image : string,
    name : string,
    qty : number,
    price : number
  }
}

let initialState:State = {
  product : {
    sno : 'AA102BC',
    image : 'https://images-na.ssl-images-amazon.com/images/I/61OUIIXnPqL._AC_SL1001_.jpg',
    name : 'Smart Watch',
    qty : 2,
    price : 500
  }
};


export const reducer = createReducer(initialState ,
  on(incrQty , (state) => {
    return {
      product : {
        ...state.product,
        qty : state.product.qty + 1
      }
    }
  }),
  on(decrQty, (state) => {
    return {
      product : {
        ...state.product,
        qty : (state.product.qty - 1 > 0) ? state.product.qty - 1 : 1
      }
    }
  }));
