import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Injectable({
  providedIn: 'root',
})
export class ToastService {

  constructor(private snackBar: MatSnackBar) {
  }

  success = (msg, closeLabel = 'Cerrar', config: MatSnackBarConfig = null) => {
    this.snackBar.open(msg, closeLabel, { panelClass: 'success', ...config });
  }

  warning = (msg, closeLabel = 'Cerrar', config: MatSnackBarConfig = null) => {
    this.snackBar.open(msg, closeLabel, { panelClass: 'warning', ...config });
  }

  error = (msg, closeLabel = 'Cerrar', config: MatSnackBarConfig = null) => {
    this.snackBar.open(msg, closeLabel, { panelClass: 'error', ...config });
  }

  info = (msg, closeLabel = 'Cerrar', config: MatSnackBarConfig = null) => {
    this.snackBar.open(msg, closeLabel, { panelClass: 'info', ...config });
  }


}
