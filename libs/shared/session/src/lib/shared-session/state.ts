import { User } from "@company/shared/models";

export interface SessionState {
  user: User | null;
  token: string | null,
}

export const initialState: SessionState = {
  user: null,
  token: null,
};

export const sessionStateFeatureKey = 'sessionState';