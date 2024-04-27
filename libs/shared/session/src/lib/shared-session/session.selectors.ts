import { sessionFeature } from './features';
export const user = sessionFeature.selectUser;
export const token = sessionFeature.selectToken;