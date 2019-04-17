import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from './modules/angular-material.module';
import { PrimeNgModule } from './modules/prime-ng.module';
import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';
import { CommonModule } from '@angular/common';
//components
import { HeaderComponent } from './components/layout/header/header.component';
import { LayoutComponent } from './components/layout/layout/layout.component';
import { SidenavComponent } from './components/layout/sidenav/sidenav.component';
import { DataGridComponent } from './components/data-grid/data-grid.component';
import { DataGridPaginatorComponent } from './components/data-grid/data-grid-paginator/data-grid-paginator.component';
import { DataGridSkeletonComponent } from './components/data-grid/data-grid-skeleton/data-grid-skeleton.component';
import { SimpleSkeletonComponent } from './components/simple-skeleton/simple-skeleton.component';
import { FormFieldComponent } from './components/form-controls/form-field/form-field.component';
//directives
import { SiuTemplateDirective } from './directives/siu-template.directive';

@NgModule({
  declarations: [
    //components
    HeaderComponent,
    LayoutComponent,
    SidenavComponent,
    DataGridComponent,
    DataGridPaginatorComponent,
    DataGridSkeletonComponent,
    SimpleSkeletonComponent,
    FormFieldComponent,
    //directives
    SiuTemplateDirective,
  ],
  imports: [
    AngularMaterialModule,
    NgMaterialMultilevelMenuModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeNgModule,
    CommonModule
  ],
  exports: [
    AngularMaterialModule,
    PrimeNgModule,
    //components
    HeaderComponent,
    LayoutComponent,
    DataGridComponent,
    DataGridSkeletonComponent,
    SimpleSkeletonComponent,
    FormFieldComponent,
    //directives
    SiuTemplateDirective,
  ]
})
export class SharedModule { }
