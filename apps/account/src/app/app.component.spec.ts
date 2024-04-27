import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { SessionEffects, sessionFeature } from '@company/shared/session';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule,
        CommonModule,
        ReactiveFormsModule,
      ],
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
});