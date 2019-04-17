import { NgModule } from '@angular/core';

import {
  MatIconModule,
  MatListModule,
  MatRippleModule,
  MatTooltipModule
} from '@angular/material';

@NgModule({
  imports: [
    MatIconModule,
    MatListModule,
    MatRippleModule,
    MatTooltipModule
  ],
  declarations: [],
  exports: [
    MatIconModule,
    MatListModule,
    MatRippleModule,
    MatTooltipModule
  ]
})
export class MaterialsModule { }
