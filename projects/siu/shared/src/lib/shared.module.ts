import { NgModule } from '@angular/core';
import { AngularMaterialModule } from './modules/angular-material.module';
import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';
import { HeaderComponent } from './components/layout/header/header.component';
import { LayoutComponent } from './components/layout/layout/layout.component';
import { SidenavComponent } from './components/layout/sidenav/sidenav.component';


@NgModule({
  declarations: [
    HeaderComponent,
    LayoutComponent,
    SidenavComponent
  ],
  imports: [
    AngularMaterialModule,
    NgMaterialMultilevelMenuModule
  ],
  exports: [
    HeaderComponent,
    LayoutComponent,
    AngularMaterialModule
  ]
})
export class SharedModule { }
