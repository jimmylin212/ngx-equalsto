import { Directive, Attribute, forwardRef } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[equalsTo]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualstoDirective), multi: true },
  ],
})

export class EqualstoDirective implements Validator {

  constructor(
    @Attribute('equalsTo') public equalsTo: string,
    @Attribute('isConfirm') public isConfirm: string,
  ) {}

  validate(control: AbstractControl) {
    const controlValue = control.value;
    const compareToCtrl = control.parent.get(this.equalsTo);
    const isConfirm = this.isConfirm === 'true' ? true : false;
    const errorObj = { equalsTo: { valid: false } };

    if (compareToCtrl && controlValue !== compareToCtrl.value && isConfirm) {
      return errorObj;
    }

    if (compareToCtrl && controlValue === compareToCtrl.value && !isConfirm) {
      if (compareToCtrl.errors !== null) {
        delete compareToCtrl.errors.equalsTo;
        if (!Object.keys(compareToCtrl.errors).length) {
          compareToCtrl.setErrors(null);
        }
      }
    }

    if (compareToCtrl && controlValue !== compareToCtrl.value && !isConfirm) {
      compareToCtrl.setErrors(errorObj);
    }

    return null;
  }
}
