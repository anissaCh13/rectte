import { Component } from '@angular/core';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  imports: [MatSlideToggle],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'recipe-front-app-anissa';
}
