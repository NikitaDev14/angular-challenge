import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinnhubService } from './services/finnhub.service';
import { StockContainer } from './containers/stock/stock-container.component';
import { MarketDataConnectionMonitorContainer }
from './containers/market-data-connection-monitor/market-data-connection-monitor-container.component';
import { ConnectionMonitorModule } from '../connection-monitor/connection-monitor.module';
import { WatchListComponent } from './containers/watch-list/watch-list.component';
import { WatchListItemComponent } from './components/watch-list-item/watch-list-item.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { stockReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { StockEffects } from './effects/stock.effects';

@NgModule({
  declarations: [
    StockContainer,
    MarketDataConnectionMonitorContainer,
    WatchListComponent,
    WatchListItemComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('stock', stockReducers),
    EffectsModule.forFeature([StockEffects]),
    ConnectionMonitorModule,
  ],
  exports: [
    StockContainer,
  ],
  providers: [
    FinnhubService,
  ],
})
export class StockModule { }
