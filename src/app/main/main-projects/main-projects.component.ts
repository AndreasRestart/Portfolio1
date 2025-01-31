import { Component } from '@angular/core';

@Component({
  selector: 'app-main-projects',
  standalone: true,
  imports: [],
  templateUrl: './main-projects.component.html',
  styleUrl: './main-projects.component.scss'
})
export class MainProjectsComponent {
  scrollToBottom() {
    window.scrollTo(0, (window.document.body.scrollHeight - window.innerHeight));
  }
}
