import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { Trade, TradesMap } from '../../models/stock.models';
import { StockState } from '../../states/stock.state';
import { selectSubscriptions } from '../../selectors/stock.selectors';
import { SubscribeAction, UnsubscribeAction } from '../../actions/stock.actions';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list-container.component.html',
  styleUrls: ['./watch-list-container.component.scss']
})
export class WatchListContainer implements OnInit {
  subscriptions$: Observable<Trade[]>;

  constructor(
    private store: Store<StockState>,
  ) { }

  ngOnInit(): void {
    this.subscriptions$ = this.store.select(selectSubscriptions).pipe(
      map((subscriptions: TradesMap) => Object.values(subscriptions)),
    );

    this.store.dispatch(new SubscribeAction('SSL'));
    this.store.dispatch(new SubscribeAction('NTAP'));
    this.store.dispatch(new SubscribeAction('ZI'));
    this.store.dispatch(new SubscribeAction('TSLA'));
    this.store.dispatch(new SubscribeAction('NVDA'));
    this.store.dispatch(new SubscribeAction('WORK'));
    this.store.dispatch(new SubscribeAction('RKT'));
  }

  unsubscribe() {
    this.store.dispatch(new UnsubscribeAction());
  }
}
