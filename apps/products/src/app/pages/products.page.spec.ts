import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { provideState, provideStore } from '@ngrx/store';
import { SessionEffects, sessionFeature } from '@company/shared/session';
import { provideEffects } from '@ngrx/effects';
import { ProductsPageComponent } from './products.page'

describe('AppComponent', () => {
  let component: ProductsPageComponent;  
  let fixture: ComponentFixture<ProductsPageComponent>;  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule],
      providers: [
        provideStore(),    
        provideState(sessionFeature),
        provideEffects([SessionEffects]),        
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsPageComponent);
    component = fixture.componentInstance
    fixture.detectChanges();    
  });

  it('should be created', () => {
    expect(component).toBeDefined();
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    console.log(compiled.innerHTML)
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Products'
    );
  });  
});
