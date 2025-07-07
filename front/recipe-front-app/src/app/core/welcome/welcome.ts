import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    RouterLink,
    Button,
    Card
  ],
  templateUrl: './welcome.html',
  styleUrl: './welcome.scss'
})
export class Welcome {

}
