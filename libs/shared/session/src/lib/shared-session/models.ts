import { User } from "@company/shared/models";

export interface UserSession {
  token: string,
  user: User,
}