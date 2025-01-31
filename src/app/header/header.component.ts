import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
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
}
