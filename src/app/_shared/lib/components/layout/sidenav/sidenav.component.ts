import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'siu-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: [ './sidenav.component.scss' ]
})
export class SidenavComponent {

  @Input() drawerOpen: boolean;

  @Input() menuItems: any[];

  @Output('on-select-menu-item') onSelectMenuItemEvent: EventEmitter<any> = new EventEmitter();

  config = {
    classname: `siu-sidenav`,
    paddingAtStart: false,
    interfaceWithRoute: true,
    collapseOnSelect: true,
    highlightOnSelect: false,
    rtlLayout: false
  };

  constructor() { }

  selectedItem = (e) => {
    this.onSelectMenuItemEvent.emit(e);
  }

  handleClickItem = (item) => {
    console.log(item)
  }
}
