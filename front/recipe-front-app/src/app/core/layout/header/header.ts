import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButton } from '@angular/material/button';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [
    MatToolbar,
    MatButton,
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

}
