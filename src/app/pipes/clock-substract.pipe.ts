import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clockExtract'
})
export class ClockExtractPipe implements PipeTransform {

  transform(value: Date, fieldToExtract: 'hours' | 'minutes' | 'seconds'): number {
    if (!value) {
      return 0;
    }
    switch (fieldToExtract) {
      case 'hours':
        return value.getHours();

      case 'minutes':
        return value.getMinutes();

      case 'seconds':
        return value.getSeconds();
    }
  }

}
