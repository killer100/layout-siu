import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'siu-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit {

  @Input() title: string;
  @Output('on-toogle-drawer') onToogleDrawerEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  handleToogleDrawer = () => {
    this.onToogleDrawerEvent.emit();
  }

}
