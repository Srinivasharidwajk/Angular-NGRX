import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as registerReducer from '../components/register/reducers/register.reducer';

export interface State {
  [registerReducer.registerFeatureKey] : registerReducer.State
}

export const reducers: ActionReducerMap<State> = {
  [registerReducer.registerFeatureKey] : registerReducer.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
