import { Action, createReducer, on } from '@ngrx/store';
import {IUser} from '../models/IUser';
import * as userActions from '../actions/user.actions';

export const userFeatureKey = 'user';

export interface State {
  loading : boolean,
  user : IUser,
  isAuthenticated : boolean,
  token : string,
  errorMessage: string,
}

export const initialState: State = {
  loading : false,
  user : null,
  isAuthenticated : false,
  token : '',
  errorMessage: '',
};


export const reducer = createReducer(
  initialState,
  // Register User
  on(userActions.registerUser, (state , {user}) => {
    return {
      ...state,
      loading : true
    }
  }),
  on(userActions.registerUserSuccess, (state , {result ,user}) => {
    return {
      ...state,
      loading : false
    }
  }),
  on(userActions.registerUserFailure, (state , {error}) => {
    return {
      ...state,
      loading : false,
      errorMessage : error
    }
  }),
  // Login User
  on(userActions.loginUser, (state , {user}) => {
    return {
      ...state,
      loading : true
    }
  }),
  on(userActions.loginUserSuccess, (state , {result , token , user}) => {
    // store the token in local storage
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    return {
      ...state,
      loading : false,
      token : token,
      user : user,
      isAuthenticated : true
    }
  }),
  on(userActions.loginUserFailure, (state , {error}) => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return {
      ...state,
      loading : false,
      errorMessage : error
    }
  }),
  // for logout a user
  on(userActions.logOut, (state) => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
      return {
        ...state,
        loading :false,
        token : '',
        user : null,
        isAuthenticated : false
      }
  })
);

