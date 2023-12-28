export class Usuarios {
  usuarioID: number;
  nombre: string;
  apellido: string;
  fechaAlta: string;  // Cambiado a Date
  mail: string;
  contrasena: string;

  constructor() {
    this.usuarioID = 0;
    this.nombre = '';
    this.apellido = '';
    this.fechaAlta = '29-12-2023'; // Inicializado como la fecha actual
    this.mail = '';
    this.contrasena = '';
  }
}
