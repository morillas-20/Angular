export class Eventos {
    eventoID: number;
    nombre: string;
    descripcioncorta: string;
    descripcionextendida: string;
    foto: string;
    fechaevento: string;
    horaevento: string;
    preciomin: number;
    preciomax: number;
    normas: string;
    genero: string;
    recinto: {
      id: number;
      nombre: string;
      ciudad: string;
      direccion: string;
      tiporecinto: string;
      aforo: string;
    };
  
    constructor(eventoID: number, nombre: string, descripcioncorta: string, descripcionextendida: string,
                foto: string, fechaevento: string, horaevento: string, preciomin: number, preciomax: number,
                normas: string, genero: string, recinto: {
                  id: number,
                  nombre: string,
                  ciudad: string,
                  direccion: string,
                  tiporecinto: string,
                  aforo: string
                }) {
      this.eventoID = eventoID;
      this.nombre = nombre;
      this.descripcioncorta = descripcioncorta;
      this.descripcionextendida = descripcionextendida;
      this.foto = foto;
      this.fechaevento = fechaevento;
      this.horaevento = horaevento;
      this.preciomin = preciomin;
      this.preciomax = preciomax;
      this.normas = normas;
      this.genero = genero;
      this.recinto = recinto;
    }
}
