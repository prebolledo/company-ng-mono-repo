import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LoginFormComponent } from '../components/login-form/form.component';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { sessionFeature } from '@company/shared/session';


@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    LoginFormComponent,
  ],
  selector: 'app-login-page',
  template: `
    <app-login-form [title]="title" />
  `,
  providers:[],
})
export class LoginPageComponent implements OnInit {
  title = 'Login';
  constructor(
    private router: Router,
    private store: Store,
  ){
  }

  ngOnInit(): void {
    const token = this.store.select(sessionFeature.selectToken);
    token.subscribe((token) => {
      if (token !== null) {
        this.router.navigate(['profile']);
      }
    });
  }  
}
