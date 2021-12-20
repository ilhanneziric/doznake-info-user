import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-postavip',
  templateUrl: './postavip.component.html',
  styleUrls: ['./postavip.component.css']
})
export class PostavipComponent implements OnInit {
  constructor(private httpKlijent : HttpClient) {
  }

  ngOnInit(): void {
  }
  onSubmit(userPost: any) {
    try{
      this.httpKlijent.post("http://localhost:3000/pitanja", userPost).subscribe(x=>{
        this.clearForm();
      });
    }catch (e:any) {
      alert(e.message());
    }
  }
  clearForm(){
    (<HTMLFormElement>document.getElementById("Login")).reset();
   }

}
