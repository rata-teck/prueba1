import { Component, Output, EventEmitter } from '@angular/core';
import { Seccion } from '../seccion';

@Component({
  selector: 'app-formulario-seccion',
  templateUrl: './formulario-seccion.component.html',
  styleUrls: ['./formulario-seccion.component.scss']
})
export class FormularioSeccionComponent {
  public secciones : Array<Seccion> = [];
  @Output()
  public enviarSecciones = new EventEmitter<Array<Seccion>>();
  public seccion : Seccion = {
    id : 1,
    nombre : ''
  }
  public cambiaNombreSec(event : Event):void{
    this.seccion.nombre = (event.target as HTMLInputElement).value;
  }
  public guardar():void{
    const copia = {
      ...this.seccion
    }
    this.secciones.push(copia);
    this.enviarSecciones.emit(this.secciones);
    this.seccion.id++;
    this.seccion.nombre = '';
  }
}
