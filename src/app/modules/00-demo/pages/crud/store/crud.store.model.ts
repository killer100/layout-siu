import { BuildGridButton } from '@siu/shared';
import { IDataGridDefinition, IDataGridSource } from '@siu/shared';
import { IPerson } from '../../../interfaces/person.interface';
import { formType } from '@siu/shared/lib/enums/form.enum';

export const buildNewFormBuscarPersonas = (): IFormBuscarPersonas => ({
  name: null,
  surname: null,
  email: null,
  age: null
});

export const buildNewPersona = (): IPerson => ({
  _id: null,
  guid: null,
  name: null,
  surname: null,
  gender: null,
  email: null,
  phone: null,
  address: null,
  birthday: null,
  age: null
});

export interface IFormBuscarPersonas {
  name: string;
  surname: string;
  email: string;
  age: number;
}

export interface IGridPersonas {
  isLoading: boolean;
  error: any,
  definition: IDataGridDefinition,
  source: IDataGridSource<IPerson>
}

export interface IModalPersona {
  isLoading: boolean;
  error: any;
  type: formType;
  persona: IPerson;
  idPersona?: string;
}

export class CrudStoreModel {

  formBuscar: IFormBuscarPersonas = buildNewFormBuscarPersonas();

  modalPersona: IModalPersona = {
    error: null,
    isLoading: false,
    type: formType.REGISTRAR,
    persona: buildNewPersona(),
    idPersona: null
  };

  gridPersonas: IGridPersonas = {
    isLoading: false,
    error: null,
    definition: {
      columns: [
        { label: 'Nombre', field: 'name' },
        { label: 'Apellidos', field: 'surname' },
        { label: 'Email', field: 'email' },
        { label: 'Age', field: 'age' },
        { label: 'F. Nacimiento', field: 'birthday', isDatetime: true },
        {
          label: 'Acciones', field: 'buttons', buttons: [
            BuildGridButton.CONSULTAR(),
            BuildGridButton.EDITAR(),
            BuildGridButton.ELIMINAR(),
          ]
        }
      ]
    },
    source: {
      items: [],
      page: 1,
      pageSize: 10,
      total: 0,
      orderBy: null,
      orderDir: null
    }
  };

}
