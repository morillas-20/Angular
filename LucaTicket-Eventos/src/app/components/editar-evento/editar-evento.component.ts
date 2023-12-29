import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import {Eventos} from '../../models/eventos.model';
import { EventoService } from '../../services/eventos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-evento',
  templateUrl: './editar-evento.component.html',
  styleUrls: ['./editar-evento.component.css']
})
export class EditarEventoComponent implements OnInit{

  id:any;
  data:any;
  evento:Eventos = new Eventos();

  constructor(private route: ActivatedRoute, private eventoService: EventoService, private router: Router){}

  ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    this.getData();
  }

  getData(){
    this.eventoService.getEventoById(this.id).subscribe(res =>{
      this.data = res;
      this.evento = this.data.info;
    })
  }

  editarEvento(){
    this.eventoService.editarEvento(this.id,this.evento).subscribe(res=>{});
    this.router.navigate(["../"]);
  }
  irEventos(){
    this.router.navigate(["../eventos"])
  }

}
