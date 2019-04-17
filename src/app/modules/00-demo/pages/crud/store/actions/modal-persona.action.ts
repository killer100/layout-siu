import { formType } from '@siu/shared';
import { IPerson } from './../../../../interfaces/person.interface';
import update from 'immutability-helper';
import { IModalPersona, buildNewPersona } from '../crud.store.model';
import { PersonService } from 'src/app/modules/00-demo/services/person.service';

export class CrudModalPersonaActions {

  constructor(
    private getState: () => IModalPersona,
    private setState: (newState: IModalPersona) => void,
    private personService: PersonService) {
  }

  getPersonStart = () => {
    const state = this.getState();
    this.setState({ ...state, isLoading: true, error: null });
  }

  getPersonSuccess = (value: IPerson) => {
    const state = this.getState();
    const newState = update(state, {
      isLoading: { $set: false },
      persona: { $set: value }
    });
    this.setState(newState);
  }

  getPersonError = (error: any) => {
    const state = this.getState();
    const newState = update(state, {
      isLoading: { $set: false },
      error: { $set: error }
    });
    this.setState(newState);
  }

  setValueFormPersona = (newValue: IPerson) => {
    const state = this.getState();

    const newState = update(state, {
      persona: { $set: newValue }
    });

    this.setState(newState);
  }

  resetModalPersona = () => {

    this.setState({
      idPersona: null,
      persona: buildNewPersona(),
      isLoading: false,
      error: null,
      type: formType.REGISTRAR
    });

  }

  savePersonSuccess = () => {
    const state = this.getState();

    this.setState({
      ...state,
      isLoading: false,
      error: null
    });
  }

  savePersonError = (error) => {
    const state = this.getState();

    this.setState({
      ...state,
      isLoading: false,
      error: error
    });
  }

  setModalConsultar = (id: string) => {
    const state = this.getState();
    this.setState({
      ...state,
      idPersona: id,
      type: formType.CONSULTAR
    });
  }

  setModalEditar = (id: string) => {
    const state = this.getState();
    this.setState({
      ...state,
      idPersona: id,
      type: formType.EDITAR
    });
  }

  //====================================================
  // ACCIONES ASINCRONAS
  //====================================================

  asyncGetPerson = (
    id: string) => {
    this.getPersonStart();
    this.personService.getPerson(id).subscribe(x => {
      this.getPersonSuccess(x);
    }, (error) => {
      this.getPersonError(error);
    });
  }

  asyncSavePerson = (person: IPerson) => {
    return new Promise((resolve, reject) => {
      this.getPersonStart();
      this.personService.savePerson(person).subscribe(
        response => {
          this.savePersonSuccess();
          resolve();
        },
        error => {
          this.savePersonError(error);
          reject();
        }
      );
    });

  }

}
