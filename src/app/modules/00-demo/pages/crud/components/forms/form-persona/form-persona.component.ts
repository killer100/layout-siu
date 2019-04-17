import { CrudStore } from '../../../store/crud.store';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { IModalPersona } from '../../../store/crud.store.model';
import { Observable, Subscription } from 'rxjs';
import { IMsgValidations, ValidateFormFields, formType, ToastService, AlertService } from '@siu/shared';

@Component({
  selector: 'app-form-persona',
  templateUrl: './form-persona.component.html',
  styleUrls: [ './form-persona.component.sass' ],

})
export class FormPersonaComponent implements OnInit {

  form: FormGroup;

  crudStore: CrudStore;

  state$: Observable<IModalPersona>;

  subscriptions: Subscription[];

  msgValidations: {
    name: IMsgValidations[],
    surname: IMsgValidations[],
    email: IMsgValidations[],
    gender: IMsgValidations[],
    phone?: IMsgValidations[],
    address: IMsgValidations[],
    birthday: IMsgValidations[],
  };

  constructor(public dialogRef: MatDialogRef<FormPersonaComponent>,
    private formBuilder: FormBuilder, private toast: ToastService, private alert: AlertService) {
  }

  ngOnInit() {
    this.state$ = this.crudStore.state$.pipe(map(x => x.modalPersona), distinctUntilChanged());
    this.buildForm();
    this.buildValidations();
    const { type } = this.crudStore.state.modalPersona;

    if (type == formType.EDITAR || type == formType.CONSULTAR) {
      this.crudStore.actionModalPersonas.asyncGetPerson(this.crudStore.state.modalPersona.idPersona);
    }

    this.subscribeToState();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscriptions.forEach(x => {
      x.unsubscribe();
    });
  }

  subscribeToState = () => {
    const subs1 = this.crudStore.state$.pipe(map(x => x.modalPersona.persona), distinctUntilChanged()).subscribe(x => {
      //console.log("asdas", x);
      this.form.patchValue(x);
    });
    this.subscriptions = [ subs1 ];
  }

  buildForm = () => {
    const { persona } = this.crudStore.state.modalPersona;
    this.form = this.formBuilder.group({
      name: [ persona.name, [ Validators.required ] ],
      surname: [ persona.surname, [ Validators.required ] ],
      //gender: [ persona.gender, [ Validators.required ] ],
      email: [ persona.email, [ Validators.required, Validators.email ] ],
      phone: [ persona.phone, [] ],
      address: [ persona.address, [ Validators.required ] ],
      //birthday: [ persona.birthday, [ Validators.required ] ]
    });
  }

  buildValidations = () => {
    this.msgValidations = {
      name: [
        { name: 'required', message: 'El campo es requerido' }
      ],
      surname: [
        { name: 'required', message: 'Apellidos es requerido' }
      ],
      gender: [
        { name: 'required', message: 'Genero es requerido' }
      ],
      email: [
        { name: 'required', message: 'El email es requerido' },
        { name: 'email', message: 'El email no es válido' }
      ],
      address: [
        { name: 'required', message: 'Dirección es requerido' }
      ],
      birthday: [
        { name: 'required', message: 'Fecha de nacimiento es requerido' }
      ]
    };
  }

  handleSubmit = () => {
    ValidateFormFields(this.form);
    if (!this.form.valid)
      return false;
    this.crudStore.actionModalPersonas.asyncSavePerson(this.form.value).then(() => {
      this.crudStore.actionGridPersonas.asyncFetchPersons();
      this.toast.success('Persona guardada!');
      this.dialogRef.close();
    }).catch(() => {
      const { error } = this.crudStore.state.modalPersona;
      this.toast.error('Ocurrió un error! ' + error.error);
    });
  }

  handleClose = () => {
    this.alert.open('Se va a cerrar el formulario ¿Continuar?', null, { confirm: true })
      .then(confirm => {
        if (confirm) {
          this.dialogRef.close();
        }
      });
  }

}
