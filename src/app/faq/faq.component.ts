import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  svaFaqi:any;
  akordionCounter: any;
  constructor(private httpKlijent : HttpClient) {
  }

  ngOnInit(): void {
    this.httpKlijent.get('http://localhost:3000/faqi').subscribe(x=>{
      this.svaFaqi = x;
      this.akordionCounter = 1;
    });
  }

}
