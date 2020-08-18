import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addZeroAhead'
})
export class AddZeroAheadPipe implements PipeTransform {
  transform(value: number): string {
    return value < 10 ? `0${value}` : value.toString();
  }
}
