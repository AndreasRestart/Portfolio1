import { Component } from '@angular/core';
import { MainProjectsDetailComponent } from './main-projects-detail/main-projects-detail.component';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-main-projects',
  standalone: true,
  imports: [MainProjectsDetailComponent,TranslateDirective,TranslatePipe],
  templateUrl: './main-projects.component.html',
  styleUrl: './main-projects.component.scss'
})
export class MainProjectsComponent {
  curentProject: string = "EL Pollo Loco";

  projects:{
    name: string;
    duration: string;
    description: string;
    implementationDetails: string;
    technologiesBasic: string;
    technologiesA: string;
    technologiesB: string;
    technologiesC: string;
    image: string;
    URL: string;
    
  }[] =[
    { name: "EL Pollo Loco",
      duration: "3 Weeks",
      description: "Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.",
      implementationDetails:"Short text that describes your role or the workflow for this specific project. Let a recruiter know more about your knowledge and ability to work independently or collaboratively in a structured way.",
      technologiesBasic: "/assets/img/HTML.png",
      technologiesA: "/assets/img/CSS.png",
      technologiesB: "/assets/img/Javascript.png",
      technologiesC: "/",
      image: "/assets/img/Pollo.png",
      URL: "",
      
    },
    { name: "Pokedex",
      duration: "3 Weeks",
      description: "Based on the PokéAPI a simple library that provides and catalogues pokemon information.",
      implementationDetails:"",
      technologiesBasic: "/assets/img/HTML.png",
      technologiesA: "/assets/img/CSS.png",
      technologiesB: "/assets/img/Javascript.png",
      technologiesC: "/assets/img/Api.png",
      image: "./",
      URL: ""
    },
    { name: "test",
      duration: "3 Weeks",
      description: "es war einmal",
      implementationDetails:"",
      technologiesBasic: "/",
      technologiesA: "/",
      technologiesB: "/",
      technologiesC: "/",
      image: "./",
      URL: ""
    }
  ]
showDetailProjects(name: string){
this.curentProject = name;
}

    scrollToBottom() {
    window.scrollTo(0, (window.document.body.scrollHeight - window.innerHeight));
  }
}
