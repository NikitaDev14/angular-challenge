import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from 'src/app/containers/app/app.component';
import { ClockModule } from './modules/clock/clock.module';
import { ConnectionMonitorModule } from './modules/connection-monitor/connection-monitor.module';
import { StockModule } from './modules/stock/stock.module';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    ClockModule,
    ConnectionMonitorModule,
    StockModule,
    SharedModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
