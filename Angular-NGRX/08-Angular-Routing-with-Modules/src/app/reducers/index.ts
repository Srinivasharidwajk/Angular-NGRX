import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as customerReducer from '../customers/reducers/customer.reducer';
import * as stockReducer from '../stocks/reducers/stock.reducer';

export interface State {
  [customerReducer.customerFeatureKey] : customerReducer.State,
  [stockReducer.stockFeatureKey] : stockReducer.State
}

export const reducers: ActionReducerMap<State> = {
  [customerReducer.customerFeatureKey] : customerReducer.reducer,
  [stockReducer.stockFeatureKey] : stockReducer.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
