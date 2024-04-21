import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { User } from '@company/shared/models';
import { LoginFormStateActions } from '../../state';
import { SessionState, SessionStateActions, SessionStateSelector } from '@company/shared/session';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, CommonModule],
  template: `
    <h1>{{title}}</h1>
    <form>
      <div>
      <label>
        Email: <br />
        <input type="text" name="email" [(ngModel)]="email" />
      </label>
      </div>
      <div>
      <label>
        Password: <br />
        <input type="text" name="password" [(ngModel)]="password" />
      </label>
      </div>
      <div>
        <button (click)="send($event)" type="button" role="submit" name="send">Send</button>
      </div>
    </form>  
  `,
  styleUrl: './form.component.css',
  providers:[AuthService],
})
export class FormComponent {
  @Input() title = 'Form';  
  @Output() sessionStartedEvent: EventEmitter<void> = new EventEmitter();  
  email = '';
  password = '';  
  session$: Observable<SessionState> = this.store.select(SessionStateSelector.session);
  constructor(
    private authService: AuthService,
    private store: Store,
  ) {}  
    
  send($event: Event){
    $event.preventDefault();
    if(this.email === ""|| this.password === "" ) {
      return;
    }
    return this.authService.auth(
      this.email,
      this.password,
    ).subscribe((user: User) => {
      this.store.dispatch(LoginFormStateActions.addUser({user}))
      this.store.dispatch(SessionStateActions.register({user, token: 'token from auth service'}));  
      this.sessionStartedEvent.emit();
    });
  }  
}
