import { Injectable } from '@angular/core'
import { User } from '@company/shared/models';
import { Observable, of, throwError } from 'rxjs'
import { delay } from 'rxjs/operators'
import { SessionState } from '../shared-session';

const FAKE_DELAY = 600

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: User | null;
  constructor() {
    this.user = null;
  }
  
  auth(email: string, password: string): Observable<SessionState> {
    try {
      this.user = {
        email,
        password,
      };
      return of({user: this.user, token: 'toekn'} ).pipe(delay(FAKE_DELAY))
    }catch(error){
      return throwError(() => error);
    }
  }

  getUser(): User | null {
    return this.user;
  }
}