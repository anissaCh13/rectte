import { Component } from '@angular/core';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatSlideToggle],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected title = 'recipe-front-app-anissa';
}
