import { createAction, props } from '@ngrx/store';
import {IEvent} from '../models/IEvent';

// Get All FREE Events
export const getFreeEvents = createAction(
  '[Event] GET FREE Events'
);

export const getFreeEventsSuccess = createAction(
  '[Event] GET FREE Events Success',
  props<{ events: IEvent[] }>()
);

export const getFreeEventsFailure = createAction(
  '[Event] GET FREE Events Failure',
  props<{ error: string }>()
);

// Get All Pro Events
export const getProEvents = createAction(
  '[Event] GET Pro Events'
);

export const getProEventsSuccess = createAction(
  '[Event] GET Pro Events Success',
  props<{ events: IEvent[] }>()
);

export const getProEventsFailure = createAction(
  '[Event] GET Pro Events Failure',
  props<{ error: string }>()
);

// Upload Event
export const uploadEvent = createAction(
  '[Event] Upload Event',
  props<{event : IEvent}>()
);

export const uploadEventSuccess = createAction(
  '[Event] Upload Event Success',
  props<{result : string}>()
);

export const uploadEventFailure = createAction(
  '[Event] Upload Event Failure',
  props<{ error: string }>()
);
