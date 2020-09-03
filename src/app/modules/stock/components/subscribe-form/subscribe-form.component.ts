import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-subscribe-form',
  templateUrl: './subscribe-form.component.html',
  styleUrls: ['./subscribe-form.component.scss']
})
export class SubscribeFormComponent {
  @Output() onSubmit = new EventEmitter<string>();

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
