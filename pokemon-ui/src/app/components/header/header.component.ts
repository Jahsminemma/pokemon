import { Component } from '@angular/core';
import { CardLayoutComponent } from '../card-layout/card-layout.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CardLayoutComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
