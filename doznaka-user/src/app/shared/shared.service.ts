import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  message= '';
  pmessage='';
  constructor() { }
  setMessage(data:any){
    this.message = data;
  }
  getMessage(){
    return this.message;
  }
  setpMessage(data:any){
    this.pmessage = data;
  }
  getpMessage(){
    return this.pmessage;
  }
}
