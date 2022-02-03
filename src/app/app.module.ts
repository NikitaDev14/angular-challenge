import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { AppComponent } from 'src/app/containers/app/app.component';
import { ClockModule } from './modules/clock/clock.module';
import { ConnectionMonitorModule } from './modules/connection-monitor/connection-monitor.module';
import { StockModule } from './modules/stock/stock.module';
import { SharedModule } from './modules/shared/shared.module';
import { AccountModule } from './modules/account/account.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}, {
      // disabled until https://github.com/ngrx/platform/issues/2109 is resolved
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
      },
    }),
    provideFirebaseApp(() => initializeApp({
      apiKey: 'AIzaSyDCYopwXu1TdE1Cm2n1ZTSnj1iyFfHtlcA',
      authDomain: 'finnhub-a38ca.firebaseapp.com',
      projectId: 'finnhub-a38ca',
      databaseURL: 'https://finnhub-a38ca-default-rtdb.europe-west1.firebasedatabase.app',
      storageBucket: 'finnhub-a38ca.appspot.com',
      messagingSenderId: '106340694084',
      appId: '1:106340694084:web:b73bc6b5441960568fa411'
    })),
    provideFirestore(() => getFirestore()),
    EffectsModule.forRoot([]),
    ClockModule,
    ConnectionMonitorModule,
    StockModule,
    SharedModule,
    AccountModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
