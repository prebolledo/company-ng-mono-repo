import { User } from "@company/shared/models";

export interface UserSession {
  token: string | null,
  user: User | null,
}