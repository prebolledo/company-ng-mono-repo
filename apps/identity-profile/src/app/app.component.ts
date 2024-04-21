import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { ProfileComponent } from '@company/user/profile';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { AppModule } from './app.module';
import { IdentityProfileStateActions } from './state';
import { Observable } from 'rxjs';
import { SessionState, SessionStateActions, SessionStateSelector } from '@company/shared/session';


@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AppModule,
    RouterModule,
    FormComponent,
    ProfileComponent,
    CommonModule,
  ],
  selector: 'app-root',
  template: `
    <section>
    @if ({session: session$ | async}; as data) {
      @if (data.session?.token === undefined) {
        <app-form [title]="title" (sessionStartedEvent)="sessionStartedEvent()" />
      } @else {
        <lib-profile />
      }
    }
    </section>
    <router-outlet></router-outlet>  
  `,
  styleUrl: './app.component.css',
  providers:[],
})
export class AppComponent implements OnInit {
  session$: Observable<SessionState> = this.store.select(SessionStateSelector.session);   
  title = 'Login';

  constructor(
    private store: Store,
  ){}
  
  ngOnInit(): void {
    this.store.dispatch(SessionStateActions.init());
    this.store.dispatch(IdentityProfileStateActions.init());
  }  

  closeSessionEvent() {
    this.store.dispatch(SessionStateActions.close());
  }
  sessionStartedEvent() {
    this.store.dispatch(SessionStateActions.init());
  }
}
