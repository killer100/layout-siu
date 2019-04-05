
export interface IAppStoreModel {
  ui: { drawerOpen: boolean, appTitle: string };
}

export class AppStoreModel implements IAppStoreModel {

  ui = {
    appTitle: 'Sistema de Información Universitaria',
    drawerOpen: false
  };

}
