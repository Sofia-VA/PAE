import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myUpperCase'
})
export class MyuppercasePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.toUpperCase();
  }

}
