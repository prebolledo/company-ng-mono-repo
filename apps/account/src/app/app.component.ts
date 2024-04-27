import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { SessionStateActions } from '@company/shared/session';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styleUrl: './app.component.css',
  providers:[],
})
export class AppComponent  implements OnInit {
  constructor(
    private store: Store,
  ){}

  ngOnInit(): void {
    this.store.dispatch(SessionStateActions.init()); 
  }  
}
