import { IDataGridButton } from '../interfaces/data-grid.interface';

function BuildGridButtonConsultar(disabled: (item) => boolean = null, hidden: (item) => boolean = null): IDataGridButton {
  return {
    action: 'CONSULTAR',
    icon: 'search',
    color: 'primary',
    tooltip: 'Consultar',
    disabled: disabled,
    hidden: hidden
  };
}

function BuildGridButtonEditar(disabled: (item, rowIndex?) => boolean = null, hidden: (item, rowIndex?) => boolean = null): IDataGridButton {
  return {
    action: 'EDITAR',
    icon: 'edit',
    color: 'primary',
    tooltip: 'Editar',
    disabled: disabled,
    hidden: hidden
  };
}

function BuildGridButtonVerDocumento(disabled: (item, rowIndex?) => boolean = null, hidden: (item, rowIndex?) => boolean = null): IDataGridButton {
  return {
    action: 'VER_DOCUMENTO',
    icon: 'insert_drive_file',
    color: 'primary',
    tooltip: 'Ver documento',
    disabled: disabled,
    hidden: hidden
  };
}

function BuildGridButtonEliminar(disabled: (item, rowIndex?) => boolean = null, hidden: (item, rowIndex?) => boolean = null): IDataGridButton {
  return {
    action: 'ELIMINAR',
    icon: 'delete',
    color: 'primary',
    tooltip: 'Eliminar',
    disabled: disabled,
    hidden: hidden
  };
}

function BuildGridButtonGuardar(disabled: (item, rowIndex?) => boolean = null, hidden: (item, rowIndex?) => boolean = null): IDataGridButton {
  return {
    action: 'GUARDAR',
    icon: 'save',
    color: 'primary',
    tooltip: 'Guardar',
    disabled: disabled,
    hidden: hidden
  };
}

function BuildGridButtonCancelar(disabled: (item, rowIndex?) => boolean = null, hidden: (item, rowIndex?) => boolean = null): IDataGridButton {
  return {
    action: 'CANCELAR',
    icon: 'cancel',
    color: 'primary',
    tooltip: 'Cancelar',
    disabled: disabled,
    hidden: hidden
  };
}

export const BuildGridButton = {
  CONSULTAR: BuildGridButtonConsultar,
  EDITAR: BuildGridButtonEditar,
  VER_DOCUMENTO: BuildGridButtonVerDocumento,
  ELIMINAR: BuildGridButtonEliminar,
  GUARDAR: BuildGridButtonGuardar,
  CANCELAR: BuildGridButtonCancelar,
};
