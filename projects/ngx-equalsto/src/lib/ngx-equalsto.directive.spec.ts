import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { EqualstoDirective } from './ngx-equalsto.directive';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  template: `
  <form [formGroup]="exampleForm">
    <input formControlName="password" equalsTo="passwordConfirm">
    <input formControlName="passwordConfirm" equalsTo="password" isConfirm="true">
  </form>
  `
})
class TestMockComponent {
  exampleForm: FormGroup;
}

describe('EqualstoDirective', () => {
  let component: TestMockComponent;
  let fixture: ComponentFixture<TestMockComponent>;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMockComponent, EqualstoDirective ],
      imports: [ ReactiveFormsModule ],
      providers: [ { provide: FormBuilder, useValue: formBuilder } ]
    });
    fixture = TestBed.createComponent(TestMockComponent);
    component = fixture.componentInstance;
    component.exampleForm = formBuilder.group({
      password: null,
      passwordConfirm: null,
    });
    fixture.detectChanges();
  });

  it('should init with valid form', () => {
    expect(component.exampleForm.valid).toBeTruthy();
  });

  it('should get error with patched value', () => {
    component.exampleForm.patchValue({
      password: 'password',
      passwordConfirm: 'different',
    });
    fixture.detectChanges();

    expect(component.exampleForm.valid).toBeFalsy();
    expect(component.exampleForm.get('password').valid).toBeTruthy();
    expect(component.exampleForm.get('passwordConfirm').valid).toBeFalsy();
    expect(component.exampleForm.get('passwordConfirm').errors.equalsTo).toEqual({ valid: false });
  });
});
