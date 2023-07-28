import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }

  CountCapital(str: String): number {
    let count = 0;

    for(let i=0; i<str.length; i++){
      if(str[i].toUpperCase() === str[i]){
        count++;
      }
    }

    return count;
  }
}
