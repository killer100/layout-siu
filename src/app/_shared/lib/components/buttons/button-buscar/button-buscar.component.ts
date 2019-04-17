import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'siu-button-buscar',
  templateUrl: './button-buscar.component.html',
  styleUrls: [ './button-buscar.component.sass' ]
})
export class ButtonBuscarComponent {

  @Input() type: string = 'button';
  @Input() disabled: boolean = false;
  @Output('on-click') onClickEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  handleClick = () => {
    this.onClickEvent.emit();
  }

}
