import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { Trade, TradesMap } from '../../models/trade.models';
import { TradeState } from '../../states/trade.state';
import { selectSubscriptions } from '../../selectors/stock.selectors';
import { SubscribeAction, UnsubscribeAction } from '../../actions/trade.actions';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list-container.component.html',
  styleUrls: ['./watch-list-container.component.scss']
})
export class WatchListContainer implements OnInit {
  subscriptions$: Observable<Trade[]>;

  constructor(
    private store: Store<TradeState>,
  ) { }

  ngOnInit(): void {
    this.subscriptions$ = this.store.select(selectSubscriptions).pipe(
      map((subscriptions: TradesMap) => Object.values(subscriptions)),
    );

    this.store.dispatch(new SubscribeAction('SSL'));
    this.store.dispatch(new SubscribeAction('ETSY'));
    this.store.dispatch(new SubscribeAction('ZI'));
    this.store.dispatch(new SubscribeAction('TSLA'));
    this.store.dispatch(new SubscribeAction('NVDA'));
    this.store.dispatch(new SubscribeAction('WORK'));
    this.store.dispatch(new SubscribeAction('RKT'));
  }

  subscribe(ticker: string) {
    this.store.dispatch(new SubscribeAction(ticker));
  }

  unsubscribe() {
    this.store.dispatch(new UnsubscribeAction());
  }
}
