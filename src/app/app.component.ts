import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from "./main/main.component";
import { MainProjectsComponent } from "./main/main-projects/main-projects.component";
import { MainSkillsComponent } from "./main/main-skills/main-skills.component";
import { MainContactComponent } from "./main/main-contact/main-contact.component";
import { MainWhyMeComponent } from './main/main-why-me/main-why-me.component';
import { FooterComponent } from './footer/footer.component';
import { MainReferencesComponent } from "./main/main-references/main-references.component";

import { TranslateService, 
          TranslatePipe, 
          TranslateDirective 
        } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, MainSkillsComponent, MainWhyMeComponent, 
    FooterComponent, MainComponent, MainProjectsComponent, MainContactComponent,
     MainReferencesComponent, TranslatePipe, TranslateDirective]
  ,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('de');
  }
}
