import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { SessionState, SessionStateActions, SessionStateSelector } from '@company/shared/session';

@Component({
  selector: 'lib-profile',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,  
  template: `
    @if ({session: session$ | async}; as data) {
      @if (data.session?.token !== undefined) {      
        <section>
          <img
            src="https://avatars.githubusercontent.com/u/34753020?v=4"
            size="32"
            height="32"
            width="32"
          />
          {{data.session?.user?.email}} | 
          <button (click)="closeSession()">End Session</button>
        </section>
      }
    } 
  `,
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  session$: Observable<SessionState> = this.store.select(SessionStateSelector.session); 
  constructor(
    private store: Store
  ){}

  closeSession() {
    this.store.dispatch(SessionStateActions.close());
  }
}

