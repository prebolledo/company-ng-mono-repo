import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '@company/shared/environments';
import { IdentityProfileStateModule } from './state';
import { SessionStateModule } from '@company/shared/session';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}),
    IdentityProfileStateModule,
    SessionStateModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  bootstrap: [],
})
export class AppModule {}