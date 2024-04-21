import { createReducer, on } from '@ngrx/store';
import { IdentityProfileStateActions, LoginFormStateActions } from '.';
import { initialState } from './state';



export const appReducer = createReducer(
  initialState,
  on(IdentityProfileStateActions.init, (currentState) => ({
    ...currentState,
    user: undefined,
  })),
  on(LoginFormStateActions.addUser, (currentState, action) => ({
    ...currentState,
    user: action.user,
  })),
);