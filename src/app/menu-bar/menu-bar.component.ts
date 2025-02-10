import { Component } from '@angular/core';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [TranslateDirective,TranslatePipe,],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss'
})
export class MenuBarComponent {
 scrolltotop(){
    window.scrollTo({top:0,behavior:"smooth"})
  }
   scrolltobottom(){
    window.scrollTo(0, (window.document.body.scrollHeight - window.innerHeight));
  }
  constructor(private translate: TranslateService){}
  changeLanguage(language: string){
    this.translate.use(language);
  }
}
