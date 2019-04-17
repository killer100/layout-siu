import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'siu-button-guardar',
  templateUrl: './button-guardar.component.html',
  styleUrls: [ './button-guardar.component.sass' ]
})
export class ButtonGuardarComponent {

  @Input() disabled: boolean = false;
  @Output('on-click') onClickEvent: EventEmitter<any> = new EventEmitter();
  @Input() type: string = 'button';

  constructor() { }

  handleClick = () => {
    this.onClickEvent.emit();
  }

}
