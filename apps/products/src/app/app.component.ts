import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products.component';
import { AppModule } from './app.module';
import { ProfileComponent } from '@company/user/profile';
import { Store } from '@ngrx/store';
import { SessionState, SessionStateActions, SessionStateSelector } from '@company/shared/session';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,  
  standalone: true,
  imports: [
    CommonModule,
    ProductsComponent,
    RouterModule,
    AppModule,
    ProfileComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit{
  session$: Observable<SessionState> = this.store.select(SessionStateSelector.session);   
  constructor(
    private store: Store,
  ){}

  ngOnInit(): void {
   this.store.dispatch(SessionStateActions.init()); 
  }
}
