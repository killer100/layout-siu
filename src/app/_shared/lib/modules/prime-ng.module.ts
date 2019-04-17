import { NgModule } from '@angular/core';
import { SlideMenuModule } from 'primeng/slidemenu';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  imports: [
    SlideMenuModule,
    DropdownModule
  ],
  exports: [
    SlideMenuModule,
    DropdownModule
  ]
})
export class PrimeNgModule { }
