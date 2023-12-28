import { Component } from '@angular/core';

import {Router} from '@angular/router';
import {Eventos} from '../../models/eventos.model';
import { EventoService } from '../../services/eventos.service';

@Component({
  selector: 'app-add-evento',
  templateUrl: './add-evento.component.html',
  styleUrls: ['./add-evento.component.css']
})
export class AddEventoComponent {

  evento: Eventos = new Eventos();

  constructor(private router: Router, private eventoService: EventoService){}

  createEvento(): void {
    console.log(this.evento);
    this.eventoService.createEvento(this.evento)
      .subscribe(data => {
        alert("Evento generado de forma correcta.");
      });

  };

}
