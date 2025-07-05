import { Component, inject, OnInit } from '@angular/core';
import { Header } from './core/layout/header/header';
import { Footer } from './core/layout/footer/footer';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { PrimeNG } from 'primeng/config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Footer, RouterOutlet, ButtonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App implements OnInit{
  readonly #primeng= inject(PrimeNG);
  protected title = 'recipe-front-app-anissa';

  ngOnInit() {
    this.#primeng.ripple.set(true);
  }
}
