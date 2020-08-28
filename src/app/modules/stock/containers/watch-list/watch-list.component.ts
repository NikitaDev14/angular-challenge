import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { FinnhubService } from '../../services/finnhub.service';
import { Trade, TradesMap } from '../../models/stock.models';
import { StockState } from '../../states/stock.state';
import { selectSubscriptions } from '../../selectors/stock.selectors';
import { SubscribeAction } from '../../actions/stock.actions';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.scss']
})
export class WatchListComponent implements OnInit {
  subscriptions$: Observable<Trade[]>;

  constructor(
    private finnhubService: FinnhubService,
    private store: Store<StockState>,
  ) { }

  ngOnInit(): void {
    this.subscriptions$ = this.store.select(selectSubscriptions).pipe(
      map((subscriptions: TradesMap) => Object.values(subscriptions)),
    );

    this.store.dispatch(new SubscribeAction('CLSN'));
    this.store.dispatch(new SubscribeAction('SSL'));
    this.store.dispatch(new SubscribeAction('STNG'));
    this.store.dispatch(new SubscribeAction('NTAP'));
    this.store.dispatch(new SubscribeAction('ZI'));
    this.store.dispatch(new SubscribeAction('NVDA'));
    this.store.dispatch(new SubscribeAction('AAPL'));
    this.store.dispatch(new SubscribeAction('TSLA'));
  }

  public trackFn(index: number, item: Trade): string {
    return item.symbol;
  }

}
