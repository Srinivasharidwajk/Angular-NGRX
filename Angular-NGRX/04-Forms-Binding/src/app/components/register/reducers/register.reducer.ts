import { Action, createReducer, on } from '@ngrx/store';
import {User} from '../User';
import * as userActions from '../actions/register.actions';

export const registerFeatureKey = 'register';

export interface State {
  user : User
}

export const initialState: State = {
  user : {
    name : '',
    email : '',
    password : ''
  }
};


export const reducer = createReducer(
  initialState,
  on(userActions.registerUser, (state , {user}) => {
    return {
      user : {
        name : user.name,
        email : user.email,
        password : user.password
      }
    }
  })
);

