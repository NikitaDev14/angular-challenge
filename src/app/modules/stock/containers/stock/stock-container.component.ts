import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FinnhubService } from '../../services/finnhub.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock-container.component.html',
  styleUrls: ['./stock-container.component.scss']
})
export class StockContainer implements OnInit {

  isConnected$: Observable<boolean>;

  constructor(
    private finnhubService: FinnhubService,
  ) { }

  ngOnInit(): void {
    this.isConnected$ = this.finnhubService.isConnected$();
  }

}
