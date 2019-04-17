import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppStore } from './core/store/app.store';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { MediaMatcher } from '@angular/cdk/layout';
import { MultilevelMenuService } from './_shared/lib/components/layout/lib/multilevel-menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {

  //state: IAppStoreModel;

  //subscription: Subscription;

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  readonly state$ = this.store.state$.pipe(map(state => state), distinctUntilChanged());

  constructor(
    private store: AppStore,
    public router: Router,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private multilevelMenuService: MultilevelMenuService

  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => {
      changeDetectorRef.detectChanges();
      this.store.setIsMobile(this.mobileQuery.matches);
    };
    this.mobileQuery.addListener(this._mobileQueryListener);

  }

  ngOnInit(): void {
    this.store.setIsMobile(this.mobileQuery.matches);
    /*this.subscription = this.store.state$.subscribe(x => {
      this.state = x;
    });*/
    this.multilevelMenuService.expandTrue();

  }

  ngOnDestroy() {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  handleToogleDrawer = (open) => {
    if (open) {
      if (this.mobileQuery.matches) {
        this.store.openDrawerMobile();
      } else {
        this.store.openDrawer();
      }
    } else {
      if (this.mobileQuery.matches) {
        this.store.closeDrawerMobile();
      } else {
        this.store.closeDrawer();
      }
    }
  }
}
