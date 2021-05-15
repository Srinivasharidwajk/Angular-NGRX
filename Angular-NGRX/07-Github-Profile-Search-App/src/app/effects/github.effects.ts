import { Injectable } from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import {GithubService} from '../services/github.service';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';
import * as githubActions from '../components/actions/github.actions';

@Injectable()
export class GithubEffects {

  constructor(private actions$: Actions,
              private githubService:GithubService) {}

  @Effect()
  public getProfileData(){
    return this.actions$.pipe(
      ofType(githubActions.getProfileData),
      mergeMap((action) => this.githubService.getProfileData(action.githubUsername).
      pipe(
        map((profile) => githubActions.getProfileDataSuccess({profile})),
        catchError((error) => of(githubActions.getProfileDataFailure({error})))
      ))
    )
  }

  @Effect()
  public getReposData(){
    return this.actions$.pipe(
      ofType(githubActions.getReposData),
      mergeMap((action) => this.githubService.getReposData(action.githubUsername).
      pipe(
        map((repos) => githubActions.getReposDataSuccess({repos})),
        catchError((error) => of(githubActions.getReposDataFailure({error})))
      ))
    )
  }

}
