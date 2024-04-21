import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { appReducer, sessionStateFeatureKey } from '.';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(sessionStateFeatureKey, appReducer),  
  ],
  bootstrap: [],
})
export class SessionStateModule {}