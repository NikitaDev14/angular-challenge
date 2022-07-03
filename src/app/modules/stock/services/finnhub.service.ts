import { Injectable } from '@angular/core';
import { WebSocketSubject } from "rxjs/webSocket";
import { Observable, of, Subject, throwError } from 'rxjs';
import { concatMap, filter, map, mergeMap, retry, toArray } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { MessageTypes, Serializable, Trade } from '../models/trade.models';
import { Constants } from '../constants.example';
import { StockSymbol } from '../models/symbol.models';

@Injectable({
  providedIn: 'root'
})
export class FinnhubService {
  private readonly webSocket$: WebSocketSubject<any>;
  private readonly isConnectedSubject$: Subject<boolean> = new Subject();

  constructor(
    private http$: HttpClient,
  ) {
    this.webSocket$ = new WebSocketSubject({
      url: `${Constants.finnhubSocketURL}?token=${Constants.finnhubToken}`,

      serializer: (message: Serializable): string =>
        message.serialize(),

      openObserver: {
        next: () => {
          this.isConnectedSubject$.next(true);
        },
      },
      closeObserver: {
        next: () => {
          this.isConnectedSubject$.next(false);
        },
      },
    });
  }

  public isConnected$(): Observable<boolean> {
    return this.isConnectedSubject$.asObservable();
  }

  public send(message: Serializable) {
    this.webSocket$.next(message);
  }

  public getSocket(): Observable<Trade> {
    return this.webSocket$.pipe(
      retry(Constants.finnhubReconectionAttempts),
      filter((message: any) => message.data),
      concatMap(({p, s, t, v}: {p: number, s: string, t: number, v: number}) =>
        of({
          symbol: s,
          currentPrice: p,
          date: new Date(t),
          volume: v,
        }),
      ),
    );
  }

  public getLastTrade(symbol: string): Observable<Trade> {
    return this.http$.get(
      `${Constants.finnhubHttpsURL}/quote`,
      { params: new HttpParams({ fromObject: {
          symbol,
          token: Constants.finnhubToken as string,
        },
      })},
    ).pipe(
      map((response: any) => response),
      map(({c, pc, t}: {c: number, pc: number, t: number}) => {
        if (!c) {
          throwError(new HttpErrorResponse({
            status: 400,
            error: MessageTypes.WRONG_TICKER,
          }));
        }

        return {
          currentPrice: c,
          previousClosePrice: pc,
          symbol,
          volume: 0,
          date: new Date(t * 1000),
        };
      }),
    );
  }

  public getSymbols(): Observable<StockSymbol[]> {
    return this.http$.get(
      `${Constants.finnhubHttpsURL}/stock/symbol`,
      {
        params: new HttpParams({
          fromObject: {
            exchange: 'US',
            token: Constants.finnhubToken as string,
          },
        }),
      },
    ).pipe(
      map((response: any) => response),
      mergeMap((response: any[]) => response),
      concatMap(({description, displaySymbol, type}: { description: string, displaySymbol: string, type: string }) =>
        of({
          description,
          displaySymbol,
          type,
        }),
      ),
      toArray(),
    );
  }
}
