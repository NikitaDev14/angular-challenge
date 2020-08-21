import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinnhubService } from './services/finnhub.service';
import { StockContainer } from './containers/stock/stock-container.component';
import { MarketDataConnectionMonitorContainer }
from './containers/market-data-connection-monitor/market-data-connection-monitor-container.component';
import { ConnectionMonitorModule } from '../connection-monitor/connection-monitor.module';
import { WatchListComponent } from './containers/watch-list/watch-list.component';
import { WatchListItemComponent } from './components/watch-list-item/watch-list-item.component';
import { TradesOfPipe } from './pipes/trades-of.pipe';
import { GetPipe } from './pipes/get.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    StockContainer,
    MarketDataConnectionMonitorContainer,
    WatchListComponent,
    WatchListItemComponent,
    TradesOfPipe,
    GetPipe,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
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
