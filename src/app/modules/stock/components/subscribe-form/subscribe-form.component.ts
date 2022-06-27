import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { first, map } from 'rxjs/operators';

import { StockSymbol } from '../../models/symbol.models';
import { TradeState } from '../../states/trade.state';
import { selectSymbols } from '../../selectors/symbol.selectors';

@Component({
  selector: 'app-subscribe-form',
  templateUrl: './subscribe-form.component.html',
  styleUrls: ['./subscribe-form.component.scss'],
})
export class SubscribeFormComponent {
  @Input() availableSymbols: ReadonlyArray<StockSymbol>;

  @Output() onSubmit = new EventEmitter<string>();

  subscribeForm = new FormGroup({
    ticker: new FormControl(
      '',
      [Validators.required],
      [this.tickerValidator()],
    ),
  });

  constructor(
    private store: Store<TradeState>,
  ) { }

  private tickerValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      if (!control.value) {
        return of({
          invalidTicker: true,
        });
      }

      return this.store.select(selectSymbols).pipe(
        map((symbols: ReadonlyArray<StockSymbol>) =>
          symbols.some((symbol: StockSymbol) => symbol.displaySymbol === control.value.toUpperCase()) ?
            null :
            {
              invalidTicker: true,
            },
        ),
        first(),
      );
    };
  }

  public submit() {
    this.onSubmit.emit(
      this.subscribeForm.value.ticker,
    );

    this.subscribeForm.get('ticker').reset('');
  }
}
