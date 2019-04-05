import { IAppStoreModel } from './core/store/app.store.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppStore } from './core/store/app.store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {

  state: IAppStoreModel;

  subscription: Subscription;

  constructor(private store: AppStore) {

  }

  ngOnInit(): void {
    this.subscription = this.store.state$.subscribe(x => {
      this.state = x;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  handleToogleDrawer = () => {
    if (this.state.ui.drawerOpen) {
      this.store.closeDrawer();
    } else {
      this.store.openDrawer();
    }
  }
}
