import { Component, OnInit } from '@angular/core';

import { ConnectToMarketAction } from '../../actions/stock.actions';
import { Store } from '@ngrx/store';
import { StockState } from '../../states/stock.state';

@Component({
  selector: 'app-stock',
  templateUrl: './stock-container.component.html',
  styleUrls: ['./stock-container.component.scss']
})
export class StockContainer implements OnInit {
  constructor(
    private store: Store<StockState>,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new ConnectToMarketAction());
  }

}
