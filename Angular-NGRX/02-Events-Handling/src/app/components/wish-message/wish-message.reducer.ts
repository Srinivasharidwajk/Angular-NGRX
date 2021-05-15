import {createReducer, on} from '@ngrx/store';
import {sayGoodAfternoon, sayGoodEvening, sayGoodMorning} from './wish-message.actions';

export const messageFeatureKey = 'wishMessage';

export interface State {
  message : string
}

let initialState:State = {
    message : 'Hello'
};

export const wishMessageReducer = createReducer(initialState ,
  on(sayGoodMorning, (state) => {
    return {
      message : 'Good Morning'
    }
  }),
  on(sayGoodAfternoon, (state) => {
    return {
      message : 'Good Afternoon'
    }
  }),
  on(sayGoodEvening, (state) => {
    return {
      message : 'Good Evening'
    }
  }));
