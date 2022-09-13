import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Alumno } from '../alumno';

@Component({
  selector: 'app-lista-alumno',
  templateUrl: './lista-alumno.component.html',
  styleUrls: ['./lista-alumno.component.scss']
})
export class ListaAlumnoComponent {
  @Input()
  public alumnos : Array<Alumno> = [];
}
