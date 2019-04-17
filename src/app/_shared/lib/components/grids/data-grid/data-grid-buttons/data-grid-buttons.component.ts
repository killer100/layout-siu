import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IDataGridButton } from '@siu/shared/lib/interfaces/data-grid.interface';

@Component({
  selector: 'siu-data-grid-buttons',
  templateUrl: './data-grid-buttons.component.html',
  styleUrls: [ './data-grid-buttons.component.sass' ]
})
export class DataGridButtonsComponent {

  @Input() rowIndex: number;
  @Input() item: any;
  @Input() disabled: boolean;
  @Input() buttons: IDataGridButton[];
  @Output('on-click-button') onClickButtonEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  handleClickButton = (button: IDataGridButton) => {
    this.onClickButtonEvent.emit({ action: button.action });
  }

}
