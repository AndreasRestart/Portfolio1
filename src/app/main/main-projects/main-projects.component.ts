import { Component } from '@angular/core';

@Component({
  selector: 'app-main-projects',
  standalone: true,
  imports: [],
  templateUrl: './main-projects.component.html',
  styleUrl: './main-projects.component.scss'
})
export class MainProjectsComponent {
  projects:{
    name: string;
    description: string;
    technologies: string;
    image: string;
    URL: string;
  }[] =[
    {name: "EL Pollo Loco",
      description: "es war einmal",
      technologies: "./",
      image: "./",
      URL: "url"
    },
    {name: "Pokedex",
      description: "es war einmal",
      technologies: "./",
      image: "./",
      URL: "url"
    },
    {name: "test",
      description: "es war einmal",
      technologies: "./",
      image: "./",
      URL: "url"
    }
  ]

  
  scrollToBottom() {
    window.scrollTo(0, (window.document.body.scrollHeight - window.innerHeight));
  }
}
