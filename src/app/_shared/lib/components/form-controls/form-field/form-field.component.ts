import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'siu-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: [ './form-field.component.scss' ]
})
export class FormFieldComponent implements OnInit {

  @Input() variant: 'text' | 'multiline' | 'select' | 'multiselect' = 'text';
  @Input() class: string | object;
  @Input() label: string;
  @Input() placeholder: string = '';
  @Input() formGroupParent: FormGroup;
  @Input() controlName: string;
  @Input() msgValidations: any[] = [];
  @Input() rows: number;
  @Input() options: any[] = [];
  @Input() bindLabel: string = 'label';
  @Input() bindValue: string = 'value';
  @Input() bindObject: boolean = false;
  @Input() fullWidth: boolean = true;
  @Input() disabled: boolean = false;


  VARIANT_TYPE = {
    text: 'text',
    multiline: 'multiline',
    select: 'select',
    multiselect: 'multiselect'
  };

  constructor() { }

  ngOnInit() {
  }
  /*
    get showError(): boolean {
      return this.formGroupParent.get(this.controlName).invalid &&
        (this.formGroupParent.get(this.controlName).dirty || this.formGroupParent.get(this.controlName).touched);
    }*/

  handleChange = (e) => {
    console.log(e);
  }

}
