import { Injectable } from '@angular/core';
import { Serializable, Trade } from '../models/stock.models';
import { WebSocketSubject } from 'rxjs/internal-compatibility';
import { Observable, Subject } from 'rxjs';
import { concatMap, filter, map, retry, startWith, switchMap } from 'rxjs/operators';
import * as moment from 'moment';

import { Constants } from '../constants';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FinnhubService {
  private webSocket$: WebSocketSubject<any>;
  private isConnectedSubject$: Subject<boolean> = new Subject();

  private subscriptions: string[];

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
      retry(5),
      filter((message: MessageEvent) => message.data),
      concatMap((message: MessageEvent) =>
        message.data.map((dataItem: any): Trade => ({
          symbol: dataItem.s,
          price: dataItem.p,
          date: dataItem.t,
          volume: dataItem.v,
        })) as Trade[],
      ),
    );
  }

  public getLastTrade(symbol: string): Observable<Trade> {
    return this.http$.get(
      `${Constants.finnhubHttpsURL}/stock/candle`,
      { params: new HttpParams({ fromObject: {
          symbol,
          resolution: 'W',
          from: moment().subtract(1, 'minutes').format('X').toString(),
          to: moment().format('X').toString(),
          token: Constants.finnhubToken as string,
        },
      })},
    ).pipe(
      map(({c, t, v}: {c: number[], t: number[], v: number[]}) => ({
        price: c[c.length - 1],
        symbol,
        volume: v[v.length - 1],
        date: new Date(t[t.length - 1] * 1000),
      })),
    );
  }
}
