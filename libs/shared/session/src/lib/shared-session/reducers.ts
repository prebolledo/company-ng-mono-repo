import { createReducer, on } from '@ngrx/store';
import { init, register, close } from './actions';
import { initialState } from './state';
import { UserSession } from './models';



export const appReducer = createReducer(
  initialState,
  on(init, (currentState) => {
    const session = sessionStorage.getItem('session');
    if (session !== null) {
      const userSession: UserSession = JSON.parse(session);
      return {
        ...currentState,
        ...userSession,
      }
    }
    return  {
      ...currentState,
    };
  }),  
  on(register, (currentState, action) => {
    if (sessionStorage.getItem('session') === null) {
      const userSession: UserSession = {
        token: action.token,
        user: { ...action.user, password: 'xxxxxxx' },
      }
      sessionStorage.setItem('session', JSON.stringify(userSession));
    }
    return {
      ...currentState,
      user: action.user,
    };
  }), 
  on(close, () => {
    const session = sessionStorage.getItem('session');
    if (session !== null) {
      sessionStorage.removeItem('session');
    }
    return  {};
  }),    
);