import { User } from "@company/shared/models";

export interface IdentityProfileState {
  user?: User;
}

export const initialState: IdentityProfileState = {
  user: undefined,
};

export const identityProfileStateFeatureKey = 'identityProfileState';