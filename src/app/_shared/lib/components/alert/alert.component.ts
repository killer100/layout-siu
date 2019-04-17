import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IAlertData } from '../../services/alert.service';

@Component({
  selector: 'siu-alert',
  templateUrl: './alert.component.html',
  styleUrls: [ './alert.component.scss' ]
})
export class AlertComponent implements OnInit {

  okConfirmText: string = 'Confirmar';
  cancelConfirmText: string = 'Cancelar';
  okAlertText: string = 'Ok';

  constructor(private dialogRef: MatDialogRef<AlertComponent>, @Inject(MAT_DIALOG_DATA) public data: IAlertData) {
    if (data.config.okAlertText)
      this.okAlertText = data.config.okAlertText;

    if (data.config.okConfirmText)
      this.okConfirmText = data.config.okConfirmText;

    if (data.config.cancelConfirmText)
      this.cancelConfirmText = data.config.cancelConfirmText;
  }

  ngOnInit() {
  }

  handleClose = (confirm: boolean = false) => {
    this.dialogRef.close({ confirm: confirm });
  }

}
