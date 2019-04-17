import { map, distinctUntilChanged } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { IDataGridEvent, IDataGridButtonEvent, IDataGridEditableSaveEvent } from '@siu/shared';
import { TablasStore } from './tablas.store';

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: [ './tablas.component.sass' ],
  providers: [ TablasStore ]
})
export class TablasComponent implements OnInit {

  readonly state$ = this.store.state$.pipe(map(state => state));

  constructor(private store: TablasStore) { }

  ngOnInit() {
    this.store.asyncActionFetchPersons();
    this.store.asyncActionFetchEditablePersons();
  }

  handleLoadData = (e: IDataGridEvent) => {
    this.store.asyncActionFetchPersons({
      page: e.page,
      pageSize: e.pageSize,
      orderBy: e.orderBy,
      orderDir: e.orderDir
    });
  }

  handleChangeName = (e, index) => {
    this.store.actionChangePersonName(e.name, index);
  }

  handleClickButton = (e: IDataGridButtonEvent) => {
    switch (e.action) {
      case 'CONSULTAR':
        alert(`click en consultar fila: ${e.index}`);
        break;

      case 'EDITAR':
        alert(`click en editar fila: ${e.index}`);
        break;

      case 'ELIMINAR':
        alert(`click en eliminar fila: ${e.index}`);
        break;
    }
  }

  handleLoadDataPersonsEditable = (e: IDataGridEvent) => {
    this.store.asyncActionFetchEditablePersons({
      page: e.page,
      pageSize: e.pageSize,
      orderBy: e.orderBy,
      orderDir: e.orderDir
    });
  }

  handleSaveItemEditable = (e: IDataGridEditableSaveEvent) => {
    console.log(e);
  }
}
