import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from '@angular/forms';

import { StockContainer } from './containers/stock/stock-container.component';
import { MarketDataConnectionMonitorContainer }
from './containers/market-data-connection-monitor/market-data-connection-monitor-container.component';
import { ConnectionMonitorModule } from '../connection-monitor/connection-monitor.module';
import { WatchListContainer } from './containers/watch-list-container/watch-list-container.component';
import { stockReducers } from './reducers';
import { StockEffects } from './effects/stock.effects';
import { WatchListComponent } from './components/watch-list/watch-list.component';
import { SubscribeFormComponent } from './components/subscribe-form/subscribe-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    StockContainer,
    MarketDataConnectionMonitorContainer,
    WatchListContainer,
    WatchListComponent,
    SubscribeFormComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forFeature('stock', stockReducers),
    EffectsModule.forFeature([StockEffects]),
    ConnectionMonitorModule,
    SharedModule,
  ],
  exports: [
    StockContainer,
  ],
})
export class StockModule { }
