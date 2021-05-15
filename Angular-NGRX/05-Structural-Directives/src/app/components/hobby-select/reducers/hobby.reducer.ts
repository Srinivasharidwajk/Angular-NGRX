import { Action, createReducer, on } from '@ngrx/store';
import * as hobbyActions from '../actions/hobby.actions';

export const hobbyFeatureKey = 'hobby';

export interface State {
  eating : boolean,
  coding : boolean,
  sleeping : boolean
}

export const initialState: State = {
  eating : false,
  coding : false,
  sleeping : false
};


export const reducer = createReducer(
  initialState,
  on(hobbyActions.checkEating, (state) => {
    return {
      ...state,
      eating : !state.eating
    }
  }),
  on(hobbyActions.checkCoding, (state) => {
    return {
      ...state,
      coding : !state.coding
    }
  }),
  on(hobbyActions.checkSleeping, (state) => {
    return {
      ...state,
      sleeping : !state.sleeping
    }
  })
);

