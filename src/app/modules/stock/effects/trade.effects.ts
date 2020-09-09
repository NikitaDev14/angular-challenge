import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

import { FinnhubService } from '../services/finnhub.service';
import {
  CONNECT_TO_MARKET_ACTION, HttpErrorAction,
  SetLastTradeAction,
  SUBSCRIBE_ACTION,
  SubscribeAction,
  SubscribedAction, UNSUBSCRIBE_ACTION, UnsubscribedAction
} from '../actions/trade.actions';
import { SymbolSubscription, SymbolUnsubscription, Trade } from '../models/trade.models';
import { selectContextOfMenu } from '../../shared/selectors/context-menu.selectors';

@Injectable()
export class TradeEffects {

  @Effect()
  subscribe$ = this.actions$.pipe(
    ofType(SUBSCRIBE_ACTION),
    map((action: SubscribeAction) => action.payload),
    mergeMap((symbolToSubscribe: string) => {
      this.finnhubService.send(
        new SymbolSubscription(symbolToSubscribe),
      );

      return this.finnhubService.getLastTrade(symbolToSubscribe).pipe(
        mergeMap((lastTrade: Trade) => of(new SubscribedAction(lastTrade))),
        catchError((error: HttpErrorResponse) => of(new HttpErrorAction(error))),
      );
    }),
  );

  @Effect()
  connectToMarket$ = this.actions$.pipe(
    ofType(CONNECT_TO_MARKET_ACTION),
    switchMap(() =>
      this.finnhubService.getSocket().pipe(
        mergeMap((lastTrade: Trade) => of(new SetLastTradeAction(lastTrade))),
      ),
    ),
  );

  @Effect()
  unsubscribe$ = this.actions$.pipe(
    ofType(UNSUBSCRIBE_ACTION),
    withLatestFrom(this.store$.select(selectContextOfMenu)),
    switchMap(([action, symbolToUnsubscribe]: [never, string]) => {
      this.finnhubService.send(
        new SymbolUnsubscription(symbolToUnsubscribe),
      );

      return of(new UnsubscribedAction(symbolToUnsubscribe));
    }),
  );

  constructor(
    private actions$: Actions,
    private store$: Store<{}>,
    private finnhubService: FinnhubService,
  ) {
  }
}
