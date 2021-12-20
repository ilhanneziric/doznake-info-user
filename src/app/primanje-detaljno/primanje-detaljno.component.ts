import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared/shared.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-primanje-detaljno',
  templateUrl: './primanje-detaljno.component.html',
  styleUrls: ['./primanje-detaljno.component.css']
})
export class PrimanjeDetaljnoComponent implements OnInit {

  constructor(private shared:SharedService, private httpKlijent:HttpClient) { }
  message='';
  objava:any;
  ngOnInit(): void {
    this.message = this.shared.getpMessage();
    this.httpKlijent.get('http://localhost:3000/objave/'+ this.message).subscribe(x=>{
      this.objava = x;
    });
  }

}
