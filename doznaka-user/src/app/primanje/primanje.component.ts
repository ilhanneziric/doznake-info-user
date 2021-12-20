import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {SharedService} from '../shared/shared.service';

@Component({
  selector: 'app-primanje',
  templateUrl: './primanje.component.html',
  styleUrls: ['./primanje.component.css']
})
export class PrimanjeComponent implements OnInit {
  sveObjave:any;
  filterp:String = "";
  constructor(private httpKlijent : HttpClient, private shared:SharedService) {
  }
  message='';
  ngOnInit(): void {
    this.httpKlijent.get('http://localhost:3000/objave/primanje').subscribe(x=>{
      this.sveObjave = x;
    });
  }
  posaljiID(data:any, o:any){
    this.shared.setpMessage(data);
    o.viewCounter++;
    this.httpKlijent.patch('http://localhost:3000/objave/' + data,o ).subscribe(x=>{
    });
  }
  getSveObjave(){
    if(this.sveObjave == null)
      return [];
    return this.sveObjave.filter((x:any) => this.filterp.length==0 || x.naslov.toLowerCase().startsWith(this.filterp.toLowerCase()));
  }
}
