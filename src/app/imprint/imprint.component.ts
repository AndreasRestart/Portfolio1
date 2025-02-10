import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';
import { MenuBarComponent } from '../menu-bar/menu-bar.component';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective, RouterLink, RouterOutlet, MenuBarComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

}
