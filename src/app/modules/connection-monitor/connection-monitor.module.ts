import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnectionMonitorContainer } from './containers/connection-monitor-container/connection-monitor-container.component';

@NgModule({
  declarations: [
    ConnectionMonitorContainer,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ConnectionMonitorContainer,
  ],
})
export class ConnectionMonitorModule { }
