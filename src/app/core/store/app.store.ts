import { Injectable, OnInit } from '@angular/core';
import { Store } from './store';
import { AppStoreModel } from './app.store.model';

@Injectable({
  providedIn: 'root'
})
export class AppStore extends Store<AppStoreModel> {

  constructor() {
    super(new AppStoreModel());
  }

  //===============================================================
  // ACCIONES QUE MODIFICAN LA UI DE LA APP
  //===============================================================
  openDrawer = () => {
    this.setState({
      ...this.state, ui: { ...this.state.ui, drawerOpen: true }
    });
  }

  closeDrawer = () => {
    this.setState({
      ...this.state, ui: { ...this.state.ui, drawerOpen: false }
    });
  }

  openDrawerMobile = () => {
    this.setState({
      ...this.state, ui: { ...this.state.ui, drawerMobileOpen: true }
    });
  }

  closeDrawerMobile = () => {
    this.setState({
      ...this.state, ui: { ...this.state.ui, drawerMobileOpen: false }
    });
  }

  setIsMobile = (value: boolean) => {
    this.setState({
      ...this.state, ui: { ...this.state.ui, isMobile: value }
    });
  }


}
