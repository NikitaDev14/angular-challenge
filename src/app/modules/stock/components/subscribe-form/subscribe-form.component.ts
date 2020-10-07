import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { combineLatest, Observable, of, Subject } from 'rxjs';
import { debounceTime, first, map, shareReplay } from 'rxjs/operators';

import { StockSymbol } from '../../models/symbol.models';
import { TradeState } from '../../states/trade.state';
import { selectSymbols } from '../../selectors/symbol.selectors';

@Component({
  selector: 'app-subscribe-form',
  templateUrl: './subscribe-form.component.html',
  styleUrls: ['./subscribe-form.component.scss'],
})
export class SubscribeFormComponent implements OnInit {
  @Input() availableSymbols: StockSymbol[];

  @Output() onSubmit = new EventEmitter<StockSymbol>();

  onFocus$ = new Subject<boolean>();
  onInput$: Observable<string>;

  showAutocomplete$: Observable<boolean>;

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

  ngOnInit() {
    this.onInput$ = this.subscribeForm.get('ticker').valueChanges.pipe(
      shareReplay(1),
    );

    this.showAutocomplete$ = combineLatest([
      this.onFocus$.pipe(
        debounceTime(200),
      ),
      this.onInput$,
    ]).pipe(
      map(([isFocus, inputValue]: [boolean, string]) =>
        isFocus && inputValue.length > 0,
      ),
    );
  }

  private tickerValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      if (!control.value) {
        return of({
          invalidTicker: true,
        });
      }

      return this.store.select(selectSymbols).pipe(
        map((symbols: StockSymbol[]) =>
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

  public onSelectTicker(stockSymbol: StockSymbol) {
    if (!stockSymbol) {
      return;
    }

    this.subscribeForm.get('ticker').setValue(stockSymbol.displaySymbol);
    this.onFocus$.next(false);
  }

  public submit() {
    this.onSubmit.emit(
      this.subscribeForm.value.ticker,
    );
  }
}
