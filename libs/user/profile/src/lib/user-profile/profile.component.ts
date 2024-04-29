import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { SessionStateActions, sessionFeature } from '@company/shared/session';

@Component({
  selector: 'lib-profile',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,  
  template: `
    @if ({token: token$ | async}; as data) {
      @if (data.token !== null) {      
        <section>
          <img
            src="https://avatars.githubusercontent.com/u/34753020?v=4"
            size="32"
            height="32"
            width="32"
          />
          @if ({user: user$ | async}; as data) {
            {{data.user?.email}}
          }
          <button (click)="closeSession()">End Session</button>
        </section>
      }
    } @else {
      no session
    }
  `,
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  token$ = this.store.select(sessionFeature.selectToken); 
  user$ = this.store.select(sessionFeature.selectUser); 
  constructor(
    private store: Store,
  ){}

  closeSession() {
    this.store.dispatch(SessionStateActions.end());
  }
}

