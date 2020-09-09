import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { StockSymbol } from '../../models/symbol.models';

@Component({
  selector: 'app-subscribe-form',
  templateUrl: './subscribe-form.component.html',
  styleUrls: ['./subscribe-form.component.scss']
})
export class SubscribeFormComponent {
  @Input() availableSymbols: StockSymbol[];

  @Output() onSubmit = new EventEmitter<string>();

  search: string;

  subscribeForm = new FormGroup({
    ticker: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(4),
    ]),
  });

  public submit() {
    this.onSubmit.emit(
      this.subscribeForm.value.ticker,
    );
  }
}
