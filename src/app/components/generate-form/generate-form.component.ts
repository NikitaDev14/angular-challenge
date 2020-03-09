import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Constants } from 'src/app/constants';
import { GenerateTreePayload } from 'src/app/models/tree.models';
import { Observable } from 'rxjs';
import { boundsValidator } from 'src/app/boundsValidator';

@Component({
  selector: 'app-generate-form',
  templateUrl: './generate-form.component.html',
  styleUrls: ['./generate-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenerateFormComponent {
  @Input() isRootContext$: Observable<boolean>;

  @Output() submitted: EventEmitter<GenerateTreePayload> = new EventEmitter();

  generateForm = new FormGroup({
    count: new FormControl(
      Constants.maxChildrenCount,
      [
        Validators.required,
        Validators.min(Constants.minChildrenCount),
        Validators.max(Constants.maxChildrenCount),
      ],
    ),
    lowerBound: new FormControl(
      Constants.minChildrenCount,
      [
        Validators.required,
        Validators.min(Constants.minChildrenCount),
      ],
    ),
    upperBound: new FormControl(
      Constants.maxChildrenCount,
      [
        Validators.required,
        Validators.min(Constants.minChildrenCount),
      ],
    ),
  }, { validators: boundsValidator });

  get count() {
    return this.generateForm.get('count');
  }

  get lowerBound() {
    return this.generateForm.get('lowerBound');
  }

  get upperBound() {
    return this.generateForm.get('upperBound');
  }

  get isBoundsInvalid(): boolean {
    return this.generateForm.errors && this.generateForm.errors.wrongBounds;
  }

  public submit() {
    this.submitted.emit({
      count: this.generateForm.get('count').value,
      lowerBound: this.generateForm.get('lowerBound').value,
      upperBound: this.generateForm.get('upperBound').value,
    });
  }
}
