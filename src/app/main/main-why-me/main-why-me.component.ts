import { Component } from '@angular/core';

@Component({
  selector: 'app-main-why-me',
  standalone: true,
  imports: [],
  templateUrl: './main-why-me.component.html',
  styleUrl: './main-why-me.component.scss'
})
export class MainWhyMeComponent {
  scrollToBottom(){
      window.scrollTo(0, (window.document.body.scrollHeight - window.innerHeight));
    }

}
