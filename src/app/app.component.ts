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

  public registro! : Historial;
  public puenteSecciones(Secs:Array<Seccion>):void{
    this.secciones = Secs;
  }
  public puenteAlumno(Alm:Alumno):void{
    this.alumnos.push(Alm);
  }
  public cambiaSeccion(event:Event):void{
    const sec = parseInt((event.target as HTMLInputElement).value);
    for(let s4 of this.secciones){
      if(s4.id == sec){
        this.registro.alumno.seccion.id = s4.id;
        this.registro.alumno.seccion.nombre = s4.nombre;
      }
    }
  }
  public cambiaAlumno(event:Event):void{
    const rut = (event.target as HTMLInputElement).value;
    for(let a4 of this.alumnos){
      if(a4.run == rut){
        this.registro.alumno = {
          ...a4
        }
      }
    }
  }
  public registrar():void{
    this.registro.fecha = Date.now();
    this.historial.push(this.registro);
  }
}
