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
      tipoRecinto: string;
      aforo: number;
    };
  
    constructor() {
      this.eventoID = 0;
      this.nombre = '';
      this.descripcioncorta = '';
      this.descripcionextendida = '';
      this.foto = 'foto.jpg';
      this.fechaevento = '12-12-2023';
      this.horaevento = '12:00'
      this.preciomin = 0;
      this.preciomax = 0;
      this.normas = '';
      this.genero = '';
      this.recinto = {id:1,nombre:'',ciudad:'Nueva York',direccion:'Empire State',tipoRecinto:'ESTADIO',aforo:1000};
    }
}
