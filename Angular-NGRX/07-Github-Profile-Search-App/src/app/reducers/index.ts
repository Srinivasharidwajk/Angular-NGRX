import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as githubReducer from '../components/reducers/github.reducer';

export interface State {
  [githubReducer.githubFeatureKey] : githubReducer.State
}

export const reducers: ActionReducerMap<State> = {
  [githubReducer.githubFeatureKey] : githubReducer.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
