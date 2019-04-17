import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-person-name',
  templateUrl: './change-person-name.component.html',
  styleUrls: [ './change-person-name.component.sass' ]
})
export class ChangePersonNameComponent implements OnInit {

  @Input() initial?: string;
  @Output('on-change-name') onChangeNameEvent: EventEmitter<any> = new EventEmitter();

  name: string;

  constructor() { }

  ngOnInit() {
    this.name = this.initial;
  }

  handleSubmit = () => {
    this.onChangeNameEvent.emit({ name: this.name });
  }

  handleClickResetName = () => {
    this.name = this.initial;
  }

}
