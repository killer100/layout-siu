import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

enum VARIANTS {
  NORMAL = 'normal',
  ICON = 'icon'
}
enum TOOLTIP_POSITION {
  AFTER = 'after',
  BEFORE = 'before',
  ABOVE = 'above',
  BELOW = 'below',
  LEFT = 'left',
  RIGHT = 'right'
}
@Component({
  selector: 'siu-base-button',
  templateUrl: './base-button.component.html',
  styleUrls: [ './base-button.component.scss' ]
})
export class BaseButtonComponent implements OnInit {

  variants = VARIANTS;
  tooltipPositionEnum = TOOLTIP_POSITION;


  @Input() variant: VARIANTS = this.variants.NORMAL;
  @Input() label: string;
  @Input() type: string = "button";
  @Input() icon: string;
  @Input() color: string;
  @Input() tooltip: string;
  @Input() tooltipPosition: string = this.tooltipPositionEnum.ABOVE;
  @Input() disabled: boolean = false;
  @Output('on-click') onClickEvent: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  handleClick() {
    if (this.disabled) return false;
    this.onClickEvent.emit();
  }

}
