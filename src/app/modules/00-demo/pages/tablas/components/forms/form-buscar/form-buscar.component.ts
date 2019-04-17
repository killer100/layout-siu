import { Component, OnInit, OnDestroy } from '@angular/core';
import { TablasStore } from '../../../tablas.store';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IMsgValidations } from '@siu/shared';
import { ValidateFormFields } from '@siu/shared';

@Component({
  selector: 'app-form-buscar',
  templateUrl: './form-buscar.component.html',
  styleUrls: [ './form-buscar.component.sass' ]
})
export class FormBuscarComponent {

  form: FormGroup;

  subscription: Subscription;

  msgValidations: any;

  //readonly state$ = this.tablasStore.state$.pipe(map(state => state.formBuscar), distinctUntilChanged());

  readonly state$ = this.tablasStore.state$.pipe(map(state => state), distinctUntilChanged());

  constructor(private tablasStore: TablasStore, private formBuilder: FormBuilder) {
    this.msgValidations = this.buildValidationMessages();
    this.form = this.formBuilder.group({
      name: [ this.tablasStore.state.formBuscar.name ],
      surname: [ this.tablasStore.state.formBuscar.surname ],
      email: [ this.tablasStore.state.formBuscar.email ],
      age: [ this.tablasStore.state.formBuscar.age ]
    });
  }

  buildValidationMessages = () => ({
    name: [
      { name: 'required', message: 'El campo es requerido' }
    ],
    surname: [
      { name: 'required', message: 'Apellidos es requerido' }
    ],
    email: [
      { name: 'required', message: 'El email es requerido' },
      { name: 'email', message: 'El email no es válido' }
    ],
    age: [
      { name: 'required', message: 'El campo es requerido' }
    ]
  });

  handleSubmit = () => {
    ValidateFormFields(this.form);
    if (this.form.invalid)
      return false;
    this.tablasStore.actionSetValueFormBusqueda(this.form.value);
    this.tablasStore.asyncActionFetchPersons();
  }

  handleReset = () => {
    this.tablasStore.actionClearFormBusqueda();
    this.form.patchValue(this.tablasStore.state.formBuscar);
    if (this.form.invalid)
      return false;
    this.tablasStore.asyncActionFetchPersons();
  }

  handleResetToLastValue = () => {
    this.form.patchValue(this.tablasStore.state.formBuscar);
    if (this.form.invalid)
      return false;
    this.tablasStore.asyncActionFetchPersons();
  }

}
