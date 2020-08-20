import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinnhubService } from './services/finnhub.service';
import { StockContainer } from './containers/stock/stock-container.component';
import { MarketDataConnectionMonitorContainer }
from './containers/market-data-connection-monitor/market-data-connection-monitor-container.component';
import { ConnectionMonitorModule } from '../connection-monitor/connection-monitor.module';

@NgModule({
  declarations: [
    StockContainer,
    MarketDataConnectionMonitorContainer,
  ],
  imports: [
    CommonModule,
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
