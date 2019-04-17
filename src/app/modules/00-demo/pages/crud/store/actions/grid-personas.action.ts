import update from 'immutability-helper';
import { PersonService } from './../../../../services/person.service';
import { IGridPersonas } from '../crud.store.model';
import { IDataGridPageRequest } from '@siu/shared';

export class CrudGridPersonasActions {

  constructor(
    private getState: () => IGridPersonas,
    private setState: (newState: IGridPersonas) => void,
    private personService: PersonService) {
  }

  fetchPersonsBegin = () => {
    const state = this.getState();
    this.setState({ ...state, isLoading: true, error: null });
  };

  fetchPersonsSuccess = (items, total, page, pageSize, orderBy, orderByDir) => {

    const state = this.getState();

    const new_state = update(state, {
      isLoading: { $set: false },
      source: {
        items: { $set: items },
        total: { $set: total },
        page: { $set: page },
        pageSize: { $set: pageSize },
        orderBy: { $set: orderBy },
        orderDir: { $set: orderByDir }
      },
    });

    this.setState(new_state);
  };

  fetchPersonsError = (error: any) => {
    const state = this.getState();
    const new_state = update(state, {
      isLoading: { $set: false },
      error: { $set: error },
      source: { items: { $set: [] } }
    });

    this.setState(new_state);
  }

  //====================================================
  // ACCIONES ASINCRONAS
  //====================================================

  asyncFetchPersons = (
    pageRequest: IDataGridPageRequest = {
      page: this.getState().source.page,
      pageSize: this.getState().source.pageSize,
      orderBy: this.getState().source.orderBy,
      orderDir: this.getState().source.orderDir,
    },
    filters = null) => {
    this.fetchPersonsBegin();
    this.personService.fetchPersons(pageRequest).subscribe(x => {
      this.fetchPersonsSuccess(
        x.persons,
        x.total,
        pageRequest.page,
        pageRequest.pageSize,
        pageRequest.orderBy,
        pageRequest.orderDir);
    }, (error) => {
      this.fetchPersonsError(error);
    });
  }
}
