import { Route } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login';
import { ProfilePageComponent } from './pages/profile';

export const appRoutes: Route[] = [
  {
    path: '',
    component: AppComponent,
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
