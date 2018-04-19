import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clean'
})
export class CleanPipe implements PipeTransform {

  transform(text: string, badWords: string): string {
    let arr = badWords.split(",");
    arr.forEach((word)=>{
      if (text.includes(word)){
        text = text.replace(word, '****');
      }
    })
    return text;
  }

}
