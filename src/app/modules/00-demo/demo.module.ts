import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { TablasComponent } from './pages/tablas/tablas.component';

@NgModule({
  declarations: [TablasComponent],
  imports: [
    CommonModule,
    DemoRoutingModule
  ]
})
export class DemoModule { }
