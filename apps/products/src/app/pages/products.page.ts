import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProductsComponent } from '../components/products.component';
import { Store } from '@ngrx/store';
import { sessionFeature } from '@company/shared/session';

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
  user$ = this.store.select(sessionFeature.selectUser); 
  constructor(
    private store: Store,
  ){}

  ngOnInit(): void {
    this.user$.subscribe((user) => {
      if (user) {
        this.discount = 10;
      }
    });
  }
}
