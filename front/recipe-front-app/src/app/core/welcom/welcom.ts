import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-welcom',
  imports: [
    MatButton,
    RouterLink
  ],
  templateUrl: './welcom.html',
  styleUrl: './welcom.scss'
})
export class Welcom {

}
