import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: number): string {
    if (isNaN(value)) {
      return '';
    }

    const formatter = new Intl.NumberFormat('hu-HU', {
      useGrouping: true
    });

    return `${formatter.format(value)} Ft`;
  }

}
