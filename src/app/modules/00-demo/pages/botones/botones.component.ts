import { Component, OnInit } from '@angular/core';
import { ToastService, AlertService } from '@siu/shared';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: [ './botones.component.sass' ]
})
export class BotonesComponent implements OnInit {


  code = {
    boton0: `<siu-base-button label="botón normal"></siu-base-button>`,
    boton1: `<siu-base-button
      label="botón primary"
      color="primary"
    ></siu-base-button>`,
    boton2: `<siu-base-button
    label="botón con icono"
    color="accent"
    icon="alarm"
  ></siu-base-button>`,
    boton3: ` <siu-base-button
    label="botón con tooltip"
    color="primary"
    icon="alarm"
    tooltip="botón con tooltip"
  ></siu-base-button>`,
    boton4: `<siu-base-button
    variant="icon"
    color="primary"
    icon="menu"
    tooltip="Consultar"
  ></siu-base-button>`,
    boton5: `<siu-button-buscar></siu-button-buscar>`,
    boton6: `<siu-button-nuevo></siu-button-nuevo>`,
    boton7: `<siu-button-limpiar></siu-button-limpiar>`,
    boton8: `<siu-button-cancelar></siu-button-cancelar>`,
    boton9: `<siu-button-cancelar></siu-button-cancelar>`,
  }

  constructor(private toast: ToastService, private alert: AlertService) { }

  ngOnInit() {
  }

  handleClickToastSuccess = () => {
    this.toast.success('soy un toast success!');
  }

  handleClickToastError = () => {
    this.toast.error('soy un toast error!');
  }

  handleClickToastWarning = () => {
    this.toast.warning('soy un toast warning!');
  }

  handleClickToastInfo = () => {
    this.toast.info('soy un toast info!');
  }

  handleClickOpenAlertSuccess = () => {
    this.alert.open('Mensaje de Alerta')
  }

  handleClickOpenAlertError = () => {
    this.alert.open('Mensaje de Alerta', 'Titulo del mensaje', { icon: 'error' });
  }

  handleClickOpenAlertWarning = () => {
    this.alert.open('Mensaje de Alerta', 'Titulo del mensaje', { icon: 'warning', okAlertText: 'alert' });
  }

  handleClickOpenAlertInfo = () => {
    this.alert.open('Mensaje de Alerta', 'Titulo del mensaje', { icon: 'info' });
  }

  handleClickOpenConfirm = () => {
    this.alert.open('Mensaje de confirmacion', 'Titulo del mensaje', { confirm: true }).then((confirm) => {
      if (confirm) {
        this.alert.open('confirmó');
      } else {
        console.log('cancelo');
      }
    });
  }
}
