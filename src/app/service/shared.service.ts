import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  some(color?: string){
    if (color){
      return color
    }else{
      return 'red'
    }
  }
}
