import { Component, OnInit } from '@angular/core';

import { SymbolSubscription } from '../../models/stock.models';
import { FinnhubService } from '../../services/finnhub.service';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-stock',
  templateUrl: './stock-container.component.html',
  styleUrls: ['./stock-container.component.scss']
})
export class StockContainer implements OnInit {

  trade$: Observable<object>;
  isConnected$: Observable<boolean>;

  constructor(
    private finnhubService: FinnhubService,
  ) { }

  ngOnInit(): void {
    this.trade$ = this.finnhubService.getSocket().pipe(
      filter((message: any) => message.data),
    );

    this.isConnected$ = this.finnhubService.isConnected$();

    this.finnhubService.send(new SymbolSubscription('NVDA'));
  }

}
