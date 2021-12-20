import { Component, Input, OnInit } from '@angular/core';
import {SharedService} from '../shared/shared.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-slanje-detaljno',
  templateUrl: './slanje-detaljno.component.html',
  styleUrls: ['./slanje-detaljno.component.css']
})
export class SlanjeDetaljnoComponent implements OnInit {
  
  constructor(private shared:SharedService, private httpKlijent:HttpClient) { }
  message='';
  objava:any;
  ngOnInit(): void {
    this.message = this.shared.getMessage();
    this.httpKlijent.get('http://localhost:3000/objave/'+ this.message).subscribe(x=>{
      this.objava = x;
    });
  }

}
