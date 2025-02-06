import { Component } from '@angular/core';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
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
