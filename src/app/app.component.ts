import { Component, Input } from '@angular/core';
import { Alumno } from './alumno';
import { Historial } from './historial';
import { Seccion } from './seccion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public historial : Array<Historial> = [];
  public alumnos : Array<Alumno> = [];
  public secciones : Array<Seccion> = [];
  public puenteSecciones(Secs:Array<Seccion>):void{
    this.secciones = Secs;
  }
  public puenteAlumno(Alm:Alumno):void{
    this.alumnos.push(Alm);
  }

}
