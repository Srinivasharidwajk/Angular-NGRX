import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as customerReducer from '../components/customers/reducers/customer.reducer';

export interface State {
  [customerReducer.customerFeatureKey] : customerReducer.State
}

export const reducers: ActionReducerMap<State> = {
  [customerReducer.customerFeatureKey] : customerReducer.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
