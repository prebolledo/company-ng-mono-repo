import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginFormComponent } from './form.component';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { SessionEffects, sessionFeature } from '@company/shared/session';

describe('FormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideStore(),    
        provideState(sessionFeature),
        provideEffects([SessionEffects]),
      ],        
    }).compileComponents();

    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should be created', () => {
    const fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    component.title = 'Login';
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Login');
  });  
});
