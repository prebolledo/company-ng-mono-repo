import { createFeature, createReducer,on } from "@ngrx/store";

import { initialState, SessionState, sessionStateFeatureKey } from './state'
import { end, init, loginSuccessful } from "./actions";
import { UserSession } from "./models";
import { User } from "@company/shared/models";

export const sessionFeature = createFeature({
  name: sessionStateFeatureKey,
  reducer: createReducer(
    initialState,
    on(init, (currentState: SessionState) => {
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
    on(loginSuccessful, (currentState, action) => {
      const user = { ...action.user } as User;
      user.password = 'xxxxxxx';      
      if (sessionStorage.getItem('session') === null) {

        const userSession: UserSession = {
          token: action.token,
          user,
        };
        sessionStorage.setItem('session', JSON.stringify(userSession));
      }
      return {
        ...currentState,
        token: action.token,
        user,
      };
    }),    
    on(end, () => {
      const session = sessionStorage.getItem('session');
      if (session !== null) {
        sessionStorage.removeItem('session');
      }
      return initialState;
    }),  
  ),
});