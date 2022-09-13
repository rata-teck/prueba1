import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioSeccionComponent } from './formulario-seccion/formulario-seccion.component';
import { FormularioAlumnoComponent } from './formulario-alumno/formulario-alumno.component';
import { ListaHistorialComponent } from './lista-historial/lista-historial.component';
import { ListaAlumnoComponent } from './lista-alumno/lista-alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioSeccionComponent,
    FormularioAlumnoComponent,
    ListaHistorialComponent,
    ListaAlumnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
