import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ImprintComponent } from './imprint/imprint.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';

export const routes: Routes = [
    {path:"",component:MainComponent},
    {path:"imprint",component:ImprintComponent},
    {path:"data-protection",component:DataProtectionComponent}  
];
