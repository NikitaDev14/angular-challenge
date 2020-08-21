import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'get'
})
export class GetPipe implements PipeTransform {
  transform<T>(value: T, nameToGet: keyof T): T[keyof T] {
    return value ? value[nameToGet] : null;
  }
}
