import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProfileComponent } from '@company/user/profile'

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ProfileComponent,
  ],
  selector: 'app-login-page',
  template: `
    <lib-profile />
  `,
  providers:[],
})
export class ProfilePageComponent {}
