import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConnectionStatusService } from '../../connection-status.service';

@Component({
  selector: 'app-connection-monitor',
  templateUrl: './connection-monitor-container.component.html',
  styleUrls: ['./connection-monitor-container.component.scss']
})
export class ConnectionMonitorContainer implements OnInit {
  isOnline$: Observable<boolean>;

  constructor(
    private connectionStatusService: ConnectionStatusService,
  ) { }

  ngOnInit(): void {
    this.isOnline$ = this.connectionStatusService.onConnectionStatusChanged();
  }

}
