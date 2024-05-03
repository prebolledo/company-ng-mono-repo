import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { SessionEffects, sessionFeature } from '@company/shared/session';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { Environment } from './environments/environment';
import { provideEffects } from '@ngrx/effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideStore(),    
    provideState(sessionFeature),
    provideEffects([SessionEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: Environment.get().production }),
  ],
};
