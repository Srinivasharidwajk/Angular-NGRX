import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as productReducer from '../components/product-item/reducers/product-item.reducer';

export interface State {
  [productReducer.productItemFeatureKey] : productReducer.State
}

export const reducers: ActionReducerMap<State> = {
  [productReducer.productItemFeatureKey] : productReducer.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
