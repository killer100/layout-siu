import { FormGroup, FormControl } from '@angular/forms';

export function ValidateFormFields(formGroup: FormGroup) {
  Object.keys(formGroup.controls).forEach(field => {
    const control = formGroup.get(field);
    if (control instanceof FormControl) {
      control.markAsTouched();
    } else if (control instanceof FormGroup) {
      ValidateFormFields(control);
    }
  });
}
