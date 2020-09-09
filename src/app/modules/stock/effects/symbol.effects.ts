import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { FinnhubService } from '../services/finnhub.service';
import { LOAD_ACTION, LoadedAction } from '../actions/symbol.actions';
import { StockSymbol } from '../models/symbol.models';

@Injectable()
export class SymbolEffects {

  @Effect()
  load$ = this.actions$.pipe(
    ofType(LOAD_ACTION),
    switchMap(() =>
      this.finnhubService.getSymbols().pipe(
        mergeMap((symbols: StockSymbol[]) =>
          of(new LoadedAction(symbols)),
        ),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private finnhubService: FinnhubService,
  ) {
  }
}
