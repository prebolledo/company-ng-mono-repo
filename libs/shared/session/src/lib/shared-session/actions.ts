import { createAction, props } from '@ngrx/store';
import { SessionState } from './state';

export const auth = createAction(
  '[Session] auth',
  props<{ email: string, password: string }>(),
);

export const loginSuccessful = createAction(
  '[Session] login successful',
  props<SessionState>(),  
);

export const init = createAction(
  '[Session] init',
);

export const end = createAction(
  '[Session] end',
);