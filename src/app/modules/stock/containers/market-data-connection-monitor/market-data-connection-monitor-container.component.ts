import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FinnhubService } from '../../services/finnhub.service';

@Component({
  selector: 'app-market-data-connection-monitor',
  templateUrl: './market-data-connection-monitor-container.component.html',
  styleUrls: ['./market-data-connection-monitor-container.component.scss']
})
export class MarketDataConnectionMonitorContainer implements OnInit {

  isConnected$: Observable<boolean>;

  constructor(
    private finnhubService: FinnhubService,
  ) { }

  ngOnInit(): void {
    this.isConnected$ = this.finnhubService.isConnected$();
  }

}
