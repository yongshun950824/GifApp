import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GifComponent } from '../gif/gif.component';
import { GifDetailComponent } from '../gif/gif-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { app } from '../../server';

@NgModule({
  declarations: [
    AppComponent,
    GifComponent,
    GifDetailComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent] // Bootstrap AppComponent
})
export class AppModule { }