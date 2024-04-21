import { User } from "@company/shared/models";

export interface SessionState {
  user?: User;
  token?: string,
}

export const initialState: SessionState = {
  user: undefined,
  token: undefined,
};

export const sessionStateFeatureKey = 'sessionState';