import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SlanjeComponent } from './slanje/slanje.component';
import { PrimanjeComponent } from './primanje/primanje.component';
import { FaqComponent } from './faq/faq.component';
import { PostavipComponent } from './postavip/postavip.component';
import { DoznakeComponent } from './doznake/doznake.component';
import { SlanjeDetaljnoComponent } from './slanje-detaljno/slanje-detaljno.component';
import { PrimanjeDetaljnoComponent } from './primanje-detaljno/primanje-detaljno.component';

@NgModule({
  declarations: [
    AppComponent,
    SlanjeComponent,
    PrimanjeComponent,
    FaqComponent,
    PostavipComponent,
    DoznakeComponent,
    SlanjeDetaljnoComponent,
    PrimanjeDetaljnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'slanje', component:SlanjeComponent},
      {path:'primanje', component:PrimanjeComponent},
      {path:'faq', component:FaqComponent},
      {path:'postavip', component:PostavipComponent},
      {path:'', component:DoznakeComponent},
      {path:'slanje/detaljno', component:SlanjeDetaljnoComponent},
      {path:'primanje/detaljno', component:PrimanjeDetaljnoComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
