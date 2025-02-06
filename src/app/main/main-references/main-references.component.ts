import { Component } from '@angular/core';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-main-references',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './main-references.component.html',
  styleUrl: './main-references.component.scss'
})
export class MainReferencesComponent {

}
