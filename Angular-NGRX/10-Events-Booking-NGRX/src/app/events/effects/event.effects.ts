import { Injectable } from '@angular/core';
import { Actions, createEffect , Effect , ofType} from '@ngrx/effects';
import * as eventActions from '../actions/event.actions';
import {EventService} from '../services/event.service';
import {catchError, concatMap, map, mergeMap, tap} from 'rxjs/operators';
import {of} from 'rxjs';
import {IEvent} from '../models/IEvent';
import {Router} from '@angular/router';

@Injectable()
export class EventEffects {

  constructor(private actions$: Actions,
              private eventService:EventService,
              private router:Router) {}

  @Effect()
  public getFreeEvents(){
    return this.actions$.pipe(
      ofType(eventActions.getFreeEvents),
      mergeMap((action) => this.eventService.getFreeEvents().pipe(
        map((events) => eventActions.getFreeEventsSuccess({events}),
          catchError((error) => of(eventActions.getFreeEventsFailure({error}))))
      ))
    )
  }

  @Effect()
  public getProEvents(){
    return this.actions$.pipe(
      ofType(eventActions.getProEvents),
      mergeMap((action) => this.eventService.getProEvents().pipe(
        map((events) => eventActions.getProEventsSuccess({events}),
          catchError((error) => of(eventActions.getProEventsFailure({error}))))
      ))
    )
  }

  @Effect()
  public uploadEvent(){
    return this.actions$.pipe(
      ofType(eventActions.uploadEvent),
      concatMap((action) => this.eventService.uploadEvent(action.event).pipe(
        map((result) => eventActions.uploadEventSuccess(result),
          catchError((error) => of(eventActions.uploadEventFailure({error}))))
      ))
    )
  }

// Upload Event Success redirect to 'Home page'
  @Effect({ dispatch: false })
  uploadEventSuccess$ = this.actions$.pipe(
    ofType(eventActions.uploadEventSuccess),
    tap(() => this.router.navigate(['/']))
  );



}
