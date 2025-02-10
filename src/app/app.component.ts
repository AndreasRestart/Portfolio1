import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from "./main/main.component";
import { FooterComponent } from './footer/footer.component';
import { TranslateService,TranslatePipe,TranslateDirective} from '@ngx-translate/core';
import { ImprintComponent } from "./imprint/imprint.component";
import { DataProtectionComponent } from "./data-protection/data-protection.component";
import { RouterOutlet } from '@angular/router';
import { MenuBarComponent } from "./menu-bar/menu-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, FooterComponent, MainComponent, TranslatePipe, TranslateDirective, ImprintComponent, DataProtectionComponent, MenuBarComponent]
  ,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
