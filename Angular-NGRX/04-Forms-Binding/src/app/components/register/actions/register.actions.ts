import { createAction, props } from '@ngrx/store';
import {User} from '../User';

export const registerUser = createAction(
  '[Register] Register User',
  props<{ user: User }>()
);


