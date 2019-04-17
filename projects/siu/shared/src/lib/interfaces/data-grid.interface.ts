export interface IDataGridColumnDefinition {
  field: string;
  label?: string;
  custom?: boolean;
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
  columns: IDataGridColumnDefinition[]
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
