import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {SharedService} from '../shared/shared.service';

@Component({
  selector: 'app-slanje',
  templateUrl: './slanje.component.html',
  styleUrls: ['./slanje.component.css']
})
export class SlanjeComponent implements OnInit {
  sveObjave:any;
  filter:String = "";
  constructor(private httpKlijent : HttpClient, private shared:SharedService) {
  }
  message='';
  ngOnInit(): void {
    this.httpKlijent.get('http://localhost:3000/objave/slanje').subscribe(x=>{
      this.sveObjave = x;
    });
  }
  posaljiID(data:any, o:any){
    this.shared.setMessage(data);
    o.viewCounter++;
    this.httpKlijent.patch('http://localhost:3000/objave/' + data,o ).subscribe(x=>{
    });
  }
  getSveObjave(){
    if(this.sveObjave == null)
      return [];
    return this.sveObjave.filter((x:any) => this.filter.length==0 || x.naslov.toLowerCase().startsWith(this.filter.toLowerCase()));
  }
}
