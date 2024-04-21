import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

export declare const __webpack_public_path__ = 'valueFormerlyAssignedUsing_deployUrl';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
