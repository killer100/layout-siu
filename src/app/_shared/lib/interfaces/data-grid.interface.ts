import { Observable } from 'rxjs';
export interface IDataGridButton {
  action: string;
  icon?: string;
  color?: string;
  tooltip?: string;
  disabled?: (item: any) => boolean;
  hidden?: (item: any) => boolean;
}

export interface IDataGridColumnDefinition {
  field: string;
  label?: string;
  template?: string;
  buttons?: IDataGridButton[],
  isDatetime?: boolean;
}

export interface IDataGridSource<T> {
  items: T[];
  page: number;
  pageSize: number;
  total: number;
  orderBy?: string;
  orderDir?: string;
}

export interface IDataGridDefinition {
  columns: IDataGridColumnDefinition[];
}

export interface IDataGridEvent {
  page: number;
  pageSize: number;
  orderBy: string;
  orderDir: string;
}

export interface IDataGridPageRequest {
  page: number;
  pageSize: number;
  orderBy: string;
  orderDir: string;
}

export interface IDataGridButtonEvent {
  action: string;
  item: any;
  index: number;
}

export interface IDataGridEditableDefinition {
  columns: IDataGridEditableColumnDefinition[];
}

export interface IDataGridEditableColumnDefinition {
  field: string;
  label?: string;
  editable: boolean;
  controlType?: 'text' | 'select' | 'multiselect' | 'multiline' | 'datepicker' | 'checkbox';
  selectOptions?: any[] | ((value) => Observable<any>)
  buttons?: IDataGridButton[],
  onChange?: (item, setOptsFn: (fieldName, newValue) => void) => void
}

export interface IDataGridEditableSaveEvent {
  newValue: any;
  oldValue: any;
  rowIndex: number;
}
