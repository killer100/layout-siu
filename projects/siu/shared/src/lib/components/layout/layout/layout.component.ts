
import { Component, OnDestroy, ChangeDetectorRef, Input, Output, EventEmitter } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { IAppTitle } from '../../../interfaces';

@Component({
  selector: 'siu-layout',
  templateUrl: './layout.component.html',
  styleUrls: [ './layout.component.scss' ]
})
export class LayoutComponent implements OnDestroy {
  @Input() appTitle: IAppTitle;
  @Input() appMenu: any[];
  @Input() drawerOpen: boolean;
  @Output('on-toogle-drawer') onToogleDrawerEvent: EventEmitter<boolean> = new EventEmitter();

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  handleToogleDrawer = () => {
    this.onToogleDrawerEvent.emit(this.drawerOpen ? false : true);
  }

  handleDrawerStateChange = (open) => {
    if (!open) {
      this.onToogleDrawerEvent.emit(false);
    }
  }

}
