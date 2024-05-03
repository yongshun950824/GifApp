// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GifComponent } from '../gif/gif.component'; // Import your GifComponent

const routes: Routes = [
  { path: 'gif/:title', component: GifComponent }, // Define a route parameter 'title'
  // other routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }