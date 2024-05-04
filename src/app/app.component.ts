import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'compiled';
  gifs = [
    { title: 'GIF1', src: 'assets/gif1.gif' },
    { title: 'GIF2', src: 'assets/gif2.gif' },
    // Gifs
  ];

  constructor(private router: Router) {}

  redirectToGif(gif: { title: string, src: string }) {
    this.router.navigate(['/gif', gif.title]);
  }
}