import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'siu-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: [ './sidenav.component.scss' ]
})
export class SidenavComponent implements OnInit {

  config = {
    //paddingAtStart: true,
    classname: 'siu-sidenav',
    /*listBackgroundColor: '#5d4595',
    fontColor: '#fff',
    backgroundColor: '#333',
    selectedListFontColor: 'red',*/
  };

  appitems = [
    {
      label: 'Item 1 (with Font awesome icon)',
      icon: 'offline_pin',
      items: [
        {
          label: 'Item 1.1',
          link: '/item-1-1',
          icon: 'offline_pin'
        },
        {
          label: 'Item 1.2',
          icon: 'offline_pin',
          items: [
            {
              label: 'Item 1.2.1',
              link: '/item-1-2-1',
              icon: 'offline_pin'
            },
            {
              label: 'Item 1.2.2',
              icon: 'offline_pin',
              items: [
                {
                  label: 'Item 1.2.2.1',
                  link: 'item-1-2-2-1',
                  icon: 'offline_pin'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      label: 'Item 2',
      icon: 'alarm',
      items: [
        {
          label: 'Item 2.1',
          link: '/item-2-1',
          icon: 'offline_pin'
        },
        {
          label: 'Item 2.2',
          link: '/item-2-2',
          icon: 'favorite_border'
        }
      ]
    },
    {
      label: 'Item 3',
      link: '/item-3',
      icon: 'offline_pin'
    },
    {
      label: 'Item 4',
      link: '/item-4',
      icon: 'star_rate',
      hidden: true
    }
  ];


  constructor() { }

  ngOnInit() {
  }

  selectedItem = (e) => {
    console.log(e);
  }
}
