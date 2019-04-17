import { PersonService } from '../../services/person.service';
import { TablasStoreModel, IFormBuscar, buildNewFormBuscar } from './tablas.store.model';
import { Injectable, OnInit } from '@angular/core';
import { Store } from '@app/core/store/store';
import update from 'immutability-helper';
import { IDataGridPageRequest } from '@siu/shared';

@Injectable()
export class TablasStore extends Store<TablasStoreModel> {

  constructor(private personService: PersonService) {

    super(new TablasStoreModel());

  }
  //====================================================
  // ACCIONES QUE MODIFICAN GRID PERSONAS
  //====================================================

  actionFetchPersonsBegin = () => {
    this.setState({ ...this.state, gridPersonas: { ...this.state.gridPersonas, isLoading: true, error: null } });
  };

  actionFetchPersonSuccess = (items, total, page, pageSize, orderBy, orderByDir) => {

    const new_state = update(this.state, {
      gridPersonas: {
        isLoading: { $set: false },
        source: {
          items: { $set: items },
          total: { $set: total },
          page: { $set: page },
          pageSize: { $set: pageSize },
          orderBy: { $set: orderBy },
          orderDir: { $set: orderByDir }
        }
      },
    });

    this.setState(new_state);
  };

  actionFetchPersonError = (error: any) => {
    const new_state = update(this.state, {
      gridPersonas: {
        isLoading: { $set: false },
        error: { $set: error },
        source: { items: { $set: [] } }
      },
    });
    this.setState(new_state);
  }

  actionChangePersonName = (name, index) => {

    const new_state = update(this.state, {
      gridPersonas: {
        source: { items: { [ index ]: { name: { $set: name } } } }
      },
    });

    this.setState(new_state);
  }

  //====================================================
  // ACCIONES QUE MODIFICAN FORMULARIO BUSQUEDA PERSONAS
  //====================================================

  actionSetValueFormBusqueda = (value) => {
    this.setState({ ...this.state, formBuscar: value });
  }

  actionClearFormBusqueda = () => {
    this.setState({ ...this.state, formBuscar: buildNewFormBuscar() });
  }

  //====================================================
  // ACCIONES QUE MODIFICAN GRID PERSONAS EDITABLE
  //====================================================

  actionFetchPersonsEditableBegin = () => {
    this.setState({
      ...this.state, gridEditablePersonas: {
        ...this.state.gridEditablePersonas,
        isLoading: true,
        error: null
      }
    });
  };

  actionFetchPersonsEditableSuccess = (items, total, page, pageSize, orderBy, orderByDir) => {

    const new_state = update(this.state, {
      gridEditablePersonas: {
        isLoading: { $set: false },
        source: {
          items: { $set: items },
          total: { $set: total },
          page: { $set: page },
          pageSize: { $set: pageSize },
          orderBy: { $set: orderBy },
          orderDir: { $set: orderByDir }
        }
      },
    });

    this.setState(new_state);
  };

  actionFetchPersonsEditableError = (error: any) => {
    const new_state = update(this.state, {
      gridEditablePersonas: {
        isLoading: { $set: false },
        error: { $set: error },
        source: { items: { $set: [] } }
      },
    });
    this.setState(new_state);
  }


  //====================================================
  // ACCIONES ASINCRONAS
  //====================================================

  asyncActionFetchPersons = (
    pageRequest: IDataGridPageRequest = {
      page: this.state.gridPersonas.source.page,
      pageSize: this.state.gridPersonas.source.pageSize,
      orderBy: this.state.gridPersonas.source.orderBy,
      orderDir: this.state.gridPersonas.source.orderDir,
    },
    filters = null) => {
    this.actionFetchPersonsBegin();
    this.personService.fetchPersons(pageRequest).subscribe(x => {
      this.actionFetchPersonSuccess(
        x.persons,
        x.total,
        pageRequest.page,
        pageRequest.pageSize,
        pageRequest.orderBy,
        pageRequest.orderDir);
    }, (error) => {
      this.actionFetchPersonError(error);
    });
  }

  asyncActionFetchEditablePersons = (
    pageRequest: IDataGridPageRequest = {
      page: this.state.gridEditablePersonas.source.page,
      pageSize: this.state.gridEditablePersonas.source.pageSize,
      orderBy: this.state.gridEditablePersonas.source.orderBy,
      orderDir: this.state.gridEditablePersonas.source.orderDir,
    },
    filters = null) => {
    this.actionFetchPersonsEditableBegin();
    this.personService.fetchPersons(pageRequest).subscribe(x => {
      this.actionFetchPersonsEditableSuccess(
        x.persons,
        x.total,
        pageRequest.page,
        pageRequest.pageSize,
        pageRequest.orderBy,
        pageRequest.orderDir);
    }, (error) => {
      this.actionFetchPersonsEditableError(error);
    });
  }
}
