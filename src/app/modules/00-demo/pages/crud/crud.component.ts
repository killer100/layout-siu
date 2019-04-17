import { FormPersonaComponent } from './components/forms/form-persona/form-persona.component';
import { Component, OnInit } from '@angular/core';
import { CrudStore } from './store/crud.store';
import { IDataGridEvent, IDataGridButtonEvent } from '@siu/shared';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: [ './crud.component.sass' ],
  providers: [
    CrudStore
  ]
})
export class CrudComponent implements OnInit {

  readonly state$ = this.crudStore.state$;

  constructor(private crudStore: CrudStore, public dialog: MatDialog) { }

  ngOnInit() {
    this.crudStore.actionGridPersonas.asyncFetchPersons();
  }

  openModalUpdate = (id: string) => {

    this.crudStore.actionModalPersonas.setModalEditar(id);

    const dialogRef = this.dialog.open(FormPersonaComponent, {
      disableClose: true
    });

    dialogRef.componentInstance.crudStore = this.crudStore;

    dialogRef.afterClosed().subscribe(() => {
      this.crudStore.actionModalPersonas.resetModalPersona();
    })
  }

  handleClickNuevo = () => {

    const dialogRef = this.dialog.open(FormPersonaComponent, {
      disableClose: true
    });

    dialogRef.componentInstance.crudStore = this.crudStore;

    dialogRef.afterClosed().subscribe(() => {
      this.crudStore.actionModalPersonas.resetModalPersona();
    })
  }

  handleLoadData = (e: IDataGridEvent) => {
    this.crudStore.actionGridPersonas.asyncFetchPersons({
      page: e.page,
      pageSize: e.pageSize,
      orderBy: e.orderBy,
      orderDir: e.orderDir
    });
  }

  handleClickButton = (e: IDataGridButtonEvent) => {
    switch (e.action) {
      case 'CONSULTAR':
        break;
      case 'EDITAR':
        this.openModalUpdate(e.item._id);
        break;
      case 'BORRAR':
        break;
    }
  }
}
