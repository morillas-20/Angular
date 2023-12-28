export class Usuarios {
    usuarioID: number;
    nombre: string;
    apellidos: string;
    fechaAlta: Date;
    
  
    constructor(eventoID: number, nombre: string, apellidos: string,
      fechaAlta: Date) {
      this.usuarioID = eventoID;
      this.nombre = nombre;
      this.apellidos = apellidos;
      this.fechaAlta = fechaAlta;
    }
}
