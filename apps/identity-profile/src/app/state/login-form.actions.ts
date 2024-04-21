import { User } from '@company/shared/models';
import { createAction, props } from '@ngrx/store';

export const addUser = createAction(
  '[Login Form] Add User',
  props<{ user: User }>()
);