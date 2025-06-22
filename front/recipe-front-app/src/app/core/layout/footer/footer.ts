import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  standalone: true,
  selector: 'app-footer',
  imports: [
    MatToolbar
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {

}
