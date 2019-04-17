import {
  IDataGridEditableDefinition,
  IDataGridSource,
  IDataGridDefinition,
  IDataGridColumnDefinition,
  IDataGridEvent,
  IDataGridButtonEvent,
  IDataGridEditableSaveEvent
} from './../../../interfaces/data-grid.interface';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { BuildGridButton } from '../../../functions/grid-buttons';
import { Observable } from 'rxjs';

@Component({
  selector: 'siu-data-grid-editable',
  templateUrl: './data-grid-editable.component.html',
  styleUrls: [ './data-grid-editable.component.sass' ]
})
export class DataGridEditableComponent implements OnInit, OnChanges {

  @Input() loading: boolean;
  @Input() definition: IDataGridEditableDefinition;
  @Input() source: IDataGridSource<any>;
  @Output('on-load-data') onLoadDataEvent: EventEmitter<IDataGridEvent> = new EventEmitter();
  @Output('on-save') onSaveDataEvent: EventEmitter<IDataGridEditableSaveEvent> = new EventEmitter();

  gridDefinition: IDataGridDefinition;
  gridSource: IDataGridSource<any>;

  tempValues: [];

  displayedColumns: string[];

  rowsValues: { value: any, edit: boolean, options?: any }[];

  selectOptions = {};

  constructor() {
  }

  ngOnInit() {
    /*this.definition.columns.filter(x => x.selectOptions).forEach(x => {
      this.selectOptions[ x.field ] = [ ...x.selectOptions ];
    });*/

    const columns = this.definition.columns.map((x): IDataGridColumnDefinition => {
      return {
        label: x.label,
        field: x.field,
        template: 'template-' + x.field
      };
    });

    columns.push({
      label: 'Acciones',
      field: 'buttons-editable',
      buttons: [
        BuildGridButton.EDITAR(null, (item, rowIndex) => this.rowsValues[ rowIndex ].edit),
        BuildGridButton.GUARDAR(null, (item, rowIndex) => !this.rowsValues[ rowIndex ].edit),
        BuildGridButton.CANCELAR(null, (item, rowIndex) => !this.rowsValues[ rowIndex ].edit)
      ],

    });

    this.gridDefinition = {
      columns: [
        ...columns
      ]
    }

    this.displayedColumns = this.gridDefinition.columns.map(x => x.field);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.source) {
      this.rowsValues = this.source.items.map(x => ({
        edit: false,
        value: JSON.parse(JSON.stringify(x)),
        options: []
      }));
    }
  }

  handleLoadData = (e: IDataGridEvent) => {
    this.onLoadDataEvent.emit(e);
  }

  handleClickButton = (e: IDataGridButtonEvent) => {
    switch (e.action) {
      case 'EDITAR':
        this.rowsValues[ e.index ].edit = true;
        this.rowsValues[ e.index ].options = {};
        this.definition.columns.filter(x => x.selectOptions).map(col => {
          if (Array.isArray(col.selectOptions)) {
            this.rowsValues[ e.index ].options[ col.field ] = col.selectOptions;
          } else {
            col.selectOptions(this.rowsValues[ e.index ].value).subscribe(data => {
              this.rowsValues[ e.index ].options[ col.field ] = data;
            }).unsubscribe();
          }
        });
        break;

      case 'CANCELAR':
        this.rowsValues[ e.index ].edit = false;
        this.rowsValues[ e.index ].value = JSON.parse(JSON.stringify(e.item));
        break;

      case 'GUARDAR':
        this.rowsValues[ e.index ].edit = false;
        this.handleSave(this.rowsValues[ e.index ].value, e.item, e.index);
        this.rowsValues[ e.index ].value = JSON.parse(JSON.stringify(e.item));
        break;
    }
  }

  handleSave = (newValue, oldValue, index) => {
    this.onSaveDataEvent.emit({
      newValue: newValue,
      oldValue: oldValue,
      rowIndex: index
    });
  }

  handleChangeRowSelect = (field, index, value) => {

    const colDefArray = this.definition.columns.filter(x => x.field == field);
    if (colDefArray.length > 0) {
      const colDef = colDefArray[ 0 ];
      if (typeof colDef.onChange === 'function') {
        colDef.onChange(this.rowsValues[ index ].value, (fieldName, newValue) => {
          this.rowsValues[ index ].options[ fieldName ] = newValue;
        });
      }
    }
  }
}
