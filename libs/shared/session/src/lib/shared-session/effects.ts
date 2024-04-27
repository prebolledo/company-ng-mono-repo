import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { SessionStateActions } from ".";
import { catchError, EMPTY, exhaustMap, map, tap } from "rxjs";
import { AuthService } from "../services";

@Injectable()
export class SessionEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private authService: AuthService,
  ){}

  login$ = createEffect(() => this.actions$.pipe(
    ofType(SessionStateActions.auth),
    exhaustMap((action) => (
      this.authService
        .auth(action.email, action.password)
        .pipe(
          map(({user, token}) => SessionStateActions.loginSuccessful({user, token})),
          catchError(() => EMPTY)
        )
    )),
  ));

  loginRedirect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SessionStateActions.loginSuccessful),
      tap(() => {
        console.log('loginRedirect effect')
        this.router.navigate(['profile']);
      })
    );
  }, {dispatch: false});

  endSessionRedirect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SessionStateActions.end),
      tap(() => {
        console.log('endSessionRedirect effect')
        this.router.navigate(['login']);
      })
    );
  }, {dispatch: false});  
}