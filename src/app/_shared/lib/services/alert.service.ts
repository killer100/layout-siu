import { AlertComponent } from './../components/alert/alert.component';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';

export interface IAlertConfig {
  icon?: 'success' | 'error' | 'warning' | 'info';
  confirm?: boolean;
  onClose?: Function;
  onConfirm?: Function;
  width?: string;
  okAlertText?: string;
  okConfirmText?: string;
  cancelConfirmText?: string;
};

const alertConfig: IAlertConfig = {
  icon: null,
  confirm: false,
  onClose: null,
  onConfirm: null,
  width: null,
  okAlertText: null,
  okConfirmText: null,
  cancelConfirmText: null
};

export interface IAlertData {
  msg: string;
  title: string;
  config: IAlertConfig;
}

@Injectable({
  providedIn: 'root',
})
export class AlertService {

  constructor(private dialog: MatDialog) {
  }

  open = (msg: string, title: string = null, config = alertConfig) => {
    const _config: MatDialogConfig = {
      data: {
        msg,
        title,
        config
      },
      disableClose: true,
      width: config.width || '450px'
    };

    const dialogRef = this.dialog.open(AlertComponent, _config);

    return new Promise((resolve, reject) => {
      dialogRef.afterClosed().subscribe(x => {
        resolve(x.confirm);
      });
    });
  }
}
