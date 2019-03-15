import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filesize'
})
export class FilesizePipe implements PipeTransform {
  // Transforms bytes into megabytes
  transform(value: number, extension: string = 'MB'): string {
    return (value / (1024 * 1024)).toFixed(2) + extension;
  }
}
