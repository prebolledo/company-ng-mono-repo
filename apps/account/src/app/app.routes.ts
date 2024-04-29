import { Route } from '@angular/router';
import { LoginPageComponent } from './pages/login.page';
import { ProfilePageComponent } from './pages/profile.page';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'profile',
    component: ProfilePageComponent,
  },  
  {
    path: 'login',
    component: LoginPageComponent,
  }
];
