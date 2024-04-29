import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section>
      % discount: {{discount}}
    </section>
  `,
  styles: [],
})
export class ProductsComponent {
  @Input() discount = 0
}
