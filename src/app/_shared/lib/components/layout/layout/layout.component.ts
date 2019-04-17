
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IAppTitle } from '../../../interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'siu-layout',
  templateUrl: './layout.component.html',
  styleUrls: [ './layout.component.scss' ]
})
export class LayoutComponent {
  @Input() appTitle: IAppTitle;
  @Input() appMenu: any[];
  @Input() drawerOpen: boolean;
  @Input() drawerMini: boolean;
  @Output('on-toogle-drawer') onToogleDrawerEvent: EventEmitter<boolean> = new EventEmitter();
  @Input() router: Router;
  @Input() isMobile: boolean = false;

  constructor() {

  }

  handleToogleDrawer = () => {
    /*if (this.isMobile) {
      this.onToogleDrawerEvent.emit(this.drawerOpen ? false : true);
    } else {
      this.onToogleDrawerEvent.emit(this.drawerMini ? true : false);
    }*/
    this.onToogleDrawerEvent.emit(this.drawerOpen ? false : true);
  }

  handleDrawerStateChange = (open) => {
    if (!open) {
      this.onToogleDrawerEvent.emit(false);
    }
  }

  handleClickItemMenu = (e) => {
    this.router.navigate([ e.link ]);
  }

}
