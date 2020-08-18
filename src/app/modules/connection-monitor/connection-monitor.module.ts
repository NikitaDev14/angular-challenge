import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnectionStatusService } from './connection-status.service';
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
  providers: [
    ConnectionStatusService,
  ],
})
export class ConnectionMonitorModule { }
