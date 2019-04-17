import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'siu-data-grid-skeleton',
  templateUrl: './data-grid-skeleton.component.html',
  styleUrls: [ './data-grid-skeleton.component.scss' ]
})
export class DataGridSkeletonComponent implements OnInit {

  @Input() rowsNumber: number = 10;
  arrayRows: any[];

  constructor() { }

  ngOnInit() {
    this.arrayRows = Array(this.rowsNumber).fill({ text: '' });
  }

}
