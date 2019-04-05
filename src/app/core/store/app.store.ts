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


}
