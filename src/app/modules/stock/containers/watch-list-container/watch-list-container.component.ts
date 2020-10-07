import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { Trade, TradesMap } from '../../models/trade.models';
import { TradeState } from '../../states/trade.state';
import { selectSubscriptions } from '../../selectors/trade.selectors';
import { SubscribeAction, UnsubscribeAction } from '../../actions/trade.actions';
import { LoadAction } from '../../actions/symbol.actions';
import { StockSymbol } from '../../models/symbol.models';
import { selectSymbols } from '../../selectors/symbol.selectors';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list-container.component.html',
  styleUrls: ['./watch-list-container.component.scss']
})
export class WatchListContainer implements OnInit {
  subscriptions$: Observable<Trade[]>;
  symbols$: Observable<StockSymbol[]>;

  constructor(
    private store: Store<TradeState>,
  ) { }

  ngOnInit(): void {
    this.subscriptions$ = this.store.select(selectSubscriptions).pipe(
      map((subscriptions: TradesMap) => Object.values(subscriptions)),
    );

    this.store.dispatch(new LoadAction());

    this.symbols$ = this.store.select(selectSymbols);

    this.store.dispatch(new SubscribeAction('AAPL'));
  }

  subscribe(ticker: string) {
    this.store.dispatch(new SubscribeAction(ticker));
  }

  unsubscribe() {
    this.store.dispatch(new UnsubscribeAction());
  }
}
