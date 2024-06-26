import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SessionStateActions } from '@company/shared/session';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,  
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit{ 
  constructor(
    private store: Store,
  ){}

  ngOnInit(): void {
   this.store.dispatch(SessionStateActions.init()); 
  }
}
