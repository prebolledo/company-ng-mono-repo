import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { provideState, provideStore } from '@ngrx/store';
import { SessionEffects, sessionFeature } from '@company/shared/session';
import { provideEffects } from '@ngrx/effects';
import { ProductsPageComponent } from './pages/products'

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule],
      providers: [
        provideStore(),    
        provideState(sessionFeature),
        provideEffects([SessionEffects]),        
      ],
    }).compileComponents();
  });

  it('should be created', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.innerHTML).toContain(
      '<router-outlet></router-outlet>'
    );
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ProductsPageComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Products'
    );
  });  
});
