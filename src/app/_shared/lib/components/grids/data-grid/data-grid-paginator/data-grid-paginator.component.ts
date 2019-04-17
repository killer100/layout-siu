import { Component, OnInit, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';

const buildTotalPages = (total, pageSize) => {
  return Math.ceil(total / pageSize);
};

const makePage = (number, text, isActive) => {
  return {
    number: number,
    text: text,
    active: isActive
  };
};

const BuildPages = (currentPage, totalPages, maxSize) => {
  let pages = [];
  const rotate = true;
  const boundaryLinkNumbers = false;
  const forceEllipses = true;
  // Default page limits
  let startPage = 1,
    endPage = totalPages;
  const isMaxSized = maxSize < totalPages;

  // recompute if maxSize
  if (isMaxSized) {
    if (rotate) {
      // Current page is displayed in the middle of the visible ones
      startPage = Math.max(currentPage - Math.floor(maxSize / 2), 1);
      endPage = startPage + maxSize - 1;

      // Adjust if limit is exceeded
      if (endPage > totalPages) {
        endPage = totalPages;
        startPage = endPage - maxSize + 1;
      }
    } else {
      // Visible pages are paginated with maxSize
      startPage = (Math.ceil(currentPage / maxSize) - 1) * maxSize + 1;

      // Adjust last page if limit is exceeded
      endPage = Math.min(startPage + maxSize - 1, totalPages);
    }
  }

  // Add page number links
  for (let number = startPage; number <= endPage; number++) {
    const page = makePage(number, number, number === currentPage);
    pages.push(page);
  }

  // Add links to move between page sets
  if (isMaxSized && maxSize > 0 && (!rotate || forceEllipses || boundaryLinkNumbers)) {
    if (startPage > 1) {
      if (!boundaryLinkNumbers || startPage > 3) {
        //need ellipsis for all options unless range is too close to beginning
        const previousPageSet = makePage(startPage - 1, "...", false);
        pages.unshift(previousPageSet);
      }
      if (boundaryLinkNumbers) {
        if (startPage === 3) {
          //need to replace ellipsis when the buttons would be sequential
          const secondPageLink = makePage(2, "2", false);
          pages.unshift(secondPageLink);
        }
        //add the first page
        const firstPageLink = makePage(1, "1", false);
        pages.unshift(firstPageLink);
      }
    }

    if (endPage < totalPages) {
      if (!boundaryLinkNumbers || endPage < totalPages - 2) {
        //need ellipsis for all options unless range is too close to end
        const nextPageSet = makePage(endPage + 1, "...", false);
        pages.push(nextPageSet);
      }
      if (boundaryLinkNumbers) {
        if (endPage === totalPages - 2) {
          //need to replace ellipsis when the buttons would be sequential
          const secondToLastPageLink = makePage(totalPages - 1, totalPages - 1, false);
          pages.push(secondToLastPageLink);
        }
        //add the last page
        const lastPageLink = makePage(totalPages, totalPages, false);
        pages.push(lastPageLink);
      }
    }
  }
  return pages;
};

@Component({
  selector: 'siu-data-grid-paginator',
  templateUrl: './data-grid-paginator.component.html',
  styleUrls: [ './data-grid-paginator.component.scss' ]
})
export class DataGridPaginatorComponent implements OnChanges {
  @Input() disabled: boolean = false;
  @Input() total: number;
  @Input() page: number;
  @Input() pageSize: number;
  @Input() maxSize: number = 5;
  @Input() pageSizeOptions = [];
  @Input() pageLength: number = 0;
  @Output('on-change-page') onChangePageEvent: EventEmitter<any> = new EventEmitter();
  @Output('on-change-page-size') onChangePageSizeEvent: EventEmitter<any> = new EventEmitter();
  totalPages: number = 0;
  pageItems: any[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {

    if (changes.total || changes.pageSize) {
      this.totalPages = buildTotalPages(this.total, this.pageSize);
      this.pageItems = BuildPages(this.page, this.totalPages, this.maxSize);
    }

    if (changes.page || changes.pageSize) {
      this.pageItems = BuildPages(this.page, this.totalPages, this.maxSize);
    }

  }

  handleClickFirstPage = () => {
    this.handleClick(1, this.page === 1);
  };

  handleClickPreviousPage = () => {
    this.handleClick(this.page - 1, this.page === 1);
  };

  handleClickNextPage = () => {
    this.handleClick(this.page + 1, this.page === this.totalPages);
  };

  handleClickLastPage = () => {
    this.handleClick(this.totalPages, this.page === this.totalPages);
  };

  handleClickPage = page => {
    this.handleClick(page, page === this.page);
  };

  handleClick = (page, disabled) => {
    if (!disabled && !this.disabled)
      this.onChangePageEvent.emit(page);
  };

  handleChangePageSize = (e) => {
    this.onChangePageSizeEvent.emit(e.value);
  }



}
