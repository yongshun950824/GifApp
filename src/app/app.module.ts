// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GifComponent } from '../gif/gif.component'; // Import GifComponent

const routes: Routes = [
  { path: 'gif/:title', component: GifComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [GifComponent], // Declare only GifComponent
  providers: [], // Do not provide AppComponent
})
export class AppModule {
  ngDoBootstrap() {}
}