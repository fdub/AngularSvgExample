import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { CircleComponent } from './circle/circle.component';
import { RectComponent } from "./rect/rect.component";

@NgModule({
  declarations: [
    AppComponent,
    CircleComponent,
    RectComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
