import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/molecules/header/header.component';
import { ButtonComponent } from './components/atoms/button/button.component';
import { HeaderBemComponent } from './components/molecules/header-bem/header-bem.component';
import { GridBemComponent } from './components/molecules/grid-bem/grid-bem.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    ButtonComponent,
    HeaderBemComponent,
    GridBemComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'chapter-bem';
}
