import { Observable } from 'rxjs';
import { BuildGridButton } from '@siu/shared';
import { IDataGridDefinition, IDataGridSource, IDataGridEditableDefinition } from '@siu/shared';
import { IPerson } from '../../interfaces/person.interface';

export const buildNewFormBuscar = (): IFormBuscar => ({
  name: null,
  surname: null,
  email: null,
  age: null
});

export interface IFormBuscar {
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

export interface IGridEditablePersonas {
  isLoading: boolean;
  error: any,
  definition: IDataGridEditableDefinition,
  source: IDataGridSource<IPerson>
}

export interface IUiTablas {

}

export class TablasStoreModel {

  ui: IUiTablas = {};

  formBuscar: IFormBuscar = buildNewFormBuscar();

  gridPersonas: IGridPersonas = {
    isLoading: false,
    error: null,
    definition: {
      columns: [
        { label: 'Nombre', field: 'name' },
        { label: 'Apellidos', field: 'surname' },
        { label: 'Email', field: 'email' },
        { label: 'Age', field: 'age' },
        { label: 'Custom', field: 'columna-personalizada', template: 'columna-personalizada' },
        { label: 'Custom 2', field: 'columna-personalizada-2', template: 'columna-personalizada-2' },
        {
          label: 'Botones', field: 'buttons', buttons: [
            BuildGridButton.CONSULTAR(function (item) { return item.age == 26 }),
            BuildGridButton.EDITAR(null, item => item.age > 30),
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
      orderBy: 'name',
      orderDir: 'asc'
    }
  };

  gridEditablePersonas: IGridEditablePersonas = {
    isLoading: false,
    error: null,
    definition: {
      columns: [
        { label: 'Nombre', field: 'name', editable: false },
        { label: 'Apellidos', field: 'surname', editable: true, controlType: 'text' },
        { label: 'Email', field: 'email', editable: true, controlType: 'text' },
        {
          label: 'Age',
          field: 'age',
          editable: true,
          controlType: 'select',
          selectOptions: () => this.getDataCombo(),
          onChange: (item, setOptsFn) => {
            this.getDataCombo2().subscribe(value => setOptsFn('age', value)).unsubscribe();
          }
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
  }


  getDataCombo = (): Observable<{ value, label }[]> => {
    return new Observable(observer => {
      observer.next([
        { value: 30, label: '30' },
        { value: 31, label: '31' },
        { value: 32, label: '32' }
      ]);
    });
  }

  getDataCombo2 = (): Observable<{ value, label }[]> => {
    return new Observable(observer => {
      observer.next([
        { value: 25, label: '25' },
        { value: 34, label: '34' },
        { value: 22, label: '22' },
        { value: 33, label: '33' }
      ]);
    });
  }
}
