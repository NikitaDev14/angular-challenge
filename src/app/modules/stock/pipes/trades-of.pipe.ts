import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { Trade } from '../models/stock.models';

@Pipe({
  name: 'tradesOf'
})
export class TradesOfPipe implements PipeTransform {

  transform(value: Observable<Trade>, filterBySymbol: string): Observable<Trade> {
    return value.pipe(
      filter((trade: Trade) => trade.symbol === filterBySymbol),
    );
  }

}
