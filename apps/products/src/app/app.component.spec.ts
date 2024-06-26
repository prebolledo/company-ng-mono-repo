import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { provideState, provideStore } from '@ngrx/store';
import { SessionEffects, sessionFeature } from '@company/shared/session';
import { provideEffects } from '@ngrx/effects';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule],
      providers: [
        provideStore(),    
        provideState(sessionFeature),
        provideEffects([SessionEffects]),        
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();    
  });

  it('should be created', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.innerHTML).toContain(
      '<router-outlet></router-outlet>'
    );
  });
});
