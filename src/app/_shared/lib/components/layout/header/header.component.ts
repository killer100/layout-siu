import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IAppTitle } from '../../../interfaces';

@Component({
  selector: 'siu-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit {

  @Input() isMobile: boolean;
  @Input() title: IAppTitle;
  @Output('on-toogle-drawer') onToogleDrawerEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  handleToogleDrawer = () => {
    this.onToogleDrawerEvent.emit();
  }

}
