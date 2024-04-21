import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IdentityProfileState, identityProfileStateFeatureKey} from './state';

const identityProfileState = createFeatureSelector<IdentityProfileState>(identityProfileStateFeatureKey);

export const user = createSelector(
  identityProfileState,
  (aplicationState) => aplicationState.user
);