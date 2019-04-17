import { Component, OnInit, Input, Output, EventEmitter, AfterContentInit, ContentChildren, QueryList } from '@angular/core';
import { IDataGridDefinition, IDataGridSource, IDataGridEvent } from '../../interfaces/data-grid.interface';
import { SiuTemplateDirective } from '../../directives/siu-template.directive';

@Component({
  selector: 'siu-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: [ './data-grid.component.scss' ]
})
export class DataGridComponent implements OnInit, AfterContentInit {

  @Input() emptyRowsMsg: string = 'No se encontraron resultados';
  @Input() loading: boolean;
  @Input() definition: IDataGridDefinition;
  @Input() source: IDataGridSource<any>;
  displayedColumns: string[];
  @Input() pageSizeOptions = [ 10, 25, 50, 100 ];
  @Output('on-load-data') onLoadDataEvent: EventEmitter<IDataGridEvent> = new EventEmitter();

  @ContentChildren(SiuTemplateDirective) templates: QueryList<SiuTemplateDirective>;

  customTemplates: any = {};

  constructor() { }

  ngOnInit() {
    this.displayedColumns = this.definition.columns.map(x => x.field);
  }

  ngAfterContentInit(): void {
    const customColumns = this.definition.columns.filter(x => x.custom === true);

    if (customColumns.length > 0) {
      customColumns.forEach(x => {
        const matches = this.templates.filter(temp => temp.getType() == x.field);
        if (matches.length > 0) {
          this.customTemplates[ x.field ] = matches[ 0 ].template;
        }
      });
    }
  }

  handleChangePage = (page) => {
    this.onLoadDataEvent.emit({
      page,
      pageSize: this.source.pageSize,
      orderBy: this.source.orderBy,
      orderDir: this.source.orderDir
    });
  }

  handleSort = (event) => {
    this.onLoadDataEvent.emit({
      page: this.source.page,
      pageSize: this.source.pageSize,
      orderBy: event.active,
      orderDir: event.direction
    });
  }

  handleChangePageSize = (pageSize) => {
    this.onLoadDataEvent.emit({
      page: 1,
      pageSize: pageSize,
      orderBy: this.source.orderBy,
      orderDir: this.source.orderDir
    });
  }
}
