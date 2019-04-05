import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule
  ]
})
export class AngularMaterialModule { }
