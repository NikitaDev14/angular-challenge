import { Injectable } from '@angular/core';
import { Serializable } from '../models/stock.models';
import { WebSocketSubject } from 'rxjs/internal-compatibility';

import { Constants } from '../constants';
import { Observable, Subject } from 'rxjs';
import { ConnectionStatusService } from '../../connection-monitor/connection-status.service';

@Injectable({
  providedIn: 'root'
})
export class FinnhubService {
  private webSocket$: WebSocketSubject<any>;
  private isConnectedSubject$: Subject<boolean> = new Subject();

  constructor(
    private connectionStatusService: ConnectionStatusService,
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

  public getSocket() {
    return this.webSocket$.asObservable();
  }
}
