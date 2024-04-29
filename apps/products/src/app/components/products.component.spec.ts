import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { provideState, provideStore } from '@ngrx/store';
import { SessionEffects, sessionFeature } from '@company/shared/session';
import { provideEffects } from '@ngrx/effects';
import { ProductsComponent } from './products.component'

describe('AppComponent', () => {
  let component: ProductsComponent;  
  let fixture: ComponentFixture<ProductsComponent>;  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule],
      providers: [
        provideStore(),    
        provideState(sessionFeature),
        provideEffects([SessionEffects]),        
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance
    fixture.detectChanges();    
  });

  it('should be created', () => {
    expect(component).toBeDefined();
  });
});
