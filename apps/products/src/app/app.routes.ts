import { Route } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductsPageComponent } from './pages/products';

export const appRoutes: Route[] = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: ProductsPageComponent,
      }
    ]
  },
];
