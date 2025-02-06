import { Component } from '@angular/core';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-main-why-me',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './main-why-me.component.html',
  styleUrl: './main-why-me.component.scss'
})
export class MainWhyMeComponent {
  scrolltoBottom(){
      window.scrollTo(0, (window.document.body.scrollHeight - window.innerHeight));
    }

}
