import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StockContainer } from './containers/stock/stock-container.component';
import { MarketDataConnectionMonitorContainer }
from './containers/market-data-connection-monitor/market-data-connection-monitor-container.component';
import { ConnectionMonitorModule } from '../connection-monitor/connection-monitor.module';
import { WatchListContainer } from './containers/watch-list-container/watch-list-container.component';
import { stockReducers } from './reducers';
import { TradeEffects } from './effects/trade.effects';
import { WatchListComponent } from './components/watch-list/watch-list.component';
import { SubscribeFormComponent } from './components/subscribe-form/subscribe-form.component';
import { SharedModule } from '../shared/shared.module';
import { SymbolEffects } from './effects/symbol.effects';
import { TickerInputComponent } from './components/ticker-input/ticker-input.component';
import { stockFeatureKey } from './states';

@NgModule({
  declarations: [
    StockContainer,
    MarketDataConnectionMonitorContainer,
    WatchListContainer,
    WatchListComponent,
    SubscribeFormComponent,
    TickerInputComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forFeature(stockFeatureKey, stockReducers),
    EffectsModule.forFeature([TradeEffects, SymbolEffects]),
    ConnectionMonitorModule,
    SharedModule,
    FormsModule,
  ],
  exports: [
    StockContainer,
  ],
})
export class StockModule { }
