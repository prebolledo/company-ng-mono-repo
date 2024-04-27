import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LoginFormComponent } from '../components/login-form/form.component';


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
export class LoginPageComponent {
  title = 'Login';

}
