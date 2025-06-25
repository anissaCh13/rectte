import { Component } from '@angular/core';
import { Header } from './core/layout/header/header';
import { Footer } from './core/layout/footer/footer';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ Header, Footer, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected title = 'recipe-front-app-anissa';
}
