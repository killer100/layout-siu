import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablasComponent } from './pages/tablas/tablas.component';

const routes: Routes = [ {
  path: 'tablas', component: TablasComponent
} ];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class DemoRoutingModule { }
