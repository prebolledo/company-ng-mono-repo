import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { SessionStateActions, SessionStateSelector } from '@company/shared/session';
import { User } from '@company/shared/models';

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
  token$: Observable<string | null> = this.store.select(SessionStateSelector.token); 
  user$: Observable<User | null> = this.store.select(SessionStateSelector.user); 
  constructor(
    private store: Store,
  ){}

  closeSession() {
    this.store.dispatch(SessionStateActions.end());
  }
}

