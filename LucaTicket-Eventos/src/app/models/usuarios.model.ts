export class Usuarios {
  usuarioID: number;
  nombre: string;
  apellido: string;
  fechaalta: string;  // Cambiado a Date
  mail: string;
  contrasena: string;

  constructor() {
    this.usuarioID = 0;
    this.nombre = '';
    this.apellido = '';
    this.fechaalta = '29-12-2023'; // Inicializado como la fecha actual
    this.mail = '';
    this.contrasena = '';
  }
}
