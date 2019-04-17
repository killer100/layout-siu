import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'siu-button-limpiar',
  templateUrl: './button-limpiar.component.html',
  styleUrls: [ './button-limpiar.component.sass' ]
})
export class ButtonLimpiarComponent {

  @Input() disabled: boolean = false;
  @Output('on-click') onClickEvent: EventEmitter<any> = new EventEmitter();
  @Input() type: string = 'button';

  constructor() { }

  handleClick = () => {
    this.onClickEvent.emit();
  }

}
