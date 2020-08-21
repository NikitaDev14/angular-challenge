import { Component, OnInit } from '@angular/core';
import { merge, Observable } from 'rxjs';
import { concatMap, mergeAll, shareReplay, startWith, withLatestFrom } from 'rxjs/operators';

import { FinnhubService } from '../../services/finnhub.service';
import { SymbolSubscription, Trade } from '../../models/stock.models';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.scss']
})
export class WatchListComponent implements OnInit {
  trade$: Observable<Trade>;
  lastPrice$: Observable<any>;

  subscriptions: string[];

  constructor(
    private finnhubService: FinnhubService,
  ) { }

  ngOnInit(): void {
    this.subscriptions = ['CLSN', 'SSL', 'STNG', 'NTAP', 'ZI', 'NVDA'];

    this.trade$ = merge(
      this.finnhubService.getSocket(),
      ...this.subscriptions.map((subscription: string) => this.finnhubService.getLastTrade(subscription)),
    ).pipe(
      shareReplay(1),
    );


    this.finnhubService.send(new SymbolSubscription('CLSN'));
    this.finnhubService.send(new SymbolSubscription('SSL'));
    this.finnhubService.send(new SymbolSubscription('STNG'));
    this.finnhubService.send(new SymbolSubscription('NTAP'));
    this.finnhubService.send(new SymbolSubscription('ZI'));
    this.finnhubService.send(new SymbolSubscription('NVDA'));
  }

}
