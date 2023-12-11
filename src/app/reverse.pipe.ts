import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(name:any, ...args: unknown[]): unknown {
    var result:any[] = [];
    for(var i=name.length-1;i>=0;i--){
           result.push(name[i])
    }
    return result.join("");
  }

}
