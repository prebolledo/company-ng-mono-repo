import { User } from '@company/shared/models';
import { createAction, props } from '@ngrx/store';

export const auth = createAction(
  '[Session] auth',
  props<{ email: string, password: string }>(),
);

export const loginSuccessful = createAction(
  '[Session] login successful',
  props<{ user: User, token: string }>(),  
);

export const init = createAction(
  '[Session] init',
);

export const end = createAction(
  '[Session] end',
);