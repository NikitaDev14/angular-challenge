import { FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export const boundsValidator: ValidatorFn = (form: FormGroup): ValidationErrors | null => {
  const lowerBound = form.get('lowerBound');
  const upperBound = form.get('upperBound');

  return lowerBound && upperBound && lowerBound.value >= upperBound.value ? { wrongBounds: true } : null;
};
