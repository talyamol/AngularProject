import { Pipe, PipeTransform } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Pipe({
  name: 'kindCourse',
  standalone: false
})
export class KindCoursePipe implements PipeTransform {

  transform(kind: number): string {
    let str = "";
    if (kind == 0)
      return str="computer"
    else
      return str="person"

  }

}
