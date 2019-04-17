import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'siu-button-cancelar',
  templateUrl: './button-cancelar.component.html',
  styleUrls: [ './button-cancelar.component.sass' ]
})
export class ButtonCancelarComponent {

  @Input() disabled: boolean = false;
  @Output('on-click') onClickEvent: EventEmitter<any> = new EventEmitter();
  @Input() retornar: boolean = false;
  @Input() type: string = 'button';

  constructor() { }

  handleClick = () => {
    this.onClickEvent.emit();
  }

}
