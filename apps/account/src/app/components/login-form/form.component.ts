import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { SessionStateActions } from '@company/shared/session';

@Component({
  selector: 'app-login-form',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    CommonModule,
  ],
  template: `
    <h2>{{title}}</h2>
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
  providers:[],
})
export class LoginFormComponent {
  @Input() title = 'Form';  
  email = '';
  password = '';
  constructor(
    private store: Store,
  ) {}  
    
  send($event: Event){
    $event.preventDefault();
    if(this.email === ""|| this.password === "" ) {
      return;
    }
    this.store.dispatch(SessionStateActions.auth({
      email: this.email,
      password: this.password,
    }))
  }  
}
