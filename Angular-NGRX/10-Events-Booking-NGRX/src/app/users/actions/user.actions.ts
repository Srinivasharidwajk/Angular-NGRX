import { createAction, props } from '@ngrx/store';
import {IUser} from '../models/IUser';

// Register a User
export const registerUser = createAction(
  '[User] register User',
  props<{user : IUser}>()
);

export const registerUserSuccess = createAction(
  '[User] register User Success',
  props<{result : string , user : IUser}>()
);

export const registerUserFailure = createAction(
  '[User]  register User Failure',
  props<{ error: string }>()
);

// Login a User
export const loginUser = createAction(
  '[User] login User',
  props<{user : IUser}>()
);

export const loginUserSuccess = createAction(
  '[User] login User Success',
  props<{result : string , token : string , user : IUser}>()
);

export const loginUserFailure = createAction(
  '[User]  login User Failure',
  props<{ error: string }>()
);

// Logout a User
export const logOut = createAction(
  '[User] logOut'
);
