import { Routes } from '@angular/router';
import { AddComponent } from '../components/add/add.component';
import { HomeComponent } from '../components/home/home.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'add',
    component: AddComponent,
  },
];
