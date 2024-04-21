import { User } from '@company/shared/models';
import { createAction, props } from '@ngrx/store';

export const register = createAction(
  '[Session] register',
  props<{ user: User, token: string }>(),
);

export const init = createAction(
  '[Session] init',
);

export const close = createAction(
  '[Session] close',
);