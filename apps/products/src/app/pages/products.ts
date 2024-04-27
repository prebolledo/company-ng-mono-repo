import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProductsComponent } from '../components/products.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '@company/shared/models';
import { SessionStateSelector } from '@company/shared/session';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ProductsComponent
  ],
  selector: 'app-products-page',
  template: `
    <h1>{{title}}</h1>
    <app-products [discount]="discount" />
  `,
  providers:[],
})
export class ProductsPageComponent implements OnInit{
  title = 'Products';
  discount = 0
  user$: Observable<User | null> = this.store.select(SessionStateSelector.user); 
  constructor(
    private store: Store,
  ){}

  ngOnInit(): void {
    this.user$.subscribe((user: User | null) => {
      if (user) {
        this.discount = 10;
      }
    });
  }
}
