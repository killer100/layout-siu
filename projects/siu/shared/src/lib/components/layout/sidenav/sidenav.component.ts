import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'siu-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Input() drawerOpen: boolean;

  pages: any[];
  items: MenuItem[] = [
    {
      label: 'File',
      icon: 'pi pi-fw pi-plus', command: (event) => {
        console.log(event)
        //event.originalEvent: Browser event
        //event.item: menuitem metadata
      },
      items: [{
        label: 'New',
        icon: 'pi pi-fw pi-plus',
        items: [
          { label: 'Project' },
          { label: 'Other' },
        ]
      },
      { label: 'Open' },
      { label: 'Quit' }
      ]
    },
    {
      label: 'Edit',
      icon: 'pi pi-fw pi-pencil',
      items: [
        {
          label: 'Delete', icon: 'pi pi-fw pi-trash', command: (event) => {
            console.log(event)
            //event.originalEvent: Browser event
            //event.item: menuitem metadata
          }
        },
        {
          label: 'Refresh', icon: 'pi pi-fw pi-refresh', command: (event) => {
            console.log(event)
            //event.originalEvent: Browser event
            //event.item: menuitem metadata
          }
        }
      ]
    }
  ];


  constructor() { }

  ngOnInit() {
  }

  selectedItem = (e) => {
    console.log(e);
  }

  get config() {
    return {
      //paddingAtStart: true,
      classname: `siu-sidenav ${this.drawerOpen ? '' : 'drawer-close'}`,
      /*listBackgroundColor: '#5d4595',
      fontColor: '#fff',
      backgroundColor: '#333',
      selectedListFontColor: 'red',*/
    }
  };

  handleClickItem = (item) => {
    console.log(item)
  }
}
