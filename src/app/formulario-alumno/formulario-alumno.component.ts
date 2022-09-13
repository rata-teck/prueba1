import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Alumno } from '../alumno';
import { Seccion } from '../seccion';

@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.scss']
})
export class FormularioAlumnoComponent {
  public seccion : Seccion = {
    id : 0,
    nombre : ''
  }
  @Input()
  public secciones! : Array<Seccion>;
  @Output()
  public enviarAlumno = new EventEmitter<Alumno>();
  public alumno : Alumno = {
    run : '',
    nombre : '',
    apellido : '',
    edad : 0,
    seccion : this.seccion
  }
  public cambiaRun(event:Event):void{
    this.alumno.run = (event.target as HTMLInputElement).value;
  }
  public cambiaNombre(event:Event):void{
    this.alumno.nombre = (event.target as HTMLInputElement).value;
  }
  public cambiaApellido(event:Event):void{
    this.alumno.apellido = (event.target as HTMLInputElement).value;
  }
  public cambiaSeccion(event:Event):void{
    const id = parseInt((event.target as HTMLInputElement).value);
    for(let s2 of this.secciones){
      if(id == s2.id){
        this.seccion.id = id;
        this.seccion.nombre = s2.nombre;
      }
    }
  }
  public cambiaEdad(event:Event):void{
    this.alumno.edad = parseInt((event.target as HTMLInputElement).value);
  }
  public guardar():void{
    const copia = {
      ...this.alumno
    }
    this.enviarAlumno.emit(copia);
  }
}
