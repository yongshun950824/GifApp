// app.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule],
  standalone: true
})
export class AppComponent {
  gifs = [
    { title: 'GIF1', src: 'assets/gif1.gif' },
    { title: 'GIF2', src: 'assets/gif2.gif' },
    // Gifs
  ];

  constructor(private router: Router) {}

  redirectToGif(gif: { title: string, src: string }) { // Change the parameter type to { title: string, src: string }
    this.router.navigate(['/gif', gif.title]);
  }
}