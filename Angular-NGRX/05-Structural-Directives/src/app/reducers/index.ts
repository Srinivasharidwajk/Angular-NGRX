import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as hobbyReducer from '../components/hobby-select/reducers/hobby.reducer';

export interface State {
  [hobbyReducer.hobbyFeatureKey] : hobbyReducer.State
}

export const reducers: ActionReducerMap<State> = {
  [hobbyReducer.hobbyFeatureKey] : hobbyReducer.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
