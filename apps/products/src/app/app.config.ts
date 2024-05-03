import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { sessionFeature } from '@company/shared/session';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { Environment } from './environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideStore(),    
    provideState(sessionFeature),
    provideStoreDevtools({ maxAge: 25, logOnly: Environment.get().production  }),
  ],
};
