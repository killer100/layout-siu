import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'siu-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: [ './sidenav.component.scss' ]
})
export class SidenavComponent {

  @Input() drawerOpen: boolean;

  @Input() menuItems: any[];

  config = {
    classname: `siu-sidenav`
  };

  constructor() { }

  selectedItem = (e) => {
    console.log(e);
  }

  handleClickItem = (item) => {
    console.log(item)
  }
}
