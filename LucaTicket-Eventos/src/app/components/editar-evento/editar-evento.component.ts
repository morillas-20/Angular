import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import {Eventos} from '../../models/eventos.model';
import { EventoService } from '../../services/eventos.service';

@Component({
  selector: 'app-editar-evento',
  templateUrl: './editar-evento.component.html',
  styleUrls: ['./editar-evento.component.css']
})
export class EditarEventoComponent implements OnInit{

  id:any;
  data:any;
  evento:Eventos = new Eventos();

  constructor(private route: ActivatedRoute, private eventoService: EventoService){}

  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    this.getData();
  }

  getData(){
    this.eventoService.getEventoById(this.id).subscribe(res =>{
      this.data = res;
      console.log("A ver qué sale. Datos devueltos para el servicio de un ID")
      console.log(this.data.info)
      this.evento = this.data.info;
    })
  }

  editarEvento(){
    console.log("---------Evento editado de ahora")
    console.log("AAAAAAAAAAAAAAA"+this.evento.descripcioncorta)
    this.eventoService.editarEvento(this.id,this.evento).subscribe(res=>{})
  }

}
