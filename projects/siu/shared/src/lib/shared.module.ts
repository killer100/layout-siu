import { NgModule } from '@angular/core';
import { AngularMaterialModule } from './modules/angular-material.module';
import { PrimeNgModule } from './modules/prime-ng.module';
import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';
import { HeaderComponent } from './components/layout/header/header.component';
import { LayoutComponent } from './components/layout/layout/layout.component';
import { SidenavComponent } from './components/layout/sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    HeaderComponent,
    LayoutComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    NgMaterialMultilevelMenuModule,
    PrimeNgModule
  ],
  exports: [
    HeaderComponent,
    LayoutComponent,
    AngularMaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    PrimeNgModule
  ]
})
export class SharedModule { }
