import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { SessionEffects, sessionFeature } from '@company/shared/session';
import {Environment} from './environments/environment';
import { IEnvironment } from './environments/types';

describe('AppComponent', () => {
  const mockEnvironment: IEnvironment = {
    production: false,
    tenant: 'ar'
  };
  let fixture: ComponentFixture<AppComponent>;  
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
        { provide: Environment, useValue: mockEnvironment }       
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