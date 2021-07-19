import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockSettingsComponent } from './components/clock-settings/clock-settings.component';
import { ClockComponent } from './components/clock/clock.component';
import { ClockContainer } from './containers/clock-container/clock-container.component';
import { StoreModule } from '@ngrx/store';
import { clockReducers } from './reducers';
import { clockFeatureKey } from './states';

@NgModule({
  declarations: [
    ClockSettingsComponent,
    ClockComponent,
    ClockContainer,
  ],
  exports: [
    ClockContainer,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(clockFeatureKey, clockReducers),
  ]
})
export class ClockModule { }
