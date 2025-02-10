import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';
import { MenuBarComponent } from '../menu-bar/menu-bar.component';

@Component({
  selector: 'app-data-protection',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective, RouterLink,RouterOutlet,MenuBarComponent],
  templateUrl: './data-protection.component.html',
  styleUrl: './data-protection.component.scss'
})
export class DataProtectionComponent {
  scrolltotop(){
    window.scrollTo({top:0,behavior:"smooth"})
  }
}

