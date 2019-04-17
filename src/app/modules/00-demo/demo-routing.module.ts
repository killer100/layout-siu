import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablasComponent } from './pages/tablas/tablas.component';
import { BotonesComponent } from './pages/botones/botones.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { CrudComponent } from './pages/crud/crud.component';

const routes: Routes = [
  {
    path: 'tablas', component: TablasComponent,
  },
  {
    path: 'botones', component: BotonesComponent
  },
  {
    path: 'formulario', component: FormularioComponent
  },
  {
    path: 'crud', component: CrudComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class DemoRoutingModule { }
