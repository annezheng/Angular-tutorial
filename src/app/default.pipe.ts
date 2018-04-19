import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'default'
})
export class DefaultPipe implements PipeTransform {

  transform(imageUrl: string, fallbackUrl: string, forceHttps: boolean=false): string {  
    let image = '';
    if (imageUrl){
      image = imageUrl; 
    } else {
      image = fallbackUrl;
    }  
    if (forceHttps){
      if (image.indexOf('https') === -1){
        image = image.replace('http', 'https');
      }
    }  
    return image;
  }

}
