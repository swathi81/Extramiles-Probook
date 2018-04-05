import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { WrrComponent } from './wrr/wrr.component';


@NgModule({
  declarations: [
    AppComponent,
    WrrComponent
  ],
  imports: [
    BrowserModule ,
    HttpModule,
    FormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
