import { Component, Input } from '@angular/core';
import { Historial } from '../historial';

@Component({
  selector: 'app-lista-historial',
  templateUrl: './lista-historial.component.html',
  styleUrls: ['./lista-historial.component.scss']
})
export class ListaHistorialComponent {
  @Input()
  public historial : Array<Historial> = [];
}
