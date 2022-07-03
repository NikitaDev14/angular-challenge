import { ChangeDetectionStrategy, Component, forwardRef, Input, OnInit } from '@angular/core';
import { combineLatest, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { StockSymbol } from '../../models/symbol.models';

@Component({
  selector: 'app-ticker-input',
  templateUrl: './ticker-input.component.html',
  styleUrls: ['./ticker-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TickerInputComponent),
    multi: true,
  }],
})
export class TickerInputComponent implements OnInit, ControlValueAccessor {
  @Input() symbols: ReadonlyArray<StockSymbol>;

  focusSubject$ = new Subject<boolean>();
  inputSubject$ = new Subject<string>();

  input$: Observable<string>;
  showAutocomplete$: Observable<boolean>;

  inputValue: string;

  ngOnInit(): void {
    this.input$ = this.inputSubject$.asObservable();

    this.showAutocomplete$ = combineLatest([
      this.focusSubject$.asObservable(),
      this.input$,
    ]).pipe(
      map(([isFocus, inputValue]: [boolean, string]) =>
        isFocus && inputValue.length > 0,
      ),
    );
  }

  onFocusOut($event: FocusEvent) {
    $event.relatedTarget === null && this.focusSubject$.next(false);
  }

  onSelectTicker(stockSymbol: StockSymbol) {
    if (!stockSymbol) {
      return;
    }

    this.onChange(stockSymbol.displaySymbol);
    this.focusSubject$.next(false);
  }

  onChange = (value: string) => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void { }

  writeValue(value: string): void {
    this.inputSubject$.next(value);
  }
}
