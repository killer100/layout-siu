
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from './modules/angular-material.module';
import { PrimeNgModule } from './modules/prime-ng.module';
//import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
//components
import { HeaderComponent } from './components/layout/header/header.component';
import { LayoutComponent } from './components/layout/layout/layout.component';
import { SidenavComponent } from './components/layout/sidenav/sidenav.component';
import { DataGridComponent } from './components/grids/data-grid/data-grid.component';
import { DataGridPaginatorComponent } from './components/grids/data-grid/data-grid-paginator/data-grid-paginator.component';
import { DataGridSkeletonComponent } from './components/grids/data-grid/data-grid-skeleton/data-grid-skeleton.component';
import { SimpleSkeletonComponent } from './components/simple-skeleton/simple-skeleton.component';
import { FormFieldComponent } from './components/form-controls/form-field/form-field.component';
import { BaseButtonComponent } from './components/buttons/button/base-button.component';
import { DataGridButtonsComponent } from './components/grids/data-grid/data-grid-buttons/data-grid-buttons.component';
import { ButtonBuscarComponent } from './components/buttons/button-buscar/button-buscar.component';
import { ButtonLimpiarComponent } from './components/buttons/button-limpiar/button-limpiar.component';
import { ButtonNuevoComponent } from './components/buttons/button-nuevo/button-nuevo.component';
import { ButtonCancelarComponent } from './components/buttons/button-cancelar/button-cancelar.component';
import { ButtonGuardarComponent } from './components/buttons/button-guardar/button-guardar.component';
import { NgMaterialMultilevelMenuModule } from './components/layout/lib/ng-material-multilevel-menu.module';
import { DataGridEditableComponent } from './components/grids/data-grid-editable/data-grid-editable.component';
import { AlertComponent } from './components/alert/alert.component';
//directives
import { SiuTemplateDirective } from './directives/siu-template.directive';
import { NgSelectFormFieldControlDirective } from './directives/ng-select.directive';
import { DisableControlDirective } from './directives/disabled-control.directive';
//pipes
import { DateFormatPipe } from './pipes/date-format.pipe';

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
    BaseButtonComponent,
    DataGridButtonsComponent,
    ButtonBuscarComponent,
    ButtonLimpiarComponent,
    ButtonNuevoComponent,
    ButtonCancelarComponent,
    ButtonGuardarComponent,
    DataGridEditableComponent,
    AlertComponent,
    //directives
    SiuTemplateDirective,
    NgSelectFormFieldControlDirective,
    DisableControlDirective,
    //pipes
    DateFormatPipe
  ],
  imports: [
    AngularMaterialModule,
    //NgMaterialMultilevelMenuModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeNgModule,
    CommonModule,
    NgSelectModule,
    NgMaterialMultilevelMenuModule
  ],
  exports: [
    AngularMaterialModule,
    PrimeNgModule,
    NgSelectModule,
    //components
    HeaderComponent,
    LayoutComponent,
    DataGridComponent,
    DataGridSkeletonComponent,
    SimpleSkeletonComponent,
    FormFieldComponent,
    BaseButtonComponent,
    DataGridButtonsComponent,
    ButtonBuscarComponent,
    ButtonLimpiarComponent,
    ButtonNuevoComponent,
    ButtonCancelarComponent,
    ButtonGuardarComponent,
    DataGridEditableComponent,
    AlertComponent,
    //directives
    SiuTemplateDirective,
    NgSelectFormFieldControlDirective,
    DisableControlDirective,
    //pipes
    DateFormatPipe
  ],
  entryComponents: [ AlertComponent ]
})
export class SharedModule { }
