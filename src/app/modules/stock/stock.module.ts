import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { StockContainer } from './containers/stock/stock-container.component';
import { MarketDataConnectionMonitorContainer }
from './containers/market-data-connection-monitor/market-data-connection-monitor-container.component';
import { ConnectionMonitorModule } from '../connection-monitor/connection-monitor.module';
import { WatchListContainer } from './containers/watch-list-container/watch-list-container.component';
import { stockReducers } from './reducers';
import { StockEffects } from './effects/stock.effects';
import { WatchListComponent } from './components/watch-list/watch-list.component';
import { ContextMenuModule } from '../context-menu/context-menu.module';

@NgModule({
  declarations: [
    StockContainer,
    MarketDataConnectionMonitorContainer,
    WatchListContainer,
    WatchListComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('stock', stockReducers),
    EffectsModule.forFeature([StockEffects]),
    ConnectionMonitorModule,
    ContextMenuModule,
  ],
  exports: [
    StockContainer,
  ],
})
export class StockModule { }
