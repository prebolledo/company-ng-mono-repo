import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { appReducer, identityProfileStateFeatureKey } from '.';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(identityProfileStateFeatureKey, appReducer),  
  ],
  bootstrap: [],
})
export class IdentityProfileStateModule {}