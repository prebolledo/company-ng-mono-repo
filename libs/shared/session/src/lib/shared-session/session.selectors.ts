import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SessionState, sessionStateFeatureKey} from './state';

const sessionState = createFeatureSelector<SessionState>(sessionStateFeatureKey);

export const session = createSelector(
  sessionState,
  (aplicationState) => aplicationState
);