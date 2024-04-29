import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { sessionFeature } from '@company/shared/session';
import { ProfileComponent } from '@company/user/profile'
import { Store } from '@ngrx/store';

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
export class ProfilePageComponent implements OnInit {
  constructor(
    private router: Router,
    private store: Store,
  ){
  }

  ngOnInit(): void {
    const token = this.store.select(sessionFeature.selectToken);
    token.subscribe((token) => {
      if (token === null) {
        this.router.navigate(['login']);
      }
    });
  }
}
