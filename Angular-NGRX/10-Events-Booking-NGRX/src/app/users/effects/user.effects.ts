import { Injectable } from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import {catchError, concatMap, map, tap} from 'rxjs/operators';
import {of} from 'rxjs';
import * as userActions from '../actions/user.actions';
import * as eventActions from '../../events/actions/event.actions';

@Injectable()
export class UserEffects {

  constructor(private actions$: Actions,
              private userService:UserService,
              private router:Router) {}

  @Effect()
  public registerUser(){
    return this.actions$.pipe(
      ofType(userActions.registerUser),
      concatMap((action) => this.userService.register(action.user).pipe(
        map(({result , user}) => userActions.registerUserSuccess({result , user}),
          catchError((error) => of(userActions.registerUserFailure({error}))))
      ))
    )
  }

  @Effect()
  public loginUser(){
    return this.actions$.pipe(
      ofType(userActions.loginUser),
      concatMap((action) => this.userService.login(action.user).pipe(
        map(({result , token , user}) => userActions.loginUserSuccess({result , token , user}),
          catchError((error) => of(userActions.loginUserFailure({error}))))
      ))
    )
  }

  // Registration is Success redirect to 'Login page'
  @Effect({ dispatch: false })
  registerUserSuccess$ = this.actions$.pipe(
    ofType(userActions.registerUserSuccess),
    tap(() => this.router.navigate(['/users/login']))
  );

  // Login is Success redirect to 'Login page'
  @Effect({ dispatch: false })
  loginUserSuccess$ = this.actions$.pipe(
    ofType(userActions.loginUserSuccess),
    tap(() => this.router.navigate(['/events/pro-events']))
  );

}
