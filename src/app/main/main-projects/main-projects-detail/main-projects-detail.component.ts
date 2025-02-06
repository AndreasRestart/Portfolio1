import { Component, Input } from '@angular/core';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';



@Component({
  selector: 'app-main-projects-detail',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './main-projects-detail.component.html',
  styleUrl: './main-projects-detail.component.scss'
})
export class MainProjectsDetailComponent {
 @Input() singelProjects ={ 
  
  name: "",
  duration: "3 Weeks",
  description: "Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.",
  implementationDetails:"",
  technologiesBasic: "/assets/img/HTML.png",
  technologiesA: "/assets/img/CSS.png",
  technologiesB: "/assets/img/Javascript.png",
  technologiesC: "/",
  image: "/assets/img/Pollo.png",
  URL: "url"
  

 } 
}
