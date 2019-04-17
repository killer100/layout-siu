import { PersonService } from '../../../services/person.service';
import { CrudStoreModel, buildNewFormBuscarPersonas } from './crud.store.model';
import { Injectable, OnInit } from '@angular/core';
import { Store } from '@app/core/store/store';
import update from 'immutability-helper';
import { CrudModalPersonaActions } from './actions/modal-persona.action';
import { CrudGridPersonasActions } from './actions/grid-personas.action';

@Injectable()
export class CrudStore extends Store<CrudStoreModel> {

  actionModalPersonas: CrudModalPersonaActions;
  actionGridPersonas: CrudGridPersonasActions;

  constructor(private personService: PersonService) {

    super(new CrudStoreModel());

    this.actionModalPersonas = new CrudModalPersonaActions(
      this.buildScopedGetState('modalPersona'),
      this.buildScopedSetState('modalPersona'),
      personService
    );

    this.actionGridPersonas = new CrudGridPersonasActions(
      this.buildScopedGetState('gridPersonas'),
      this.buildScopedSetState('gridPersonas'),
      personService
    );

  }

  //====================================================
  // ACCIONES QUE MODIFICAN GRID PERSONAS
  //====================================================


  //====================================================
  // ACCIONES QUE MODIFICAN FORMULARIO BUSQUEDA PERSONAS
  //====================================================

  actionSetValueFormBusqueda = (value) => {
    this.setState({ ...this.state, formBuscar: value });
  }

  actionClearFormBusqueda = () => {
    this.setState({ ...this.state, formBuscar: buildNewFormBuscarPersonas() });
  }

  //====================================================
  // ACCIONES QUE MODIFICAN MODAL PERSONAS
  //====================================================

}
