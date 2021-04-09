import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from '../models/brand';

@Pipe({
  name: 'brandFilter',
})
export class BrandFilterPipe implements PipeTransform {
  transform(value: Brand[], filterBrandText: string): Brand[] {
    filterBrandText = filterBrandText
      ? filterBrandText.toLocaleLowerCase()
      : '';
    return filterBrandText
      ? value.filter(
          (c: Brand) =>
            c.name.toLocaleLowerCase().indexOf(filterBrandText) !== -1
        )
      : value;
  }
}
