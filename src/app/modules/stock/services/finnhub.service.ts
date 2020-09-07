import { Injectable } from '@angular/core';
import { WebSocketSubject } from 'rxjs/internal-compatibility';
import { Observable, Subject, throwError } from 'rxjs';
import { concatMap, filter, map, retry, tap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { MessageTypes, Serializable, Trade } from '../models/stock.models';
import { Constants } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class FinnhubService {
  private webSocket$: WebSocketSubject<any>;
  private isConnectedSubject$: Subject<boolean> = new Subject();

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
      filter((message: MessageEvent) => message.data),
      concatMap((message: MessageEvent) =>
        message.data.map((dataItem: any): Trade => ({
          symbol: dataItem.s,
          currentPrice: dataItem.p,
          date: dataItem.t,
          volume: dataItem.v,
        })) as Trade[],
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
}
