import { Seccion } from "./seccion";

export interface Alumno {
  run : string,
  nombre : string,
  apellido : string,
  edad : number,
  seccion : Seccion
}
