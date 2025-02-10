import { Component } from '@angular/core';
import { MainWhyMeComponent } from './main-why-me/main-why-me.component';
import { MainSkillsComponent } from './main-skills/main-skills.component';
import { MainProjectsComponent } from './main-projects/main-projects.component';
import { MainContactComponent } from './main-contact/main-contact.component';
import { MainReferencesComponent } from './main-references/main-references.component';
import { HeaderComponent } from "../header/header.component";
import { MenuBarComponent } from '../menu-bar/menu-bar.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MainWhyMeComponent, MainSkillsComponent, MainProjectsComponent, MainContactComponent, MainReferencesComponent, HeaderComponent, MenuBarComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
