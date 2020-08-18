import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from 'src/app/containers/app/app.component';
import { ClockModule } from './modules/clock/clock.module';
import { ConnectionMonitorModule } from './modules/connection-monitor/connection-monitor.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    ClockModule,
    ConnectionMonitorModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
