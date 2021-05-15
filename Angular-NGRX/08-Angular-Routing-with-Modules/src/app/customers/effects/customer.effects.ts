import { Injectable } from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import {CustomerService} from '../services/customer.service';
import * as customerActions from '../actions/customer.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class CustomerEffects {

  constructor(private actions$: Actions,
              private customerService:CustomerService) {}

 /* @Effect()
  public loadCustomers(){
    return this.actions$.pipe(
      ofType(customerActions.loadCustomers),
      mergeMap(() => this.customerService.loadCustomers().pipe(
        map((customers) => customerActions.loadCustomersSuccess({customers : customers})),
        catchError((error) => of(customerActions.loadCustomersFailure({error : error})))
      ))
    )
  }*/

  @Effect()
  public loadCustomers(){
    return this.actions$.pipe(
      ofType(customerActions.loadCustomers),
      mergeMap((action) => this.customerService.loadCustomers().
      pipe(
        map((customers) => customerActions.loadCustomersSuccess({customers})),
        catchError((error) => of(customerActions.loadCustomersFailure({error})))
      ))
    )
  }

}
