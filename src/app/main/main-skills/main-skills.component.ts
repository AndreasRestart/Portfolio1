import { Component } from '@angular/core';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-main-skills',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './main-skills.component.html',
  styleUrl: './main-skills.component.scss'
})
export class MainSkillsComponent {

}
