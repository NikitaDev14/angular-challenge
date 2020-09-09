import { Component, OnInit } from '@angular/core';

import { ConnectToMarketAction } from '../../actions/trade.actions';
import { Store } from '@ngrx/store';
import { TradeState } from '../../states/trade.state';

@Component({
  selector: 'app-stock',
  templateUrl: './stock-container.component.html',
  styleUrls: ['./stock-container.component.scss']
})
export class StockContainer implements OnInit {
  constructor(
    private store: Store<TradeState>,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new ConnectToMarketAction());
  }

}
