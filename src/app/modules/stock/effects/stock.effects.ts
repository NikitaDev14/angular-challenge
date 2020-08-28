import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { FinnhubService } from '../services/finnhub.service';
import {
  CONNECT_TO_MARKET_ACTION,
  SetLastTradeAction,
  SUBSCRIBE_ACTION,
  SubscribeAction,
  SubscribedAction
} from '../actions/stock.actions';
import { SymbolSubscription, Trade } from '../models/stock.models';

@Injectable()
export class StockEffects {

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

  constructor(
    private actions$: Actions,
    private finnhubService: FinnhubService,
  ) {
  }
}
