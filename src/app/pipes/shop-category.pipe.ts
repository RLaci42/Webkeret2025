import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shopCategory'
})
export class ShopCategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch(value) {
      case 'fishingRods': return 'Horgászbotok';
      case 'reels': return 'Orsók';
      case 'hooks': return 'Horgok';
      case 'bobbers': return 'Úszók';
      case 'biteIndicators': return 'Kapásjelzők';
      default: return '';
    }
  }

}
