// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GifComponent } from '../gif/gif.component'; // Import GifComponent
import { GifDetailComponent } from '../gif/gif-detail.component'; // Import GifDetailComponent

const routes: Routes = [
  { path: 'gif', component: GifComponent },
  { path: 'gif/:title', component: GifDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Use forRoot() instead of forChild()
  exports: [RouterModule]
})
export class AppRoutingModule { }