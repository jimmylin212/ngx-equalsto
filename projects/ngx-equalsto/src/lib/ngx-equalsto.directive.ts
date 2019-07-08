import { Directive, Attribute } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[equalsTo]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: EqualstoDirective, multi: true },
  ],
})

export class EqualstoDirective implements Validator {

  constructor(
    @Attribute('equalsTo') public equalsTo: string,
  ) {}

  validate(control: AbstractControl) {
    const controlValue = control.value;
    const compareToCtrl = control.parent.get(this.equalsTo);
    const errorObj = { equalsTo: { valid: false } };

    if (compareToCtrl && control.dirty && compareToCtrl.dirty && controlValue !== compareToCtrl.value) {
      control.setErrors(errorObj);
      return errorObj;
    } else if (compareToCtrl && control.dirty && compareToCtrl.dirty && controlValue === compareToCtrl.value) {
      if (control.errors && 'equalsTo' in control.errors) {
        delete control.errors.equalsTo;
        if (Object.keys(control.errors).length === 0) {
          control.setErrors(null);
        }
      }
    }
    return null;
  }
}
