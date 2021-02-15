import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform<T>(value: T[], filterByProperty: keyof T, filterValue: string): T[] {
    return value && filterByProperty && filterValue ? value.filter((item: T) =>
      String(item[filterByProperty]).includes(filterValue.toUpperCase()),
    ) : value;
  }
}
