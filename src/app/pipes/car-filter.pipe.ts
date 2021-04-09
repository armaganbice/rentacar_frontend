import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';

@Pipe({
  name: 'carFilter'
})


export class CarFilterPipe implements PipeTransform {

  transform(value: Car[], filterCarText: string): Car[] {
    filterCarText = filterCarText?filterCarText.toLocaleLowerCase():""
    return filterCarText?value
    .filter((c:Car)=>c.description.toLocaleLowerCase().indexOf(filterCarText)!==-1)
    :value;
  }
}
