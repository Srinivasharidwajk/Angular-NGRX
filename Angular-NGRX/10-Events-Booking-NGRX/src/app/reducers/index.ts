import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as eventReducer from '../events/reducers/event.reducer';
import * as userReducer from '../users/reducers/user.reducer';

export interface State {
    [eventReducer.eventFeatureKey] : eventReducer.State,
    [userReducer.userFeatureKey] : userReducer.State
}

export const reducers: ActionReducerMap<State> = {
   [eventReducer.eventFeatureKey] : eventReducer.reducer,
   [userReducer.userFeatureKey] : userReducer.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
