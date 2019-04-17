import { IAppTitle } from '@siu/shared';

export interface IAppUiModel {
  drawerMini: boolean;
  drawerOpen: boolean;
  drawerMobileOpen: boolean;
  appTitle: IAppTitle;
  appMenu: any[];
  isMobile: boolean;
}

export class AppStoreModel {

  ui: IAppUiModel = {
    appTitle: { full: 'Sistema de Información Universitaria', mini: 'SIU' },
    drawerMini: false,
    isMobile: false,
    drawerOpen: false,
    drawerMobileOpen: false,
    appMenu: [
      {
        label: 'Demo',
        icon: 'offline_pin',
        items: [
          {
            label: 'Tablas',
            link: '/demo/tablas',
            icon: 'offline_pin',
          },
          {
            label: 'Botones',
            link: '/demo/botones',
            icon: 'offline_pin',
          },
          {
            label: 'Crud',
            link: '/demo/crud',
            icon: 'offline_pin',
          },
        ]
      },
      {
        label: 'Item 1',
        icon: 'offline_pin',
        items: [
          {
            label: 'Item 1.1',
            link: '/item-1-1',
            icon: 'offline_pin',
          },
          {
            label: 'Item 1.2',
            faIcon: 'fab fa-accessible-icon',
            items: [
              {
                label: 'Item 1.2.1',
                link: '/item-1-2-1',
                icon: 'offline_pin',
              },
              {
                label: 'Item 1.2.2',
                icon: 'offline_pin',
                items: [
                  {
                    label: 'Item 1.2.2.1',
                    faIcon: 'fas fa-anchor',
                    onSelected: function () {
                      console.log('Item 1.2.2.1');
                    }
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
            icon: 'accessibility'
          },
          {
            label: 'Item 2.2',
            link: '/item-2-2',
            icon: 'account_circle'
          }
        ]
      },
      {
        label: 'Item 3',
        icon: 'offline_pin',
        onSelected: function () {
          console.log('Item 3');
        }
      },
      {
        label: 'Item 4',
        link: '/item-4',
        icon: 'star_rate',
        hidden: true
      }
    ]
  };

}
