import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'siu-button-nuevo',
  templateUrl: './button-nuevo.component.html',
  styleUrls: [ './button-nuevo.component.sass' ]
})
export class ButtonNuevoComponent {

  @Input() label: string = 'Nuevo';
  @Input() disabled: boolean = false;
  @Output('on-click') onClickEvent: EventEmitter<any> = new EventEmitter();
  @Input() type: string = 'button';

  constructor() { }

  handleClick = () => {
    this.onClickEvent.emit();
  }

}
