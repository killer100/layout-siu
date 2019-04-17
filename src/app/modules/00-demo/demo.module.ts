import { SharedModule } from '@siu/shared';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoRoutingModule } from './demo-routing.module';
import { TablasComponent } from './pages/tablas/tablas.component';
import { PersonService } from './services/person.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChangePersonNameComponent } from './pages/tablas/components/misc/change-person-name/change-person-name.component';
import { FormBuscarComponent } from './pages/tablas/components/forms/form-buscar/form-buscar.component';
import { BotonesComponent } from './pages/botones/botones.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { CrudComponent } from './pages/crud/crud.component';
import { FormPersonaComponent } from './pages/crud/components/forms/form-persona/form-persona.component';
import { CrudStore } from './pages/crud/store/crud.store';

@NgModule({
  declarations: [
    TablasComponent,
    ChangePersonNameComponent,
    FormBuscarComponent,
    BotonesComponent,
    FormularioComponent,
    CrudComponent,
    FormPersonaComponent ],
  imports: [
    DemoRoutingModule,
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    PersonService
  ],
  entryComponents: [
    FormPersonaComponent
  ]
})
export class DemoModule { }
