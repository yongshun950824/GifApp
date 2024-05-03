import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app/app.component'; // Import AppComponent

@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.css']
})
export class GifComponent implements OnInit {
  gif: { title: string, src: string } = { title: '', src: '' }; // Initialize gif

  constructor(private route: ActivatedRoute, private appComponent: AppComponent) { }

  ngOnInit() {
    const title = this.route.snapshot.paramMap.get('title');
    this.gif = this.appComponent.gifs.find(gif => gif.title === title) || this.gif;
  }
}