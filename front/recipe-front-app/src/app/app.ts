import { Component } from '@angular/core';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { Header } from './core/layout/header/header';
import { Footer } from './core/layout/footer/footer';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatSlideToggle, Header, Footer, MatButton],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected title = 'recipe-front-app-anissa';
}
