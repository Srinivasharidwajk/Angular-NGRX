import { Action, createReducer, on } from '@ngrx/store';
import {IEvent} from '../models/IEvent';
import * as eventActions from '../actions/event.actions';

export const eventFeatureKey = 'event';

export interface State {
  loading:boolean,
  events:IEvent[],
  errorMessage:string
}

export const initialState: State = {
  loading:false,
  events:[],
  errorMessage:''
};

export const reducer = createReducer(
  initialState,
  // GET Free Events
  on(eventActions.getFreeEvents, (state) => {
    return {
      ...state,
      loading : true
    }
  }),
  on(eventActions.getFreeEventsSuccess, (state , {events}) => {
    return {
      ...state,
      loading : false,
      events : events
    }
  }),
  on(eventActions.getFreeEventsFailure, (state , {error}) => {
    return {
      ...state,
      loading : false,
      errorMessage : error
    }
  }),
  // GET PRO Events
  on(eventActions.getProEvents, (state) => {
    return {
      ...state,
      loading : true
    };
  }),
  on(eventActions.getProEventsSuccess, (state, {events}) => {
    return {
      ...state,
      loading : false,
      events : events
    };
  }),
  on(eventActions.getFreeEventsFailure, (state, {error}) => {
    return {
      ...state,
      loading : false,
      errorMessage : error
    };
  }),
  // Upload Events
  on(eventActions.uploadEvent, (state , {event}) => {
    return {
      ...state,
      loading : true
    }
  }),
  on(eventActions.uploadEventSuccess, (state , {result}) => {
    return {
      ...state,
      loading : false
    }
  }),
  on(eventActions.uploadEventFailure, (state , {error}) => {
    return {
      ...state,
      loading : false,
      errorMessage : error
    }
  })
);

