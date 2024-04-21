import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section>
      <h1>Products</h1>
    </section>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class ProductsComponent {}
