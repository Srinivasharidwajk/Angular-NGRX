import { createAction, props } from '@ngrx/store';
import {IStock} from '../models/IStock';

export const loadStocks = createAction(
  '[Stock] Load Stocks'
);

export const loadStocksSuccess = createAction(
  '[Stock] Load Stocks Success',
  props<{ stocks: IStock[] }>()
);

export const loadStocksFailure = createAction(
  '[Stock] Load Stocks Failure',
  props<{ error: string }>()
);
