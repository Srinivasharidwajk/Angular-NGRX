import { createAction, props } from '@ngrx/store';
import {IProfile} from '../../models/IProfile';
import {IRepository} from '../../models/IRepository';

// for Profile Data
export const getProfileData = createAction(
  '[Github] Get Profile Data',
  props<{githubUsername : string}>()
);

export const getProfileDataSuccess = createAction(
  '[Github] getProfileData Success',
  props<{ profile: IProfile }>()
);

export const getProfileDataFailure = createAction(
  '[Github] getProfileData Failure',
  props<{ error: string }>()
);

// for Repos Data
export const getReposData = createAction(
  '[Github] Get Repos Data',
  props<{githubUsername : string}>()
);

export const getReposDataSuccess = createAction(
  '[Github] getReposData Success',
  props<{ repos: IRepository[] }>()
);

export const getReposDataFailure = createAction(
  '[Github] getReposData Failure',
  props<{ error: string }>()
);
