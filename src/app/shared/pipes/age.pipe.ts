import { Pipe, PipeTransform } from '@angular/core';

import { Helpers } from 'src/app/helpers';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: string | Date): number {
    if (!value) {
      return 0;
    }
    let birthday;
    if (value instanceof Date) {
      birthday = value;
    } else if (typeof value === 'string') {
      birthday = new Date(value.replace(/(\d{2})-(\d{2})-(\d{4})/, '$2/$1/$3'));
    }
    return Helpers.getAge(birthday);
  }

}
