import { Injectable } from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import {StockService} from '../services/stock.service';
import * as customerActions from '../../customers/actions/customer.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';
import * as stockActions from '../actions/stock.actions';

@Injectable()
export class StockEffects {

  constructor(private actions$: Actions,
              private stockService : StockService) {}

  @Effect()
  public loadStocks(){
    return this.actions$.pipe(
      ofType(stockActions.loadStocks),
      mergeMap((action) => this.stockService.loadStocks().
      pipe(
        map((stocks) => stockActions.loadStocksSuccess({stocks})),
        catchError((error) => of(stockActions.loadStocksFailure({error})))
      ))
    )
  }

}
