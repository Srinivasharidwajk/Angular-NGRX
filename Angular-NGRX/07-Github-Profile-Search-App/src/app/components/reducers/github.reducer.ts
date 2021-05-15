import { Action, createReducer, on } from '@ngrx/store';
import {IProfile} from '../../models/IProfile';
import {IRepository} from '../../models/IRepository';
import * as githubActions from '../actions/github.actions';

export const githubFeatureKey = 'github';

export interface State {
   loading:boolean,
   errorMessage:string,
   githubUsername:string,
   githubProfile:IProfile,
   githubRepos:IRepository[]
}

export const initialState: State = {
  loading:false,
  errorMessage:'',
  githubUsername:'',
  githubProfile: null,
  githubRepos:[]
};

export const reducer = createReducer(
  initialState,
  // for github profile data
  on(githubActions.getProfileData, (state , {githubUsername}) => {
    return {
      ...state,
      loading : true,
      githubUsername : githubUsername
    }
  }),
  on(githubActions.getProfileDataSuccess, (state , {profile}) => {
    return {
      ...state,
      loading : false,
      githubProfile : profile
    }
  }),
  on(githubActions.getProfileDataFailure, (state , {error}) => {
    return {
      ...state,
      loading : false,
      errorMessage : error
    }
  }),
  // for github repos data
  on(githubActions.getReposData, (state , {githubUsername}) => {
    return {
      ...state,
      loading : true,
      githubUsername : githubUsername
    }
  }),
  on(githubActions.getReposDataSuccess, (state , {repos}) => {
    return {
      ...state,
      loading : false,
      githubRepos : repos
    }
  }),
  on(githubActions.getReposDataFailure, (state , {error}) => {
    return {
      ...state,
      loading : false,
      errorMessage : error
    }
  })
);

