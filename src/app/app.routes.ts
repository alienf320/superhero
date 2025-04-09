import { Routes } from '@angular/router';
import { HeroListComponent } from './components/layout/hero-list/hero-list.component';
import { HeroFormComponent } from './components/layout/hero-form/hero-form.component';

export const routes: Routes = [
  {path: '', component: HeroListComponent},
  {path: 'add', component: HeroFormComponent}
];
